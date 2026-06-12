type IconName = "dress" | "delivery" | "shield" | "return" | "fabric" | "sparkle" | "box";

const paths: Record<IconName, React.ReactNode> = {
  dress: <path d="M9 3h6l1 4 4 4-3 2-1-2v10H8V11l-1 2-3-2 4-4 1-4Z" />,
  delivery: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" /></>,
  shield: <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-5" />,
  return: <><path d="M9 7H5v-4M5 7c2-3 7-5 11-2 4 3 4 9 1 12s-8 3-11 0" /><path d="M15 17h4v4" /></>,
  fabric: <path d="M5 4h14v16H5zM5 8h14M9 4v16M15 4v16" />,
  sparkle: <><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  box: <><path d="m4 7 8-4 8 4-8 4-8-4Zm0 0v10l8 4 8-4V7M12 11v10" /></>,
};

export function StoreIcon({ name }: { name: IconName }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">{paths[name]}</svg>;
}
