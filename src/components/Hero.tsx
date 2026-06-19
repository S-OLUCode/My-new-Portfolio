

export function Hero() {
    return (
        <section id="about" className="relative min-h-[calc(100vh-96px)] w-full bg-[var(--PortfolioBlack)] flex items-center justify-start overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto pt-6 pb-16 relative z-10 max-w-9xl px-4 sm:px-6 lg:px-12">


                <div className="max-w-[1000px] mb-8">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[var(--PortfoliohWhite)] leading-[1.1]">
                        I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Ogunfunmini-Tayo Sayo.</span>
                        <span className="block text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--PortfolioPurple)] mt-4 drop-shadow-[0_0_30px_rgba(147,51,234,0.15)]">
                            Full-Stack Developer.
                        </span>
                    </h1>
                </div>

                <div className="max-w-[700px] mb-10">
                    <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed">
                        Building modern full-stack web applications with React, TypeScript, Node.js, and MongoDB—focused on performance, scalability, security, and exceptional user experiences.
                    </p>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-sm mb-4">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--PortfolioPurple)]"></span>
                    </span>
                    <p className="text-xs font-mono font-medium tracking-wide text-zinc-400">
                        Status: <span className="text-[var(--PortfolioPurple)] font-semibold">Fully Operational</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;