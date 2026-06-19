import { useState } from 'react';

interface SkillItem {
  name: string;
  level: string; // Decorative metadata tag to make the UI look premium
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

const SKILLS_MATRIX: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253",
    skills: [
      { name: "HTML", level: "Structure" },
      { name: "CSS", level: "Layout" },
      { name: "JavaScript", level: "ES6+" },
      { name: "TypeScript", level: "Strict-Type" },
      { name: "React", level: "SPA" },
      { name: "Next.js", level: "SSR/App Router" },
      { name: "Tailwind CSS", level: "Utility-v4" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    skills: [
      { name: "Node.js", level: "Runtime" },
      { name: "Express.js", level: "Middleware" },
      { name: "REST APIs", level: "Architecture" }
    ]
  },
  {
    id: "database",
    title: "Database Architectures",
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V10.125m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75",
    skills: [
      { name: "MongoDB", level: "NoSQL" },
      { name: "PostgreSQL", level: "Relational" }
    ]
  }
];

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  return (
    <section id="stack" className="w-full bg-[var(--PortfolioBlack)] py-24 border-b border-zinc-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-mono font-bold tracking-widest text-[var(--PortfolioPurple)] uppercase mb-3">
              // TECHNICAL_ENVIRONMENT_MATRIX
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--PortfoliohWhite)]">
              Verified Stack Capabilities
            </h2>
          </div>

          {/* Interactive Navigation Control Group Tabs */}
          <div className="flex bg-zinc-950/60 border border-zinc-900 rounded-xl p-1 shrink-0 self-start md:self-auto">
            {SKILLS_MATRIX.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === category.id
                    ? 'bg-[var(--PortfolioPurple)] text-[var(--PortfoliohWhite)] shadow-md shadow-purple-500/10'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {category.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Panel Grid */}
        <div>
          {SKILLS_MATRIX.map((category) => {
            if (category.id !== activeTab) return null;
            return (
              <div key={category.id} className="space-y-6 animate-fade-in">
                {/* Panel Classification Subheading */}
                <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs tracking-wider pb-2 border-b border-zinc-900/40">
                  <svg className="w-4 h-4 text-[var(--PortfolioPurple)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                  </svg>
                  <span>CLASSIFICATION // {category.title.toUpperCase()}</span>
                </div>

                {/* Sub-group Matrix Cards Row Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-xs flex flex-col justify-between items-start gap-4 hover:border-[var(--PortfolioPurple)]/50 hover:bg-zinc-900/10 transition-all duration-300 shadow-xs cursor-default hover:shadow-[0_0_25px_rgba(147,51,234,0.03)]"
                    >
                      <div className="w-full flex items-center justify-between">
                        <h3 className="text-base font-bold tracking-tight text-[var(--PortfoliohWhite)] group-hover:text-[var(--PortfolioPurple)] transition-colors duration-300">
                          {skill.name}
                        </h3>
                        <span className="font-mono text-zinc-700 text-xs opacity-40 group-hover:opacity-100 group-hover:text-[var(--PortfolioPurple)] transition-all duration-300">
                          &lt;/&gt;
                        </span>
                      </div>
                      
                      {/* Technical Detail Label Tag */}
                      <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-zinc-600 bg-zinc-900/40 border border-zinc-800/40 px-2 py-0.5 rounded-md group-hover:border-[var(--PortfolioPurple)]/20 group-hover:text-zinc-400 transition-colors duration-300">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;