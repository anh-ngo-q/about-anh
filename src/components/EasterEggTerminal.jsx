import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEggTerminal({ show, onClose }) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([{ text: "duck-debug v1.0.0", type: "system" }]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setLines((prev) => [...prev, { text: `> ${input}`, type: "input" }]);
    setInput("");

    if (cmd === "quack") {
      setIsTyping(true);
      const response = "have you tried turning it off and on again?";
      let i = 0;
      setLines((prev) => [...prev, { text: "", type: "response" }]);

      const interval = setInterval(() => {
        i++;
        setLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            text: response.slice(0, i),
            type: "response",
          };
          return updated;
        });
        if (i >= response.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 50);
    } else if (cmd === "help") {
      setLines((prev) => [
        ...prev,
        { text: "available commands: quack, help, exit", type: "system" },
      ]);
    } else if (cmd === "exit") {
      onClose();
    } else {
      setLines((prev) => [
        ...prev,
        { text: `command not found: ${cmd}. try 'quack'`, type: "system" },
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
            <div className="space-y-1 mb-3 max-h-48 overflow-y-auto">
              {lines.map((line, i) => (
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
              ))}
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
                placeholder="type 'quack'..."
                autoComplete="off"
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
