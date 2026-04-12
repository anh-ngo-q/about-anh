import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGroupedPosts } from "../data/thoughts";

const PAPER = {
  bg: "#faf6ef",
  text: "#3d2b1f",
  muted: "#7a5c3e",
  faint: "#a08060",
  badgeBg: "#e8d5be",
  divider: "#d4b896",
};

export default function Thoughts() {
  const navigate = useNavigate();
  const grouped = getGroupedPosts();
  const topics = Object.keys(grouped);

  // Override body background to match the paper theme; restore on unmount.
  useEffect(() => {
    const original = document.body.style.backgroundColor;
    document.body.style.backgroundColor = PAPER.bg;
    return () => {
      document.body.style.backgroundColor = original;
    };
  }, []);

  return (
    <div style={{ backgroundColor: PAPER.bg, minHeight: "100vh", fontFamily: "var(--font-lora)" }}>
      {/* Header */}
      <header
        style={{ borderBottom: `1px solid ${PAPER.divider}`, backgroundColor: PAPER.bg }}
        className="sticky top-0 z-10 px-6 py-4 flex items-center gap-4"
      >
        <button
          onClick={() => navigate("/")}
          style={{ color: PAPER.muted, fontFamily: "var(--font-nunito)" }}
          className="text-sm hover:opacity-60 transition-opacity flex items-center gap-1"
          aria-label="Back to portfolio"
        >
          ← back
        </button>
        <h1 style={{ color: PAPER.text }} className="text-xl font-semibold tracking-wide">
          thoughts
        </h1>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {topics.length === 0 ? (
          <p
            style={{ color: PAPER.muted, fontFamily: "var(--font-lora)" }}
            className="italic text-center mt-24 text-base"
          >
            nothing here yet...
          </p>
        ) : (
          topics.map((topic) => (
            <section key={topic} className="mb-14">
              {/* Topic heading */}
              <h2
                style={{
                  color: PAPER.muted,
                  borderBottom: `1px solid ${PAPER.divider}`,
                  fontFamily: "var(--font-nunito)",
                }}
                className="text-xs uppercase tracking-widest font-bold pb-2 mb-8"
              >
                {topic}
              </h2>

              <div className="space-y-10">
                {grouped[topic].map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}

function PostCard({ post }) {
  const date = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      {/* Topic badge */}
      <span
        style={{
          backgroundColor: PAPER.badgeBg,
          color: PAPER.muted,
          fontFamily: "var(--font-nunito)",
          fontSize: "0.65rem",
        }}
        className="inline-block px-2 py-0.5 rounded-full uppercase tracking-wider font-bold mb-3"
      >
        {post.topic}
      </span>

      {/* Title */}
      <h3
        style={{ color: PAPER.text }}
        className="text-xl font-semibold leading-snug mb-1"
      >
        {post.title}
      </h3>

      {/* Date */}
      <p
        style={{ color: PAPER.faint, fontFamily: "var(--font-nunito)" }}
        className="text-xs mb-4"
      >
        {date}
      </p>

      {/* Content */}
      <p
        style={{ color: "#5c3d2e", lineHeight: "1.85" }}
        className="text-sm whitespace-pre-line"
      >
        {post.content}
      </p>
    </article>
  );
}
