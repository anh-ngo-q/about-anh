import fahrenheit451Cover from "../assets/books/fahrenheit-451.jpg";

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
      "At first, looking at the title and short description, I thought it would be about the Nazis or communism. Now I realize the problems mentioned are all around the world. Coming home to an emotionally absent partner, apathy to the death of others or even loved ones, lack of thinking depth, and consumption of mindless, shallow entertainment, etc.\n\nReading/learning and watching the White Clown both bring joy, but how is one different from the other? If I try to explain it with science, it'd be that constant dopamine hits eventually numb you from joy itself, while reading or any other \"productive\" activity brings delayed gratification, so no \"overdose\" :))\n\nOn the other hand, having 3-4 expensive interactive parlour walls doesn't bring richness to their inner mind. Passively taking in \"shouting\" from the \"family\", ads, etc. leaves no room for anyone to pause and think. In fact, one probably thinks in the same way as another — Mildred and her friends sound all the same. If there's no difference in perspectives or thinking, how can a society progress?\n\nI guess \"ignorance is bliss\" isn't always true, or maybe only in the very short term. Mildred didn't even remember that she was overdosing.\n\nOne question I have is that Beatty is well-read, but he's not wise, and later \"suicides\" with Montag's help. Why is he unhappy? He read the books but nothing really stayed — he used the fact that books are contradictory as a shield for his argument instead of actually absorbing them. He tried so hard to convince Montag and himself that they were doing the right thing, but I guess in the end he couldn't live with the fact that he'd destroyed a great share of humanity's intellectual history.\n\nThe scary part is that the real enemy isn't an ideology or a dictator, but comfort, distraction, and losing humanity's greatest ability — to think.\n\n\"The Time Machine\" would be a good follow-up on this topic.",
    cover: fahrenheit451Cover,
    status: "published",
    createdAt: "2026-08-11T00:00:00Z",
  },
  {
    id: "cuon-tron-trong-chan",
    title: "Cuộn tròn trong chăn",
    topic: "Music",
    content:
      "During busy winter days, sometimes I just wish I could curl up under the comforter, forget about the outside world, and roll like a burrito 🌯",
    music: { url: "https://open.spotify.com/track/1ShRHPAiiIrh0arZbSFmx1", start: 95 },
    status: "published",
    createdAt: "2026-08-15T00:00:00Z",
  }
];

// Topics listed here always appear first (in this order); any other topics
// follow, ordered by their most recent post.
const PINNED_TOPICS = ["Meta"];

// Returns published posts grouped by topic, newest first within each group.
// Topic order: pinned topics first, then remaining topics newest-first.
export function getGroupedPosts() {
  const published = posts.filter((p) => p.status === "published");
  published.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const grouped = published.reduce((acc, post) => {
    if (!acc[post.topic]) acc[post.topic] = [];
    acc[post.topic].push(post);
    return acc;
  }, {});

  const orderedTopics = [
    ...PINNED_TOPICS.filter((topic) => topic in grouped),
    ...Object.keys(grouped).filter((topic) => !PINNED_TOPICS.includes(topic)),
  ];

  return orderedTopics.reduce((acc, topic) => {
    acc[topic] = grouped[topic];
    return acc;
  }, {});
}
