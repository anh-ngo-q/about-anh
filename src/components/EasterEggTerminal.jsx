import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFolder } from "react-icons/fa";
import { lsFolders } from "../data/thoughts";

export default function EasterEggTerminal({ show, onClose, navigate }) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([{ text: "duck-debug v1.0.0", type: "system" }]);
  const [isTyping, setIsTyping] = useState(false);
  const [showDog, setShowDog] = useState(false);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
    if (!show) {
      setShowDog(false);
    }
  }, [show]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines, showDog]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const typeResponse = (response, type = "response") => {
    setIsTyping(true);
    let i = 0;
    setLines((prev) => [...prev, { text: "", type }]);
    const interval = setInterval(() => {
      i++;
      setLines((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { text: response.slice(0, i), type };
        return updated;
      });
      if (i >= response.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
    return response.length * 50;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setLines((prev) => [...prev, { text: `> ${input}`, type: "input" }]);
    setInput("");

    if (cmd === "quack") {
      typeResponse("have you tried turning it off and on again?");
    } else if (cmd === "woof") {
      setShowDog(false);
      setLines((prev) => [...prev, { text: "wait... that's not a duck", type: "response" }]);
      setTimeout(() => setShowDog(true), 600);
    } else if (cmd === "ls") {
      setLines((prev) => [
        ...prev,
        {
          type: "ls-output",
          folders: lsFolders.map((f) => ({ ...f, name: f.name + "/" })),
        },
      ]);
    } else if (cmd.startsWith("cd ")) {
      const target = cmd.slice(3).trim().replace(/\/$/, "");
      const folder = lsFolders.find((f) => f.name === target);
      if (folder) {
        const duration = typeResponse(`entering ${folder.name}/...`);
        setTimeout(() => {
          onClose();
          navigate(folder.path);
        }, duration + 200);
      } else {
        setLines((prev) => [
          ...prev,
          { text: `cd: ${target}: no such directory`, type: "system" },
        ]);
      }
    } else if (cmd === "help") {
      setLines((prev) => [
        ...prev,
        { text: "available commands: quack, ls, cd <folder>, help, exit", type: "system" },
      ]);
    } else if (cmd === "exit") {
      onClose();
    } else {
      setLines((prev) => [
        ...prev,
        { text: `command not found: ${cmd}. try 'help'`, type: "system" },
      ]);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#0d0d1a] border border-accent-yellow/30 rounded-2xl w-full max-w-lg p-5 font-mono text-sm shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-accent-yellow" />
              <div className="w-3 h-3 rounded-full bg-accent-mint" />
              <span className="ml-2 text-text-muted text-xs">duck-terminal</span>
              <button
                onClick={onClose}
                className="ml-auto text-text-muted hover:text-text-primary transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Output */}
            <div ref={outputRef} className="space-y-1 mb-3 max-h-64 overflow-y-auto">
              {lines.map((line, i) => {
                if (line.type === "ls-output") {
                  return (
                    <div key={i} className="space-y-1 py-1">
                      {line.folders.map((f) => (
                        <div key={f.name} className="flex items-center gap-2 text-accent-mint">
                          <FaFolder className="text-accent-yellow shrink-0" style={{ fontSize: "1.1rem" }} />
                          <span>{f.name}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className={
                      line.type === "input"
                        ? "text-accent-yellow"
                        : line.type === "response"
                          ? "text-accent-mint"
                          : "text-text-muted"
                    }
                  >
                    {line.text}
                  </div>
                );
              })}

              {/* Dog GIF easter egg */}
              <AnimatePresence>
                {showDog && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mt-2 flex justify-center items-center"
                  >
                    <img
                      src="/about-anh/egg_hatch_dog.gif"
                      alt="egg hatching dog"
                      className="rounded-xl max-w-[200px] mx-auto"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-accent-yellow">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                className="flex-1 bg-transparent text-text-primary outline-none caret-accent-yellow"
                placeholder="type 'help'..."
                autoComplete="off"
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
