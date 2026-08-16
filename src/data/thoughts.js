import fahrenheit451Cover from "../assets/books/fahrenheit-451.jpg";
import duckSwimming from "../assets/self/duck-swimming.jpg";

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
    music: { url: "https://open.spotify.com/track/1ShRHPAiiIrh0arZbSFmx1", start: 121 },
    status: "published",
    createdAt: "2026-08-15T00:00:00Z",
  },
  {
    id: "if-enough",
    title: "if (enough) {...}",
    topic: "Self & Family",
    content:
      "Lately I have deleted almost all social media. Not that I don't find the connecting value in it anymore. There are many reasons: decrease of my attention span, lack of content depth, little educational value, and so on. But the main cause is the state I find myself in after constant peeks of people's best lives.\n\nIt is a fairly recent thing. For the first time in my life, I started questioning whether I am worthy of love and respect. For the first time in my life, I heard such awful words from someone who thinks they're so high up in the social ladder that they refuse to interact with me or my family — just because we don't have our roots set in the city, or white-collar-and-above status going back to our grandparents' time. For the first time in my life, I experienced comparisons with other people whom they deemed of \"higher status\" and \"educated,\" while they themselves didn't even bother to get to know me — or the \"better\" people either.\n\nHow can one be so shallow? Is status, background, and achievement all they can see, while ignoring what makes a person human — their character, their dignity, how they listen with empathy, how they help and respect people of little use to them, how they treat others with kindness? Oh, such hypocrisy! Wouldn't the first thing an \"educated\" person needs to learn be to respect others? To learn that words can cut deeper than knives and leave scars that never heal? And for someone so religious, shouldn't they learn to be kind and compassionate to those less fortunate than them? Out of a sample of 100 people in Vietnam in the last century, how many were privileged enough to get a college education, when millions were struggling and dying? Maybe less than one? Reminds me of an erroneous math result of 0.2 people, I wonder which part of the body that 0.2 would be.\n\nMy mom is not especially religious. She prays and goes to pagodas, but not that much of a devotee, one would say. Yet she always does the best she can to show kindness, expecting nothing in return. When she visited me in Boston, she always carried a handful of small bills to give to people on the streets who looked like they needed more. A few dollars to this homeless man here, to a man busking with a violin there, you name it. There was one time she told me to drop a bill into a young man's guitar case after his performance, since it seemed no one had given him anything since we arrived. When we came up — turned out the man had even more cash than we were carrying!\n\nShe didn't grow up privileged, either. She was the youngest daughter in a family of four children. You bet she never got extra classes or someone at home to teach her math. Yet she got into a gifted high school. After graduation she went to the second-best university for economics (objectively — just to avoid overselling), which she got into by direct admission, since even taking the entrance exam would have been too costly: travel, lodging, food, all of it. Call me woke, but now I see the argument for DEI — where people of limited resources can still rise to the same level as those more fortunate. For all their \"elite\" background, the privileged are not more successful than those without such fortune.\n\nI felt worthless. I started comparing myself to those \"better\" people, too. Is my family not good enough? Am I not smart enough? Not fit enough? Not pretty enough? Whenever I saw someone's post on social media, I started wondering whether they would be welcomed more than I would. It haunts me every moment I'm alone with my thoughts. But I didn't want to constantly ask for validation just to feel better about myself. Besides, it would be a silver lining at best — and at worst, a failed test case would only deepen my insecurity. Oh, the less I know, the better!\n\nI guess you could say my conditions have somewhat improved. I recently found myself held in such open arms and warmth, after detaching from the source of the trauma and surrounding myself with people who actually welcome me. But that deserves another story for later! You could also call me a coward for not facing the problem head-on — but isn't forgetting part of the brain's natural response to trauma? And I'm not even forgetting. Just giving myself a little room to breathe and enjoy the few sunny days left in Seattle.\n\nAnd don't worry — I'll see a therapist when I absolutely need to :')\nFor now, just keep swimmin', just keep swimmin'.",
    cover: duckSwimming,
    coverWidth: 600,
    status: "published",
    createdAt: "2026-08-15T19:45:00Z",
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
