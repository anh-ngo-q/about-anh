import { useEffect, useMemo, useRef, useState } from "react";
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
  const grouped = useMemo(() => getGroupedPosts(), []);
  const topics = Object.keys(grouped);

  const [activeTopic, setActiveTopic] = useState(topics[0] ?? null);
  const [activePostId, setActivePostId] = useState(topics[0] ? grouped[topics[0]][0]?.id : null);

  const activePosts = activeTopic ? grouped[activeTopic] : [];
  const activePost = activePosts.find((p) => p.id === activePostId) ?? activePosts[0] ?? null;

  function selectTopic(topic) {
    setActiveTopic(topic);
    setActivePostId(grouped[topic][0]?.id ?? null);
  }

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
      <main className="max-w-4xl mx-auto px-6 py-12">
        {topics.length === 0 ? (
          <p
            style={{ color: PAPER.muted, fontFamily: "var(--font-lora)" }}
            className="italic text-center mt-24 text-base"
          >
            nothing here yet...
          </p>
        ) : (
          <>
            {/* Topic tabs */}
            <div
              style={{ borderBottom: `1px solid ${PAPER.divider}`, fontFamily: "var(--font-nunito)" }}
              className="flex gap-2 overflow-x-auto mb-10"
            >
              {topics.map((topic) => {
                const isActive = topic === activeTopic;
                return (
                  <button
                    key={topic}
                    onClick={() => selectTopic(topic)}
                    style={{
                      color: isActive ? PAPER.text : PAPER.faint,
                      borderBottom: isActive ? `2px solid ${PAPER.text}` : "2px solid transparent",
                    }}
                    className="text-xs uppercase tracking-widest font-bold pb-3 px-1 whitespace-nowrap transition-colors hover:opacity-80"
                  >
                    {topic}
                  </button>
                );
              })}
            </div>

            {/* List + detail */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* Post list (left) */}
              <nav className="md:w-56 shrink-0 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {activePosts.map((post) => (
                  <PostListItem
                    key={post.id}
                    post={post}
                    isActive={post.id === activePost?.id}
                    onClick={() => setActivePostId(post.id)}
                  />
                ))}
              </nav>

              {/* Post detail (right) */}
              <div className="flex-1 min-w-0">
                {activePost ? (
                  <PostCard post={activePost} />
                ) : (
                  <p style={{ color: PAPER.muted }} className="italic text-sm">
                    select a post
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function PostListItem({ post, isActive, onClick }) {
  const date = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isActive ? PAPER.badgeBg : "transparent",
        borderLeft: isActive ? `3px solid ${PAPER.text}` : "3px solid transparent",
      }}
      className="text-left shrink-0 md:shrink px-3 py-2 rounded-md transition-colors hover:opacity-80 w-56 md:w-full"
    >
      <p
        style={{ color: isActive ? PAPER.text : "#5c3d2e" }}
        className="text-sm font-semibold leading-snug break-words"
      >
        {post.title}
      </p>
      <p style={{ color: PAPER.faint, fontFamily: "var(--font-nunito)" }} className="text-xs mt-0.5">
        {date}
      </p>
    </button>
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
        className="text-sm whitespace-pre-line mb-4"
      >
        {post.content}
      </p>

      {/* Spotify player */}
      {post.music && <SpotifyPlayer music={post.music} />}

      {/* Cover image — coverWidth (px) overrides the default for wider photos */}
      {post.cover && (
        <img
          src={post.cover}
          alt={`${post.title} cover`}
          style={{
            border: `1px solid ${PAPER.divider}`,
            maxWidth: `${post.coverWidth ?? 200}px`,
          }}
          className="mt-4 w-full rounded-md shadow-sm"
        />
      )}
    </article>
  );
}

// Loads Spotify's iFrame API once and resolves with the shared IFrameAPI object.
let iframeApiPromise = null;
function loadSpotifyIframeApi() {
  if (iframeApiPromise) return iframeApiPromise;
  iframeApiPromise = new Promise((resolve) => {
    window.onSpotifyIframeApiReady = resolve;
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);
  });
  return iframeApiPromise;
}

function SpotifyPlayer({ music }) {
  // music can be a string URL or { url, start } where start is seconds
  const url = typeof music === "string" ? music : music.url;
  const start = typeof music === "object" && music.start ? music.start : 0;
  const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
  const trackId = match ? match[1] : null;

  const hostRef = useRef(null);

  // The embed iframe ignores start-time URL params, so the iFrame API's
  // startAt option is the only way to open the player at a given timestamp.
  useEffect(() => {
    if (!trackId) return;
    let controller;
    let cancelled = false;

    // createController replaces the element it is given with the iframe, so
    // hand it a throwaway child — handing it the React-rendered node instead
    // detaches it, and no player renders after switching posts.
    const target = document.createElement("div");
    const host = hostRef.current;
    host.appendChild(target);

    loadSpotifyIframeApi().then((IFrameAPI) => {
      if (cancelled) return;
      IFrameAPI.createController(
        target,
        { uri: `spotify:track:${trackId}`, width: "100%", height: 80, startAt: start },
        (c) => {
          controller = c;
          if (cancelled) c.destroy();
        }
      );
    });

    return () => {
      cancelled = true;
      if (controller) controller.destroy();
      host.replaceChildren();
    };
  }, [trackId, start]);

  if (!trackId) return null;

  return <div style={{ marginTop: "4px" }} ref={hostRef} />;
}
