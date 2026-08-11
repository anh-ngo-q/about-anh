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
  },
  {
    id: "fahrenheit-451",
    title: "Fahrenheit 451",
    topic: "Books",
    content:
      "At first, looking at the title and short description, I thought it would be about the Nazis or communism. Now I realize the problems mentioned are all around the world. Coming home to an emotionally absent partner, apathy to the death of others or even loved ones, lack of thinking depth, and consumption of mindless, shallow entertainment, etc.\n\nReading/learning and watching the White Clown both bring joy, but how is one different from the other? If I try to explain it with science, it'd be that constant dopamine hits eventually numb you from joy itself, while reading or any other \"productive\" activity brings delayed gratification, so no \"overdose\" :))\n\nOn the other hand, having 3-4 expensive interactive parlour walls doesn't bring richness to their inner mind. Passively taking in \"shouting\" from the \"family\", ads, etc. leaves no room for anyone to pause and think. In fact, one probably thinks in the same way as another — Mildred and her friends sound all the same. If there's no difference in perspectives or thinking, how can a society progress?\n\nI guess \"ignorance is bliss\" isn't always true, or maybe only in the very short term. Mildred didn't even remember that she was overdosing.\n\nOne question I have is that Beatty is well-read, but he's not wise, and later \"suicides\" with Montag's help. Why is he unhappy? He read the books but nothing really stayed — he used the fact that books are contradictory as a shield for his argument instead of actually absorbing them. He tried so hard to convince Montag and himself that they were doing the right thing, but I guess in the end he couldn't live with the fact that he'd destroyed a great share of humanity's intellectual history.\n\nThe scary part is that the real enemy isn't an ideology or a dictator, but comfort, distraction, and losing humanity's greatest ability — to think.\n\nThe Time Machine would be a good follow-up on this topic.",
    status: "published",
    createdAt: "2026-08-11T00:00:00Z",
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
