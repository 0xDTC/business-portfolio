"use client";

import {
	ShieldCheckIcon,
	CodeBracketIcon,
	UserGroupIcon,
} from "@heroicons/react/20/solid";
import InteractiveTerminal from "./InteractiveTerminal";

export default function ContentSection() {
	return (
		<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-gray-900">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<svg
					aria-hidden="true"
					className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 dark:stroke-gray-800">
					<defs>
						<pattern
							x="50%"
							y={-1}
							id="e813992c-7d03-4cc4-a2bd-151760b470a0"
							width={200}
							height={200}
							patternUnits="userSpaceOnUse">
							<path
								d="M100 200V.5M.5 .5H200"
								fill="none"
							/>
						</pattern>
					</defs>
					<svg
						x="50%"
						y={-1}
						className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
						<path
							d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
							strokeWidth={0}
						/>
					</svg>
					<rect
						fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
						width="100%"
						height="100%"
						strokeWidth={0}
					/>
				</svg>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<p className="text-base/7 font-semibold text-blue-900 dark:text-blue-700">
								Security Engineer
							</p>
							<h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
								About Me
							</h1>
							<p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
								Security Engineer with 4 years of enterprise experience and 4 years of self-directed learning. 
								Specialized in Web Security Assessment, API Testing, Network Testing, AWS Cloud Security, 
								AI/LLM security, and Penetration Testing. Passionate about developing custom security tools 
								and committed to continuous learning in collaborative environments.
							</p>
						</div>
					</div>
				</div>
				<div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
					<InteractiveTerminal />
				</div>
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg dark:text-gray-400">
							<p>
								Currently serving as a Security Engineer at Monotype Solutions, where I lead comprehensive 
								security assessments and penetration testing initiatives across web applications, APIs, 
								networks, and cloud infrastructure, including cutting-edge AI/LLM integrations.
							</p>
							<ul
								role="list"
								className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
								<li className="flex gap-x-3">
									<ShieldCheckIcon
										aria-hidden="true"
										className="mt-1 size-5 flex-none text-blue-900 dark:text-blue-700"
									/>
									<span>
										<strong className="font-semibold text-gray-900 dark:text-white">
											Penetration Testing & Security Analysis.
										</strong>{" "}
										Conducting thorough penetration tests on APIs, web applications, networks, and cloud 
										infrastructure. Developing in-depth threat models to identify attack vectors and enable 
										proactive defense strategies.
									</span>
								</li>
								<li className="flex gap-x-3">
									<UserGroupIcon
										aria-hidden="true"
										className="mt-1 size-5 flex-none text-blue-900 dark:text-blue-700"
									/>
									<span>
										<strong className="font-semibold text-gray-900 dark:text-white">
											Security Coordination & Collaboration.
										</strong>{" "}
										Acting as security coordinator to streamline cross-team workflows, prioritize security 
										findings, and facilitate threat modeling sessions. Crafting mitigation plans that ensure 
										prompt vulnerability resolution within SLAs.
									</span>
								</li>
								<li className="flex gap-x-3">
									<CodeBracketIcon
										aria-hidden="true"
										className="mt-1 size-5 flex-none text-blue-900 dark:text-blue-700"
									/>
									<span>
										<strong className="font-semibold text-gray-900 dark:text-white">
											Vulnerability Management.
										</strong>{" "}
										Leading vulnerability scans and assessments using automated tools for early detection 
										and rapid remediation. Ensuring identified risks are prioritized and comprehensively 
										addressed to minimize organizational risk exposure.
									</span>
								</li>
							</ul>
							<p className="mt-8">
								Through strategic security initiatives, I've contributed to improving organizational security 
								maturity and fostering a culture of proactive security awareness. My work has resulted in 
								faster vulnerability response times, enhanced interdepartmental communication, and reduced 
								attack surface areas across various digital assets.
							</p>
							<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Impact & Achievements
							</h2>
							<p className="mt-6">
								Successfully implemented vulnerability management processes that have strengthened the 
								organization's cybersecurity posture. By combining hands-on technical expertise with effective 
								collaboration, I've helped build robust security frameworks that protect critical assets while 
								maintaining operational efficiency.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
