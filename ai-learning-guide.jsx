import { useState } from "react";

const data = {
  weeks: [
    {
      week: "Week 1",
      title: "AI Foundations",
      color: "#00f5d4",
      icon: "🧠",
      topics: [
        {
          id: "what-is-ai",
          title: "What is AI?",
          icon: "🤖",
          concept: "AI (Artificial Intelligence) is teaching computers to think and make decisions — like a human, but faster.",
          analogy: "Think of AI like training a dog. You show it thousands of examples ('sit!', 'fetch!'), and eventually it learns to do those things on its own. AI is trained on millions of examples of text, images, and data until it can predict what comes next.",
          example: "Go to ChatGPT (chat.openai.com) and type: 'Explain black holes like I am 10 years old.' Watch how it gives a simple, smart answer — that's AI in action.",
          exercise: "Create a FREE ChatGPT account. Have a 10-minute conversation with it about your dream software company. Ask it: 'What kind of software company should a 15-year-old tech entrepreneur build in 2026?'",
          mistakes: ["Thinking AI is magic — it's math and patterns", "Expecting it to always be right (it hallucinates/makes things up)", "Using it for final answers without checking facts"],
          nextStep: "Learn the different Levels of AI so you understand where we are today vs. the future.",
          youtube: [
            { channel: "Mark Rober", video: "Start with: 'How AI Actually Works' — visual, fun, no tech jargon", link: "https://youtube.com" },
            { channel: "Fireship", video: "AI in 100 Seconds — ultra fast overview", link: "https://youtube.com" },
            { channel: "Two Minute Papers", video: "Watch any recent AI paper summary — great for staying updated", link: "https://youtube.com" }
          ],
          tools: [
            { name: "ChatGPT (Free)", url: "https://chat.openai.com", desc: "Your AI assistant — start here" },
            { name: "Google Gemini (Free)", url: "https://gemini.google.com", desc: "Google's AI — compare with ChatGPT" },
            { name: "Claude AI (Free)", url: "https://claude.ai", desc: "Anthropic's AI — great for long thinking tasks" }
          ]
        },
        {
          id: "levels-of-ai",
          title: "Levels of AI",
          icon: "📊",
          concept: "AI exists at different power levels, from simple task-doers to potentially human-level intelligence.",
          analogy: "Imagine video game difficulty settings. Level 1 is a calculator (narrow AI). Level 5 is a system smarter than all humans combined (superintelligence). We are currently between Level 2–3.",
          example: `Level 1 – Narrow AI: Spotify recommending songs, spam filters in Gmail.
Level 2 – General AI (AGI): An AI that can do ANY task a human can. Almost here.
Level 3 – Superintelligence (ASI): Smarter than ALL humans. The future goal.
Current AI tools like ChatGPT-4 and Claude are extremely advanced Narrow AI heading toward AGI.`,
          exercise: "Make a Google Doc called 'AI Levels Tracker.' Every week, write down 3 new AI tools you discover and which level they belong to. By month's end, you'll have a powerful reference sheet.",
          mistakes: ["Confusing ChatGPT with AGI — it's not there yet", "Thinking we're far from AGI — most experts say 2–5 years", "Ignoring how fast levels are changing"],
          nextStep: "Learn about Prompt Engineering — the skill that makes AI 10x more powerful.",
          youtube: [
            { channel: "ColdFusion", video: "Search: 'The Race to AGI' — best explainer on AI levels", link: "https://youtube.com" },
            { channel: "Lex Fridman", video: "His interviews with AI researchers explain AGI deeply", link: "https://youtube.com" },
            { channel: "AI Explained", video: "Search: 'GPT-4 vs AGI' — clear breakdown", link: "https://youtube.com" }
          ],
          tools: [
            { name: "Our World in Data – AI", url: "https://ourworldindata.org/artificial-intelligence", desc: "Free charts on AI progress" },
            { name: "Hugging Face", url: "https://huggingface.co", desc: "See all AI models in one place for free" }
          ]
        }
      ]
    },
    {
      week: "Week 2",
      title: "Prompt Engineering & API Keys",
      color: "#f72585",
      icon: "⚡",
      topics: [
        {
          id: "prompt-engineering",
          title: "Prompt Engineering",
          icon: "✍️",
          concept: "Prompt Engineering is the art of asking AI the RIGHT way to get the BEST results. It's the most in-demand skill of 2026.",
          analogy: "Imagine AI is a genius chef. A bad order: 'Make food.' A great order: 'Make a spicy Indian chicken curry, medium heat, with basmati rice, for a 15-year-old who loves bold flavors.' The better your instructions (prompt), the better the output.",
          example: `BAD PROMPT: "Write a business plan"
GREAT PROMPT: "Act as a startup advisor for teen entrepreneurs. Write a one-page business plan for an AI-powered homework helper app targeting high school students in India. Include: problem, solution, target market, revenue model, and 3 competitors."

Try both in ChatGPT and see the massive difference!`,
          exercise: "Build your personal 'Prompt Library' in a free Google Doc. Write 10 prompts for: school essays, business ideas, app concepts, social media posts, and learning new topics. Test each one and improve them.",
          mistakes: ["Being too vague ('help me with business')", "Not giving context about who you are", "Not telling AI what format you want the output in", "Accepting the first response — always ask it to improve"],
          nextStep: "Learn what API Keys are so you can connect AI to your own future apps.",
          youtube: [
            { channel: "Dave Ebbelaar", video: "Search: 'Prompt Engineering Full Course' — free and beginner friendly", link: "https://youtube.com" },
            { channel: "Tiff In Tech", video: "Great for teen/young entrepreneur audience + AI prompting", link: "https://youtube.com" },
            { channel: "Jeff Su", video: "Search: 'ChatGPT Prompt Engineering Tips' — practical", link: "https://youtube.com" }
          ],
          tools: [
            { name: "PromptHero (Free)", url: "https://prompthero.com", desc: "Browse thousands of proven prompts" },
            { name: "FlowGPT (Free)", url: "https://flowgpt.com", desc: "Community prompt library" },
            { name: "Google Docs (Free)", url: "https://docs.google.com", desc: "Build your personal prompt library" }
          ]
        },
        {
          id: "api-keys",
          title: "API Keys",
          icon: "🔑",
          concept: "An API Key is like a secret password that lets YOUR app talk to AI's brain. It's how you connect AI power to your own software.",
          analogy: "Imagine electricity. Your house needs to be connected to the power grid to use electricity. An API Key is like the wire that connects your software to the AI 'power grid.' Without it, your app has no AI. With it, your app becomes super-powered.",
          example: `HOW IT WORKS (No coding needed to understand):
1. You sign up at OpenAI.com → Get a FREE API key (looks like: sk-abc123xyz...)
2. You paste this key into a no-code tool like Make.com or Zapier
3. Now your tool can use ChatGPT-level intelligence automatically!

Real example: A student used an API key + Make.com to build a bot that reads emails and auto-replies. Zero coding. Total build time: 2 hours.`,
          exercise: "Sign up for a FREE OpenAI account and get your first API key. Then open Make.com (free) and connect them together. Build a simple automation: when you type a question into a Google Form, AI answers it and saves to Google Sheets.",
          mistakes: ["Sharing your API key publicly (it will get stolen!)", "Thinking you need to code to use APIs — no-code tools do it for you", "Not knowing each API call costs money (start with free tiers)"],
          nextStep: "Learn about AI Agents — the next evolution where AI does tasks FOR you automatically.",
          youtube: [
            { channel: "Liam Ottley", video: "Search: 'How to Use OpenAI API Without Coding' — perfect for beginners", link: "https://youtube.com" },
            { channel: "Make (Official)", video: "Their YouTube has free automation tutorials using AI", link: "https://youtube.com" }
          ],
          tools: [
            { name: "OpenAI Platform (Free tier)", url: "https://platform.openai.com", desc: "Get your first API key here" },
            { name: "Make.com (Free)", url: "https://make.com", desc: "Connect APIs without code" },
            { name: "Zapier (Free tier)", url: "https://zapier.com", desc: "Another no-code automation tool" }
          ]
        }
      ]
    },
    {
      week: "Week 3",
      title: "AI Agents & Multi-Agent Systems",
      color: "#7209b7",
      icon: "🤖",
      topics: [
        {
          id: "ai-agents",
          title: "AI Agents",
          icon: "🕵️",
          concept: "An AI Agent is an AI that doesn't just answer questions — it takes ACTION. It browses the web, writes emails, runs code, and completes multi-step tasks on its own.",
          analogy: "Normal AI is like a very smart book — you ask it questions and it gives answers. An AI Agent is like a very smart employee — you give it a goal and it figures out the steps, does the research, makes decisions, and gets it DONE. Like having a full-time intern who never sleeps.",
          example: `NORMAL AI: You ask 'What are the best software startup ideas for 2026?' → It gives a list.

AI AGENT: You say 'Research the top 10 software startup opportunities for teen entrepreneurs in 2026, find 3 competitors for each, check their pricing, and make me a comparison table in Google Sheets.' → The agent searches the web, collects data, builds the table — all on its own.

Try this FREE agent RIGHT NOW: Go to agent.ai or perplexity.ai and give it a multi-step research task about your future company idea.`,
          exercise: "Use Perplexity AI (free) as your first AI agent. Give it this task: 'Research what software products are making the most money in India in 2026, who built them, how old the founders were, and what problem they solved.' Study the results and write a 1-page summary in your own words.",
          mistakes: ["Thinking agents are fully reliable — they make mistakes", "Not giving them enough context/instructions", "Not checking their work — always verify important outputs", "Thinking you need to build agents before understanding them"],
          nextStep: "Learn how Multi-Agent systems work — multiple AI agents collaborating like a company.",
          youtube: [
            { channel: "David Ondrej", video: "Search: 'AI Agents Explained Simply' — perfect beginner video", link: "https://youtube.com" },
            { channel: "Matthew Berman", video: "Best channel for AI agent tutorials — search his agent videos", link: "https://youtube.com" },
            { channel: "Liam Ottley", video: "Search: 'Build AI Agent No Code' — practical and entrepreneur-focused", link: "https://youtube.com" }
          ],
          tools: [
            { name: "Perplexity AI (Free)", url: "https://perplexity.ai", desc: "Best free AI agent for research" },
            { name: "Agent.ai (Free tier)", url: "https://agent.ai", desc: "Simple agent builder" },
            { name: "Claude.ai (Free)", url: "https://claude.ai", desc: "Excellent for long multi-step thinking tasks" }
          ]
        },
        {
          id: "multi-agent",
          title: "Multi-Agent Systems",
          icon: "🌐",
          concept: "A Multi-Agent System is when MULTIPLE AI agents work together as a team — each doing a specialized job — to complete a complex goal.",
          analogy: "Think of it like running a software company, but all employees are AI. Agent 1 is the researcher (finds information). Agent 2 is the writer (creates content). Agent 3 is the quality checker (reviews everything). Agent 4 is the publisher (sends it out). The CEO (you) just sets the goal — the agents do everything else.",
          example: `Real-world Multi-Agent Example (Gartner says 40% of enterprise apps will use this by 2026):

A startup builds a customer support system:
→ Agent 1 (Reader): Reads incoming customer emails
→ Agent 2 (Researcher): Searches the knowledge base for answers  
→ Agent 3 (Writer): Drafts a personalized reply
→ Agent 4 (Checker): Reviews for accuracy and tone
→ Agent 5 (Sender): Sends the approved reply

This entire system costs $50/month and replaces a $30,000/year human team.`,
          exercise: "Design your first Multi-Agent System on paper (or Google Slides). Pick a business problem (example: social media management, customer support, content creation). Draw a flow chart showing: what each agent does, what information they pass to each other, and what the final output is. This is EXACTLY the kind of thinking future tech entrepreneurs need.",
          mistakes: ["Building before understanding — map it on paper first", "Making agents do too many things — keep each agent focused on ONE job", "No human review step — always have a human check important outputs", "Ignoring costs — each AI call costs money at scale"],
          nextStep: "Learn Vibe Coding — how to build actual apps using plain English, zero traditional coding.",
          youtube: [
            { channel: "Cole Medin", video: "Search: 'Multi Agent Systems Explained' — very visual and clear", link: "https://youtube.com" },
            { channel: "Sam Witteveen", video: "Search: 'Building Multi Agent AI' — covers real-world builds", link: "https://youtube.com" }
          ],
          tools: [
            { name: "n8n (Free open source)", url: "https://n8n.io", desc: "Build multi-agent workflows visually" },
            { name: "Make.com (Free)", url: "https://make.com", desc: "Visual multi-step AI automation" },
            { name: "LangFlow (Free)", url: "https://langflow.org", desc: "Drag-and-drop agent builder" }
          ]
        }
      ]
    },
    {
      week: "Week 4",
      title: "Future of AI & Entrepreneur Path",
      color: "#fb8500",
      icon: "🚀",
      topics: [
        {
          id: "future-ai",
          title: "Future of AI (2026–2030)",
          icon: "🔮",
          concept: "AI is not slowing down — it's accelerating. Understanding where it's going is your biggest competitive advantage as a young entrepreneur.",
          analogy: "Imagine you're in 1994 and someone told you that in 10 years, every business would need a website. The people who learned websites early became millionaires. AI is THAT moment — but 100x bigger and happening 10x faster.",
          example: `🔥 TOP FUTURE AI TRENDS TO WATCH:

1. AGENTIC AI — AI that acts autonomously (already happening)
   Gartner: 40% of enterprise apps will use AI agents by 2026

2. VIBE CODING — Build apps by describing them in plain English
   You say 'Build me a homework helper app' → AI builds it

3. AI + ROBOTICS — Physical AI (humanoid robots using AI brains)
   Companies: Tesla Optimus, Figure AI, Boston Dynamics

4. MULTIMODAL AI — AI that sees, hears, reads, and speaks simultaneously
   Example: Show a photo, speak a question, get a video answer

5. PERSONALIZED AI — Everyone gets their own AI assistant
   Like having a doctor, lawyer, tutor, and business advisor in your pocket

6. AI ETHICS & GOVERNANCE — Who controls AI becomes critical
   This creates massive career and business opportunities`,
          exercise: "Create a 'Future Opportunities' Google Doc. For each of the 6 trends above, write: (1) What problem does it solve? (2) What kind of company could a 15-year-old build around it in 5 years? (3) Who would pay for it? This is your first market research document — entrepreneurs do this every day.",
          mistakes: ["Waiting until AI is 'more mature' — it's mature NOW", "Only following one AI company (diversify your knowledge)", "Ignoring AI ethics — it WILL matter for your future company", "Not building a portfolio NOW — you have a 5-year head start on adults"],
          nextStep: "Take action this week: pick ONE business idea and use AI tools to build the first version of it — no code needed.",
          youtube: [
            { channel: "Andrej Karpathy", video: "Search his channel — Tesla's ex-AI lead, brilliant explanations", link: "https://youtube.com" },
            { channel: "AI Jason", video: "Search: 'Future of AI for Entrepreneurs' — practical and motivating", link: "https://youtube.com" },
            { channel: "Greg Isenberg", video: "Best entrepreneur + AI channel — startup ideas using AI", link: "https://youtube.com" }
          ],
          tools: [
            { name: "Bolt.new (Free)", url: "https://bolt.new", desc: "Vibe code — build apps in plain English, NO coding" },
            { name: "Lovable.dev (Free)", url: "https://lovable.dev", desc: "Describe your app → AI builds it instantly" },
            { name: "v0.dev (Free)", url: "https://v0.dev", desc: "Build web interfaces by describing them" }
          ]
        },
        {
          id: "entrepreneur-path",
          title: "Your Entrepreneur Roadmap",
          icon: "🗺️",
          concept: "You don't need to wait until you're 25 to build a company. With AI tools, a 15-year-old today has access to the same power as a funded startup team of 10.",
          analogy: "Elon Musk made his first software company at 12. Mark Zuckerberg built Facebook at 19. But NEITHER of them had AI tools. You do. A teenager with strong AI skills + a clear problem to solve + the internet = a real business. The only thing stopping you is starting.",
          example: `YOUR 90-DAY ACTION PLAN:

Month 1 (Now): Learn → Master this guide. Use AI every single day.
Month 2: Build → Use Bolt.new or Lovable.dev to build your first app
Month 3: Launch → Put it on Product Hunt, share on LinkedIn, get first users

REAL BUSINESS IDEAS YOU CAN BUILD WITH AI RIGHT NOW:
✅ AI Tutor for your school subject (sell to classmates)
✅ Resume/college app helper for older students
✅ Local business AI chatbot (charge ₹5,000/month)
✅ Social media content creator for small businesses
✅ AI-powered study notes generator`,
          exercise: "This is your FINAL project: Use ChatGPT to write a 1-page business plan for your first AI company. Include: Problem you're solving, who you're solving it for, what your AI-powered solution is, how you'll make money. Post it on LinkedIn with the hashtag #AIEntrepreneur. This is your public declaration — the internet will hold you accountable.",
          mistakes: ["Waiting to be 'ready' — you're ready now", "Building without talking to potential customers first", "Trying to build something huge — start tiny and solve ONE problem", "Not building in public — sharing your journey builds your brand and attracts opportunities"],
          nextStep: "Join AI communities: r/artificial on Reddit, AI entrepreneurs Discord servers, and follow AI builders on Twitter/X. Surround yourself with people building the future.",
          youtube: [
            { channel: "Greg Isenberg", video: "Every video — the BEST entrepreneur + AI combo channel", link: "https://youtube.com" },
            { channel: "My First Million (Podcast)", video: "AI business ideas episodes — search 'AI startup ideas'", link: "https://youtube.com" },
            { channel: "Marc Lou", video: "Solo indie hacker who builds AI products — search his channel", link: "https://youtube.com" }
          ],
          tools: [
            { name: "Bolt.new", url: "https://bolt.new", desc: "Build your first app in English, no code" },
            { name: "Product Hunt (Free)", url: "https://producthunt.com", desc: "Launch your product to thousands of early adopters" },
            { name: "LinkedIn (Free)", url: "https://linkedin.com", desc: "Build your entrepreneur brand starting NOW at 15" }
          ]
        }
      ]
    }
  ]
};

