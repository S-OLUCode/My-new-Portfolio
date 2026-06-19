import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
    // Connects to Formspree using your unique form endpoint string
    const [state, handleSubmit] = useForm('xwvjddkb');

    if (state.succeeded) {
        return (
            <section id="contact" className="w-full bg-[var(--PortfolioBlack)] py-24 border-b border-zinc-900/50 flex items-center justify-center">
                <div className="text-center space-y-4 max-w-md mx-auto px-4">
                    <div className="w-16 h-16 rounded-full bg-[var(--PortfolioPurple)]/10 border border-[var(--PortfolioPurple)]/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(147,51,234,0.1)]">
                        <svg className="w-8 h-8 text-[var(--PortfolioPurple)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-black text-[var(--PortfoliohWhite)] tracking-tight">Message sent!</h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                        Thank you for reaching out.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="w-full bg-[var(--PortfolioBlack)] py-16 sm:py-20 lg:py-24 border-b border-zinc-900/50 selection:bg-[var(--PortfolioPurple)]/20">
            <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-16">

                {/* Section Header */}
                <div className="mb-10 sm:mb-14 lg:mb-16">
                    <p className="text-xs font-mono font-bold tracking-widest text-[var(--PortfolioPurple)] uppercase mb-2.5 sm:mb-3">
                        Contact
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--PortfoliohWhite)] mb-4">
                        Let's Work Together.
                    </h2>
                    <p className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                        Looking for a full-stack engineer who ships? I'm open to full-time, contract and AgriTech collaborations.
                    </p>
                </div>

                {/* Core Layout Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Direct Communication Channels Connect Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 lg:col-span-5 gap-4">

                        {/* Email Channel Card */}
                        <a
                            href="mailto:sayowayne7@gmail.com"
                            className="group flex flex-row sm:flex-col lg:flex-row items-center sm:items-start lg:items-center gap-4 sm:gap-3 lg:gap-5 p-4 sm:p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-xs hover:border-[var(--PortfolioPurple)]/30 transition-all duration-300"
                        >
                            <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center group-hover:border-[var(--PortfolioPurple)]/20 group-hover:bg-[var(--PortfolioPurple)]/5 transition-all duration-300">
                                <svg className="w-5 h-5 text-[var(--PortfolioPurple)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div className="flex flex-col sm:mt-1 lg:mt-0">
                                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-0.5">Email</span>
                                <span className="text-zinc-300 font-medium text-xs sm:text-sm group-hover:text-[var(--PortfolioPurple)] transition-colors duration-200 truncate max-w-[180px] sm:max-w-none">sayowayne7@gmail.com</span>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/sayo-ogunfunminiyi-tayo-658964190"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-row sm:flex-col lg:flex-row items-center sm:items-start lg:items-center gap-4 sm:gap-3 lg:gap-5 p-4 sm:p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-xs hover:border-[var(--PortfolioPurple)]/30 transition-all duration-300"
                        >
                            <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center group-hover:border-[var(--PortfolioPurple)]/20 group-hover:bg-[var(--PortfolioPurple)]/5 transition-all duration-300">
                                <svg className="w-5 h-5 text-[var(--PortfolioPurple)]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div className="flex flex-col sm:mt-1 lg:mt-0">
                                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-0.5">LinkedIn</span>
                                <span className="text-zinc-300 font-medium text-xs sm:text-sm group-hover:text-[var(--PortfolioPurple)] transition-colors duration-200">/in/sayo-ogunfunminiyi-tayo-658964190</span>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/S-OLUCode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-row sm:flex-col lg:flex-row items-center sm:items-start lg:items-center gap-4 sm:gap-3 lg:gap-5 p-4 sm:p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-xs hover:border-[var(--PortfolioPurple)]/30 transition-all duration-300"
                        >
                            <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center group-hover:border-[var(--PortfolioPurple)]/20 group-hover:bg-[var(--PortfolioPurple)]/5 transition-all duration-300">
                                <svg className="w-5 h-5 text-[var(--PortfolioPurple)]" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </div>
                            <div className="flex flex-col sm:mt-1 lg:mt-0">
                                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-500 mb-0.5">GitHub</span>
                                <span className="text-zinc-300 font-medium text-xs sm:text-sm group-hover:text-[var(--PortfolioPurple)] transition-colors duration-200">@S-OLUCode</span>
                            </div>
                        </a>

                        {/* Response tag */}
                        <p className="text-zinc-600 font-mono text-[11px] pl-1 pt-1 col-span-1 sm:col-span-3 lg:col-span-1 hidden sm:block">
                            Average response time: under 24 hours.
                        </p>
                    </div>

                    {/* Right Column: High Fidelity Contact Form Sheet */}
                    <form
                        onSubmit={handleSubmit}
                        className="lg:col-span-7 rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-xs p-5 sm:p-8 space-y-5 sm:space-y-6"
                    >
                        {/* Split layout row for Name and Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {/* Name Input Stack */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-xs font-mono font-bold tracking-wide text-zinc-400">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Recruiter"
                                    className="w-full bg-[#0b0f19]/60 border border-zinc-900 rounded-xl px-4 py-3 sm:py-3.5 text-zinc-200 text-sm placeholder-zinc-700 focus:outline-hidden focus:border-[var(--PortfolioPurple)]/40 focus:bg-[#0b0f19] transition-all duration-200"
                                />
                                <ValidationError field="name" prefix="Name" errors={state.errors} className="text-xs text-rose-500 font-mono mt-1 block" />
                            </div>

                            {/* Email Input Stack */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-xs font-mono font-bold tracking-wide text-zinc-400">
                                    Email
                                </label>
                                <input
                                    type="body"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="company name, role, or project details"
                                    className="w-full bg-[#0b0f19]/60 border border-zinc-900 rounded-xl px-4 py-3 sm:py-3.5 text-zinc-200 text-sm placeholder-zinc-700 focus:outline-hidden focus:border-[var(--PortfolioPurple)]/40 focus:bg-[#0b0f19] transition-all duration-200"
                                />
                                <ValidationError field="email" prefix="Email" errors={state.errors} className="text-xs text-rose-500 font-mono mt-1 block" />
                            </div>

                        </div>

                        {/* Message input area block */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-xs font-mono font-bold tracking-wide text-zinc-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell me about the role, team, or project you have in mind."
                                className="w-full bg-[#0b0f19]/60 border border-zinc-900 rounded-xl px-4 py-3 sm:py-3.5 text-zinc-200 text-sm placeholder-zinc-700 focus:outline-hidden focus:border-[var(--PortfolioPurple)]/40 focus:bg-[#0b0f19] resize-none transition-all duration-200"
                            />
                            <ValidationError field="message" prefix="Message" errors={state.errors} className="text-xs text-rose-500 font-mono mt-1 block" />
                        </div>

                        {/* Custom Interactive Action Button with operational disabled fallback checks */}
                        <div className="pt-1">
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--PortfolioPurple)]/10 border border-[var(--PortfolioPurple)]/20 text-[var(--PortfoliohWhite)] text-sm font-bold tracking-wide hover:bg-[var(--PortfolioPurple)] transition-all duration-300 shadow-sm shadow-purple-500/5 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <svg className="w-4 h-4 transform rotate-45 -translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                <span>{state.submitting ? 'Sending...' : 'Send message'}</span>
                            </button>
                        </div>

                    </form>

                    {/* Response Rate Metadata fallback label positioned for absolute small views */}
                    <p className="text-zinc-600 font-mono text-[11px] text-center w-full block sm:hidden">
                        Average response time: under 24 hours.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default Contact;