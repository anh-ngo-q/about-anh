// Virtual folders shown by the `ls` terminal command.
// Add entries here to surface new folders; create a matching page/route for each.
export const lsFolders = [
  { name: "thoughts", path: "/thoughts", permissions: "drwxr-xr-x" },
];

// Blog posts. Add entries here to publish new posts.
// status: "published" | "draft"  — draft posts are never shown on the page.
// music: optional Spotify track URL, e.g. "https://open.spotify.com/track/TRACKID"
export const posts = [
  {
    id: "hello-world",
    title: "Hello, World",
    topic: "Meta",
    content:
      "If you're reading this, you found the thoughts page.\n\nThis is where I'll write things — observations, half-baked ideas, things i want to remember. No particular schedule, no particular audience.\n\nJust thoughts.",
    status: "published",
    createdAt: "2026-04-11T00:00:00Z",
  },
  {
    id: "love-and-cigarettes",
    title: "Why is love similar to a cigarette?",
    topic: "Music",
    content:
      "\"Because love can burn like a cigarette, and leave you alone with nothing.\"\n\nBut I'll never touch a cigarette.",
    music: {url: "https://open.spotify.com/track/6dBUzqjtbnIa1TwYbyw5CM", start: 50},
    status: "published",
    createdAt: "2026-04-26T03:53:00Z",
  }
];

// Returns published posts grouped by topic, newest first within each group.
export function getGroupedPosts() {
  const published = posts.filter((p) => p.status === "published");
  published.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return published.reduce((acc, post) => {
    if (!acc[post.topic]) acc[post.topic] = [];
    acc[post.topic].push(post);
    return acc;
  }, {});
}
