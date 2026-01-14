const timeline = [
	{
		name: "Security Engineer",
		company: "Monotype Solutions India Private Limited",
		location: "Noida, India",
		description:
			"Leading penetration testing on APIs, web applications, networks, and cloud infrastructure including AI/LLM integrations. Developing threat models, coordinating security workflows, and managing vulnerability assessments to enhance organizational security posture.",
		date: "2022 - Present",
		dateTime: "2022",
		isCurrent: true,
	},
	{
		name: "Penetration Tester",
		company: "Confidential Clients (ERP, Hospital Network, E-commerce)",
		location: "US, India",
		description:
			"Conducted advanced penetration tests identifying critical vulnerabilities (XSS, IDOR, authentication bypasses). Utilized Burp Suite, Nessus, OWASP ZAP, and Metasploit. Provided actionable security recommendations and collaborated with development teams to improve security practices.",
		date: "2018 - 2022",
		dateTime: "2018",
		isCurrent: false,
	},
];

export default function VerticalTimeline() {
	return (
		<div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
						Timeline
					</h2>
					<p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
						A chronological view of key milestones and achievements.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-4xl">
					<div className="relative">
						{/* Vertical line */}
						<div
							aria-hidden="true"
							className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 lg:left-8"
						/>

						<div className="space-y-12">
							{timeline.map((item, index) => (
								<div
									key={item.name}
									className="relative flex gap-x-6 lg:gap-x-8">
									{/* Dot */}
									<div className="relative flex h-8 w-8 flex-none items-center justify-center lg:h-10 lg:w-10">
										<div className={`absolute h-4 w-4 rounded-full ring-4 ring-white dark:ring-gray-900 lg:h-5 lg:w-5 ${item.isCurrent ? "bg-green-500 animate-pulse" : "bg-blue-900 dark:bg-blue-800"}`} />
									</div>

									{/* Content */}
									<div className="flex-auto pb-12">
										<div className="flex items-center gap-x-4">
											<time
												dateTime={item.dateTime}
												className={`text-sm/6 font-semibold ${item.isCurrent ? "text-green-700 dark:text-green-400" : "text-blue-900 dark:text-blue-700"}`}>
												{item.date}
											</time>
											{item.isCurrent && (
												<span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-400">
													Current
												</span>
											)}
										</div>
										<h3 className="mt-2 text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
											{item.name}
										</h3>
										<p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
											{item.company} • {item.location}
										</p>
										<p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
