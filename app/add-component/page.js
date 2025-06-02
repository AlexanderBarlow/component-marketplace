"use client";

import Image from "next/image";
import { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function AddComponentPage() {
  const [code, setCode] = useState(`
export default function MyComponent() {
  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#ff00cc] to-[#3333ff] text-white text-center shadow-[0_0_30px_#00fff7] backdrop-blur-xl">
      <h1 className="text-3xl font-extrabold text-neon-glow text-black">🚀 Neon Component</h1>
      <p className="mt-3 text-black">Build and glow with style in the marketplace.</p>
    </div>
  );
}`);

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground font-sans overflow-hidden px-6 py-24 sm:py-32">
      {/* Background */}
      <Image
        src="/back.png"
        alt="Background"
        fill
        quality={100}
        priority
        className="absolute inset-0 z-0 object-cover object-center scale-105 brightness-[0.9] saturate-[1.2]"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/40 via-[#0B0C1Eaa] to-black/60 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 tracking-tight text-glow">
            Add a New Component
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Use the editor below to code your component and preview it live.
          </p>
        </div>

        {/* Sandpack Editor */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.25)] bg-white/5 backdrop-blur-2xl h-fit">
          <Sandpack
            template="react"
            theme="dark"
            options={{
              showConsole: false,
              showTabs: true,
              showLineNumbers: true,
              wrapContent: true,
              editorHeight: 500,
            }}
            files={{
              "/App.js": code,
              "/index.js": `import React from "react";
                import { createRoot } from "react-dom/client";
                import App from "./App";
                import "./index.css";

                const root = createRoot(document.getElementById("root"));
                root.render(<App />);`,
              "/index.css": `body { font-family: sans-serif; background: transparent; padding: 1rem; color: white; }
                .text-neon-glow { color: #00fff7; text-shadow: 0 0 6px #00fff7, 0 0 12px #00fff7; } .text-black { color: #000;}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
