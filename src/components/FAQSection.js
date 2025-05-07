import React, { useState } from "react";
import "./FAQ.css"; // Import CSS

const faqs = [
  {
    question: "What’s included in social media management?",
    answer:
      "Our plans include strategy, content creation, post scheduling, captions, hashtags, engagement, monthly reports, and optional add-ons like WhatsApp marketing, YouTube Shorts, or lead generation funnels.",
  },
  {
    question: "How do you design websites? Do you use templates?",
    answer:
      "We build custom websites tailored to your brand using modern tools like React. Whether it's a portfolio, business site, or eCommerce, we make it responsive, fast, and user-friendly—no cookie-cutter templates unless requested.",
  },
  {
    question: "What’s covered under video editing services?",
    answer:
      "We provide clean, scroll-stopping edits for reels, YouTube shorts, promotional videos, and client testimonials. We also offer advanced reel editing as an add-on with cinematic transitions, captions, and sound effects.",
  },
  {
    question: "Do I need to commit to a long-term contract?",
    answer:
      "Nope! Our plans are flexible. You can upgrade, downgrade, or cancel anytime based on your business needs.",
  },
  {
    question: "How quickly will content or revisions be delivered?",
    answer:
      "Most tasks are completed within 2–3 working days depending on complexity. Priority support is available in higher plans.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes! You can change your plan anytime if your content needs grow.",
  },
  {
    question: "How do we get started?",
    answer:
      "Just fill out the form or contact us on WhatsApp. Once we confirm your service plan, we’ll schedule a quick onboarding call and start working right away.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in beauty & wellness businesses (makeup artists, salons), creators, coaches, and small businesses—but we’re open to working with any niche that needs content or digital support.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-container">
      <h2 className="faq-titlefaq-title">FAQs</h2>
      <p className="faq-subtitle">
        Clear, simple answers to help you understand how our plans work and how they can benefit your business.
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
