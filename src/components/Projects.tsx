interface ProjectItem {
  id: string;
  serviceTag: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  previewDomain: string;
  pingTime: string;
  imagePath: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    serviceTag: "APPLICATION.01",
    title: "Miles Car Rental",
    description: "A modern car rental platform with a focus on user experience and operational efficiency. Features include real-time vehicle availability, secure booking processes, and a responsive design for seamless access across devices.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Zod"],
    liveUrl: "https://milescar-rental.vercel.app/",
    previewDomain: "milescar-rental.vercel.app",
    pingTime: "22ms",
    imagePath: "/miles.Car.png"
  },
  {
    id: "02",
    serviceTag: "APPLICATION.02",
    title: "Laundry Wash Platform",
    description: "A production-grade digital laundry service solution built with deep type-safety. Features an optimized booking management system, transparent item-tier calculations, reactive scheduling, and secure transactional pipelines.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Zod"],
    liveUrl: "https://laundrywash-client-nine.vercel.app/",
    previewDomain: "laundrywash-client-nine.vercel.app",
    pingTime: "16ms",
    imagePath: "/laundryyyy.png"
  },
  {
    id: "03",
    serviceTag: "APPLICATION.03",
    title: "Task Duty",
    description: "A high-efficiency task tracking and productivity platform designed for structured workflow execution. Features state-driven board mechanics, custom lifecycle controls, and robust validation architectures to organize development operations smoothly.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Zod"],
    liveUrl: "https://task-duty-app-swart.vercel.app/",
    previewDomain: "task-duty-app-swart.vercel.app",
    pingTime: "22ms",
    imagePath: "/Taskdutyy.png"
  }
];

export function Projects() {
  return (
    <section id="services" className="w-full bg-[var(--PortfolioBlack)] py-24 border-b border-zinc-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Section Header */}
        <div className="mb-20">
          <p className="text-xs font-mono font-bold tracking-widest text-[var(--PortfolioPurple)] uppercase mb-3">
            // Deployments
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--PortfoliohWhite)]">
            Featured Projects
          </h2>
        </div>

        {/* Project Layout Grid */}
        <div className="flex flex-col gap-16">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="w-full rounded-2xl border border-[var(--PortfolioPurple)]/20 bg-zinc-950/20 backdrop-blur-xs p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-stretch transition-all duration-300 hover:border-[var(--PortfolioPurple)]/40 hover:shadow-[0_0_30px_rgba(147,51,234,0.05)]"
              >
                <div className={`flex-1 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 block mb-2">
                      {project.serviceTag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--PortfoliohWhite)] tracking-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-xl">
                      {project.description}
                    </p>

                    {/*  Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 font-mono text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Live button */}
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--PortfolioPurple)]/10 border border-[var(--PortfolioPurple)]/20 text-[var(--PortfolioPurple)] text-sm font-bold tracking-wide hover:bg-[var(--PortfolioPurple)] hover:text-[var(--PortfoliohWhite)] transition-all duration-300 shadow-sm shadow-purple-500/5 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-98"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      <span>View Live</span>
                    </a>
                  </div>
                </div>

                {/* Right Side  */}
                <div className={`flex-1 min-h-[320px] sm:min-h-[380px] rounded-xl border border-[var(--PortfolioPurple)]/20 bg-zinc-950/40 flex flex-col overflow-hidden group relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>

                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-4 py-3 select-none shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      </div>

                      <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--PortfolioPurple)]/10 border border-[var(--PortfolioPurple)]/20">
                        <span className="w-1 h-1 rounded-full bg-[var(--PortfolioPurple)] shadow-[0_0_4px_var(--PortfolioPurple)]" />
                        <span className="text-[10px] text-[var(--PortfolioPurple)] font-mono font-bold tracking-wide uppercase">live preview</span>
                      </div>
                    </div>

                    <div className="w-2/5 sm:w-1/2 bg-zinc-900/60 border border-zinc-800/80 rounded-md py-0.5 px-3 text-center text-[11px] font-mono text-zinc-500 tracking-wide truncate">
                      https://{project.previewDomain}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--PortfolioPurple)]/5 border border-[var(--PortfolioPurple)]/10 shrink-0">
                      <span className="w-1 h-1 rounded-full bg-[var(--PortfolioPurple)] animate-pulse shadow-[0_0_6px_rgba(147,51,234,0.7)]" />
                      <span className="text-[10px] font-mono text-[var(--PortfolioPurple)]/80 font-bold">ONLINE • {project.pingTime}</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full bg-zinc-950/20 relative overflow-hidden flex items-center justify-center min-h-[240px] sm:min-h-[320px] lg:min-h-full">
                    <img
                      src={project.imagePath}
                      alt={`${project.title} Application View Preview`}
                      className="w-full h-auto max-h-full object-contain lg:object-cover lg:object-top transition-transform duration-500 group-hover:scale-[1.015]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;