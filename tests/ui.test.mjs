import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

const baseUrl = (process.env.TEST_BASE_URL ?? "http://localhost:3000").replace(/\/?$/, "/");
const expectsPublicPreview = process.env.TEST_EXPECT_DEMO_BANNER === "true" || baseUrl.includes("github.io");
let driver;

function pageUrl(path) {
  return new URL(path.replace(/^\//, ""), baseUrl).href;
}

before(async () => {
  try {
    const response = await fetch(baseUrl);
    assert.equal(response.ok, true);
  } catch {
    throw new Error(`Bayt al-Haya is not running at ${baseUrl}. Start it with "npm run dev" or set TEST_BASE_URL before running "npm run test:ui".`);
  }
  const options = new chrome.Options();
  options.addArguments("--headless=new", "--window-size=1440,1000");
  driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
});

after(async () => {
  if (driver) await driver.quit();
});

async function open(path) {
  await driver.get(pageUrl(path));
  await driver.wait(until.elementLocated(By.css("h1")), 7000);
  await driver.sleep(400);
}

async function resetSite() {
  await open("/");
  await driver.executeScript("localStorage.clear()");
  await driver.navigate().refresh();
  await driver.wait(until.elementLocated(By.css('[data-testid="consent-manager"]')), 5000);
}

async function clickTestId(testId) {
  const element = await driver.wait(until.elementLocated(By.css(`[data-testid="${testId}"]`)), 5000);
  await driver.executeScript("arguments[0].scrollIntoView({block: 'center'})", element);
  await driver.wait(until.elementIsVisible(element), 5000);
  await driver.wait(until.elementIsEnabled(element), 5000);
  await element.click();
}

test("Bayt al-Haya home, brand, demo mode, and product images load", async () => {
  await resetSite();
  await clickTestId("reject-optional");
  assert.match(await driver.findElement(By.css('[data-testid="brand-link"]')).getText(), /Bayt al-Haya/);
  assert.match(await driver.findElement(By.css("h1")).getText(), /Faith-inspired modest wear for everyday grace/i);
  const image = await driver.findElement(By.css("article img"));
  assert.equal(await image.isDisplayed(), true);
  assert.equal(await driver.executeScript("return arguments[0].naturalWidth > 0", image), true);
  const banners = await driver.findElements(By.css('[data-testid="demo-banner"]'));
  assert.equal(banners.length > 0, expectsPublicPreview);
});

test("privacy choices can be accepted, rejected, managed, and reset", async () => {
  await resetSite();
  await clickTestId("manage-choices");
  assert.equal(await driver.findElement(By.css('[data-testid="preference-options"]')).isDisplayed(), true);
  await clickTestId("accept-all");
  let consent = await driver.executeScript('return JSON.parse(localStorage.getItem("bayt_al_haya_consent"))');
  assert.equal(consent.personalization, true);
  assert.equal(consent.analytics, true);

  await open("/products/classic-black-abaya");
  assert.notEqual(await driver.executeScript('return localStorage.getItem("bayt_al_haya_behavior")'), null);
  await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
  await clickTestId("cookie-preferences");
  await clickTestId("reset-behavior");
  assert.equal(await driver.executeScript('return localStorage.getItem("bayt_al_haya_behavior")'), null);
  await clickTestId("reject-optional");
  consent = await driver.executeScript('return JSON.parse(localStorage.getItem("bayt_al_haya_consent"))');
  assert.equal(consent.personalization, false);
  assert.equal(consent.analytics, false);
});

test("order tracking remains a safe placeholder", async () => {
  await resetSite();
  await clickTestId("reject-optional");
  await open("/order-tracking");
  assert.equal(await driver.findElement(By.css('[data-testid="order-number"]')).isDisplayed(), true);
  assert.equal(await driver.findElement(By.css('[data-testid="tracking-email"]')).isDisplayed(), true);
  await clickTestId("track-order-button");
  const message = await driver.wait(until.elementLocated(By.css('[data-testid="tracking-message"]')), 5000);
  assert.equal(await message.getText(), "Order tracking will be available soon");
});

test("feedback page accepts demo feedback without sending it", async () => {
  await resetSite();
  await clickTestId("reject-optional");
  await open("/feedback");
  assert.equal(await driver.findElement(By.css("h1")).getText(), "Share Your Feedback");
  await clickTestId("feedback-submit");
  const message = await driver.wait(until.elementLocated(By.css('[data-testid="feedback-message"]')), 5000);
  assert.equal(await message.getText(), "Thank you for your feedback. This demo form is not connected yet.");
});

test("admin page is safe and does not expose a live public API", async () => {
  await resetSite();
  await clickTestId("reject-optional");
  await open("/admin");
  assert.equal(await driver.findElement(By.css("h1")).getText(), "Admin Demo");
  if (expectsPublicPreview) {
    assert.equal(await driver.findElement(By.css('[data-testid="admin-public-safe"]')).isDisplayed(), true);
  } else {
    assert.match(await driver.findElement(By.css("body")).getText(), /No API request is made by this page yet/);
  }
});

test("main navigation loads customer-facing pages", async () => {
  await resetSite();
  await clickTestId("reject-optional");
  const destinations = [["Home", "/", "Faith-inspired modest wear for everyday grace"], ["Products", "/products", "Products"], ["About Us", "/about", "About Us"], ["Contact", "/contact", "Contact"], ["Feedback", "/feedback", "Share Your Feedback"], ["Cart", "/cart", "Cart"], ["Order Tracking", "/order-tracking", "Order Tracking"]];
  for (const [label, path, heading] of destinations) {
    await open("/");
    const link = await driver.findElement(By.css('[data-testid="main-navigation"]')).findElement(By.linkText(label));
    assert.equal(await link.isDisplayed(), true);
    await link.click();
    await driver.wait(until.urlContains(new URL(path.replace(/^\//, ""), baseUrl).pathname), 7000);
    assert.equal(await driver.findElement(By.css("h1")).getText(), heading);
  }
});