export default function AIGuide() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeTab, setActiveTab] = useState("concept");

  const week = data.weeks[activeWeek];
  const topic = week.topics[activeTopic];
  const color = week.color;

  const tabs = [
    { id: "concept", label: "💡 Concept", icon: "💡" },
    { id: "example", label: "🔍 Example", icon: "🔍" },
    { id: "exercise", label: "🏋️ Exercise", icon: "🏋️" },
    { id: "mistakes", label: "⚠️ Mistakes", icon: "⚠️" },
    { id: "youtube", label: "▶️ YouTube", icon: "▶️" },
    { id: "tools", label: "🛠️ Tools", icon: "🛠️" },
    { id: "next", label: "➡️ Next Step", icon: "➡️" },
  ];

  return (
    <div style={{
      fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
      background: "#050510",
      minHeight: "100vh",
      color: "#e2e8f0",
      padding: "0",
      overflowX: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@700;900&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .glow-text { text-shadow: 0 0 20px currentColor; }
        
        .week-btn {
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          outline: none;
        }
        .week-btn:hover { transform: translateY(-2px); }
        
        .topic-btn {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .topic-btn:hover { transform: translateX(4px); }

        .tab-btn {
          transition: all 0.25s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .tab-btn:hover { opacity: 0.9; }

        .tool-card {
          transition: all 0.3s ease;
        }
        .tool-card:hover { transform: translateY(-3px); }

        .progress-bar {
          animation: progressAnim 1s ease forwards;
        }
        @keyframes progressAnim {
          from { width: 0; }
        }
        
        .scan-line {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,245,212,0.02) 2px,
            rgba(0,245,212,0.02) 4px
          );
          pointer-events: none;
        }

        .pulse-dot {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a1a; }
        ::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #4a4a8a; }
      `}</style>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(180deg, #0a0a20 0%, #050510 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "28px 24px 20px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 20% 50%, rgba(0,245,212,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(247,37,133,0.06) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />
        
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#00f5d4" }} />
          <span style={{ fontSize: 11, letterSpacing: "3px", color: "#00f5d4", textTransform: "uppercase", fontWeight: 600 }}>
            AI Learning OS — Beginner to Builder
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "clamp(20px, 4vw, 32px)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #00f5d4, #f72585, #7209b7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
          marginBottom: "8px"
        }}>
          YOUR COMPLETE AI ROADMAP
        </h1>

        <p style={{ color: "#94a3b8", fontSize: 13, maxWidth: 600 }}>
          🎯 Age 15 · Beginner Level · 1 Month to Tech Entrepreneur · No Coding Required
        </p>

        {/* Progress */}
        <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
          {data.weeks.map((w, i) => (
            <div key={i} style={{ flex: 1, minWidth: 80 }}>
              <div style={{ fontSize: 10, color: "#64748b", marginBottom: 4, letterSpacing: "1px" }}>
                {w.week.toUpperCase()}
              </div>
              <div style={{ height: 4, background: "#1a1a3a", borderRadius: 2, overflow: "hidden" }}>
                <div className="progress-bar" style={{
                  height: "100%",
                  width: i <= activeWeek ? "100%" : "0%",
                  background: w.color,
                  borderRadius: 2,
                  transition: "width 0.5s ease"
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 0, minHeight: "calc(100vh - 160px)" }}>
        
        {/* LEFT SIDEBAR — Weeks */}
        <div style={{
          width: 200,
          minWidth: 200,
          background: "#07071a",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 0",
          flexShrink: 0
        }}>
          {data.weeks.map((w, wi) => (
            <div key={wi}>
              <button
                className="week-btn"
                onClick={() => { setActiveWeek(wi); setActiveTopic(0); setActiveTab("concept"); }}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: activeWeek === wi ? `linear-gradient(90deg, ${w.color}15, transparent)` : "transparent",
                  borderLeft: activeWeek === wi ? `3px solid ${w.color}` : "3px solid transparent",
                  textAlign: "left",
                  color: activeWeek === wi ? w.color : "#475569",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 13,
                  fontWeight: activeWeek === wi ? 700 : 400,
                  letterSpacing: "0.5px"
                }}
              >
                <span style={{ fontSize: 18 }}>{w.icon}</span>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 2 }}>{w.week}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.3 }}>{w.title}</div>
                </div>
              </button>

              {activeWeek === wi && (
                <div style={{ padding: "4px 0 8px 0" }}>
                  {w.topics.map((t, ti) => (
                    <div
                      key={ti}
                      className="topic-btn"
                      onClick={() => { setActiveTopic(ti); setActiveTab("concept"); }}
                      style={{
                        padding: "10px 16px 10px 38px",
                        cursor: "pointer",
                        background: activeTopic === ti ? `${w.color}12` : "transparent",
                        borderLeft: activeTopic === ti ? `2px solid ${w.color}80` : "2px solid transparent",
                        marginLeft: 16,
                        fontSize: 12,
                        color: activeTopic === ti ? "#e2e8f0" : "#475569",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        borderRadius: "0 6px 6px 0"
                      }}
                    >
                      <span>{t.icon}</span>
                      <span>{t.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Quick Stats */}
          <div style={{ margin: "20px 12px 0", padding: 12, background: "#0d0d25", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize: 10, color: "#475569", letterSpacing: "1px", marginBottom: 8 }}>SKILLS YOU'LL GAIN</div>
            {["AI Literacy", "Prompt Eng.", "API Usage", "Agents", "Vibe Coding", "Entrepreneurship"].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: i < 4 ? "#00f5d4" : "#475569", flexShrink: 0 }} />
                <span style={{ fontSize: 10, color: i < 4 ? "#94a3b8" : "#374151" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, padding: "20px 24px", overflowY: "auto" }}>
          
          {/* Topic Header */}
          <div style={{
            background: `linear-gradient(135deg, ${color}10, transparent)`,
            border: `1px solid ${color}30`,
            borderRadius: 12,
            padding: "20px 24px",
            marginBottom: 20,
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", top: 0, right: 0, fontSize: 80, opacity: 0.06, lineHeight: 1,
              transform: "translate(10px, -10px)"
            }}>
              {topic.icon}
            </div>
            <div style={{ fontSize: 11, color: color, letterSpacing: "2px", marginBottom: 6, fontWeight: 600 }}>
              {week.week.toUpperCase()} · TOPIC {activeTopic + 1}/{week.topics.length}
            </div>
            <h2 style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>
              {topic.icon} {topic.title}
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7, maxWidth: 700 }}>
              {topic.concept}
            </p>
          </div>

          {/* Tabs */}
          <div style={{
            display: "flex",
            gap: 6,
            marginBottom: 20,
            overflowX: "auto",
            paddingBottom: 4
          }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className="tab-btn"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: activeTab === tab.id ? `1px solid ${color}80` : "1px solid rgba(255,255,255,0.06)",
                  background: activeTab === tab.id ? `${color}20` : "#0d0d25",
                  color: activeTab === tab.id ? color : "#64748b",
                  fontSize: 12,
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  flexShrink: 0
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{
            background: "#0a0a1e",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            padding: "24px",
            minHeight: 300,
            lineHeight: 1.8
          }}>

            {activeTab === "concept" && (
              <div>
                <h3 style={{ color: color, fontSize: 14, letterSpacing: "1px", marginBottom: 16, fontWeight: 600 }}>
                  🧠 THE ANALOGY THAT MAKES IT CLICK
                </h3>
                <div style={{
                  background: `${color}08`,
                  border: `1px solid ${color}25`,
                  borderRadius: 10,
                  padding: 20,
                  fontSize: 14,
                  color: "#cbd5e1",
                  lineHeight: 1.9,
                  fontStyle: "italic"
                }}>
                  {topic.analogy}
                </div>
              </div>
            )}

            {activeTab === "example" && (
              <div>
                <h3 style={{ color: color, fontSize: 14, letterSpacing: "1px", marginBottom: 16, fontWeight: 600 }}>
                  🔍 PRACTICAL EXAMPLE YOU CAN FOLLOW RIGHT NOW
                </h3>
                <div style={{
                  background: "#0d0d28",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: 20,
                  fontSize: 13,
                  color: "#a5f3fc",
                  fontFamily: "monospace",
                  lineHeight: 2,
                  whiteSpace: "pre-wrap"
                }}>
                  {topic.example}
                </div>
              </div>
            )}

            {activeTab === "exercise" && (
              <div>
                <h3 style={{ color: color, fontSize: 14, letterSpacing: "1px", marginBottom: 16, fontWeight: 600 }}>
                  🏋️ YOUR HANDS-ON EXERCISE
                </h3>
                <div style={{
                  background: `linear-gradient(135deg, ${color}08, transparent)`,
                  border: `1px solid ${color}20`,
                  borderRadius: 10,
                  padding: 20,
                  fontSize: 14,
                  color: "#e2e8f0",
                  lineHeight: 1.9
                }}>
                  {topic.exercise}
                </div>
                <div style={{
                  marginTop: 16,
                  padding: "12px 16px",
                  background: "#0d0d25",
                  borderRadius: 8,
                  fontSize: 12,
                  color: "#64748b",
                  border: "1px solid rgba(255,255,255,0.04)"
                }}>
                  ⏱️ <strong style={{ color: "#94a3b8" }}>Estimated time:</strong> 30–60 minutes · 
                  🎯 <strong style={{ color: "#94a3b8" }}>Skill gained:</strong> Hands-on experience with real AI tools
                </div>
              </div>
            )}

            {activeTab === "mistakes" && (
              <div>
                <h3 style={{ color: "#fb8500", fontSize: 14, letterSpacing: "1px", marginBottom: 16, fontWeight: 600 }}>
                  ⚠️ COMMON MISTAKES TO AVOID
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {topic.mistakes.map((m, i) => (
                    <div key={i} style={{
                      display: "flex",
                      gap: 12,
                      padding: "14px 16px",
                      background: "rgba(251,133,0,0.06)",
                      border: "1px solid rgba(251,133,0,0.15)",
                      borderRadius: 8,
                      fontSize: 13,
                      color: "#cbd5e1",
                      alignItems: "flex-start"
                    }}>
                      <span style={{ color: "#fb8500", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✗</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "youtube" && (
              <div>
                <h3 style={{ color: "#ff4444", fontSize: 14, letterSpacing: "1px", marginBottom: 16, fontWeight: 600 }}>
                  ▶️ FREE YOUTUBE CHANNELS — START HERE
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {topic.youtube.map((y, i) => (
                    <div key={i} style={{
                      padding: "16px",
                      background: "#0d0d28",
                      border: "1px solid rgba(255,68,68,0.15)",
                      borderRadius: 10,
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start"
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 8,
                        background: "linear-gradient(135deg, #ff4444, #ff8800)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, flexShrink: 0
                      }}>▶</div>
                      <div>
                        <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 14, marginBottom: 4 }}>
                          {y.channel}
                        </div>
                        <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>
                          📌 {y.video}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tools" && (
              <div>
                <h3 style={{ color: color, fontSize: 14, letterSpacing: "1px", marginBottom: 16, fontWeight: 600 }}>
                  🛠️ FREE TOOLS TO START PRACTICING TODAY
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
                  {topic.tools.map((t, i) => (
                    <div key={i} className="tool-card" style={{
                      padding: "16px",
                      background: `${color}08`,
                      border: `1px solid ${color}20`,
                      borderRadius: 10,
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: 13, color: "#f1f5f9" }}>{t.name}</span>
                        <span style={{
                          fontSize: 9, padding: "2px 8px", borderRadius: 20,
                          background: `${color}25`, color: color, fontWeight: 600,
                          letterSpacing: "1px"
                        }}>FREE</span>
                      </div>
                      <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.6, marginBottom: 10 }}>
                        {t.desc}
                      </div>
                      <a href={t.url} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: 11, color: color, textDecoration: "none",
                        display: "flex", alignItems: "center", gap: 4, fontWeight: 600
                      }}>
                        Visit Site →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "next" && (
              <div>
                <h3 style={{ color: "#00f5d4", fontSize: 14, letterSpacing: "1px", marginBottom: 16, fontWeight: 600 }}>
                  ➡️ YOUR NEXT STEP
                </h3>
                <div style={{
                  padding: 24,
                  background: "linear-gradient(135deg, rgba(0,245,212,0.08), transparent)",
                  border: "1px solid rgba(0,245,212,0.2)",
                  borderRadius: 12,
                  fontSize: 15,
                  color: "#e2e8f0",
                  lineHeight: 1.9,
                  marginBottom: 16
                }}>
                  {topic.nextStep}
                </div>

                <div style={{
                  display: "flex", gap: 12, flexWrap: "wrap"
                }}>
                  {activeTopic < week.topics.length - 1 && (
                    <button
                      onClick={() => { setActiveTopic(activeTopic + 1); setActiveTab("concept"); }}
                      style={{
                        padding: "10px 20px",
                        background: `${color}20`,
                        border: `1px solid ${color}40`,
                        borderRadius: 8,
                        color: color,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                    >
                      Next Topic →
                    </button>
                  )}
                  {activeTopic === week.topics.length - 1 && activeWeek < data.weeks.length - 1 && (
                    <button
                      onClick={() => { setActiveWeek(activeWeek + 1); setActiveTopic(0); setActiveTab("concept"); }}
                      style={{
                        padding: "10px 20px",
                        background: `${data.weeks[activeWeek + 1].color}20`,
                        border: `1px solid ${data.weeks[activeWeek + 1].color}40`,
                        borderRadius: 8,
                        color: data.weeks[activeWeek + 1].color,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                    >
                      {data.weeks[activeWeek + 1].week}: {data.weeks[activeWeek + 1].title} →
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom: Future AI Banner */}
          {activeWeek === 3 && activeTopic === 0 && activeTab === "concept" && (
            <div style={{
              marginTop: 20,
              padding: "16px 20px",
              background: "linear-gradient(135deg, rgba(251,133,0,0.1), rgba(247,37,133,0.1))",
              border: "1px solid rgba(251,133,0,0.2)",
              borderRadius: 12
            }}>
              <div style={{ fontSize: 11, color: "#fb8500", letterSpacing: "2px", marginBottom: 8, fontWeight: 700 }}>
                📡 FROM LIVE RESEARCH — MARCH 2026
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.9 }}>
                <strong style={{ color: "#f1f5f9" }}>Gartner (2026):</strong> 40% of enterprise apps will use AI agents this year, up from 5% in 2025. •{" "}
                <strong style={{ color: "#f1f5f9" }}>PwC:</strong> Professionals with AI skills earn up to 56% more salary. •{" "}
                <strong style={{ color: "#f1f5f9" }}>World Economic Forum:</strong> 86% of employers expect AI to transform their business by 2030. •{" "}
                <strong style={{ color: "#f1f5f9" }}>Key insight:</strong> The most valuable AI skill in 2026 is NOT coding — it's knowing how to use AI to solve real business problems.
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR — Quick Reference */}
        <div style={{
          width: 190,
          minWidth: 190,
          background: "#07071a",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 14px",
          flexShrink: 0
        }}>
          <div style={{ fontSize: 10, color: "#475569", letterSpacing: "2px", marginBottom: 12, fontWeight: 600 }}>
            KEY TERMS GLOSSARY
          </div>

          {[
            { term: "AI", def: "Computer system that mimics human thinking" },
            { term: "Prompt", def: "Instructions you give to an AI" },
            { term: "API Key", def: "Secret password to connect apps to AI" },
            { term: "AI Agent", def: "AI that takes actions, not just answers" },
            { term: "Multi-Agent", def: "Team of AI agents working together" },
            { term: "LLM", def: "Large Language Model — the brain of ChatGPT" },
            { term: "RAG", def: "AI that searches your own documents" },
            { term: "Vibe Coding", def: "Building apps using plain English" },
            { term: "AGI", def: "AI as smart as a human — coming soon" },
            { term: "Agentic AI", def: "AI that works independently on complex tasks" },
          ].map((item, i) => (
            <div key={i} style={{
              marginBottom: 10,
              padding: "8px 10px",
              background: "#0d0d25",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.04)"
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#a5f3fc", marginBottom: 3 }}>
                {item.term}
              </div>
              <div style={{ fontSize: 10, color: "#475569", lineHeight: 1.5 }}>
                {item.def}
              </div>
            </div>
          ))}

          <div style={{
            marginTop: 16, padding: "12px 10px",
            background: "linear-gradient(135deg, rgba(0,245,212,0.08), rgba(247,37,133,0.08))",
            border: "1px solid rgba(0,245,212,0.15)",
            borderRadius: 8
          }}>
            <div style={{ fontSize: 10, color: "#00f5d4", marginBottom: 6, fontWeight: 700 }}>
              💬 DAILY HABIT
            </div>
            <div style={{ fontSize: 10, color: "#64748b", lineHeight: 1.6 }}>
              Spend 30 mins/day using an AI tool. The fastest way to learn AI is to USE it every single day.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
