"use client";

import Image from "next/image";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Component Marketplace?",
      answer:
        "A platform where developers can buy and sell reusable UI components for various frameworks.",
    },
    {
      question: "How do I sell my components?",
      answer:
        "Sign up for an account, upload your component, set a price, and publish it to the marketplace.",
    },
    {
      question: "What tech stacks are supported?",
      answer:
        "We support React, React Native, Flutter, MUI, Tailwind CSS, and plain HTML+CSS+JS.",
    },
    {
      question: "Is there a fee to list components?",
      answer:
        "No listing fee. We take a small commission on each sale to support the platform.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground font-sans overflow-hidden px-6 py-20">
      <Image
        src="/back.png"
        alt="Background"
        fill
        quality={100}
        priority
        className="absolute inset-0 z-0 object-cover object-center scale-105 brightness-[0.9] saturate-[1.2]"
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/40 via-[#0B0C1Eaa] to-black/60 backdrop-blur-md" />

      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 tracking-tight text-glow">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Everything you need to know about using the marketplace.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-glow text-white"
            >
              <h3 className="text-xl font-semibold text-pink-400 text-glow mb-2">
                {faq.question}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
