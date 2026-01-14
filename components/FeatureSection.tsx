import {
	ShieldCheckIcon,
	CodeBracketIcon,
	CommandLineIcon,
	ComputerDesktopIcon,
	ServerIcon,
} from "@heroicons/react/24/outline";

const skillsCategories = [
	{
		name: "Technical",
		icon: ShieldCheckIcon,
		skills: [
			"Security Assessment",
			"Penetration Tester",
			"API Testing",
			"Network Testing",
			"Threat Model",
			"Cloud Security",
			"AI/ML Security",
		],
	},
	{
		name: "Industrial",
		icon: ServerIcon,
		skills: [
			"Team Work",
			"Problem-Solving",
			"Basic Forensics skills",
			"Knowledge of Security Across Various Platform",
		],
	},
	{
		name: "Tools (DAST, SAST, SCA)",
		icon: CodeBracketIcon,
		skills: [
			"Metasploit",
			"Burp Suite",
			"Nmap",
			"Nikto",
			"Sqlmap",
			"John the ripper",
			"Checkmarx (SAST SCA)",
			"OWASP",
			"Tenable",
			"Nessus",
			"Postman",
			"Invicti",
		],
	},
	{
		name: "Operating System",
		icon: ComputerDesktopIcon,
		skills: ["Linux", "Windows", "Mac"],
	},
	{
		name: "Scripting Languages",
		icon: CommandLineIcon,
		skills: ["Bash", "Python", "Shell"],
	},
];

export default function FeatureSection() {
	return (
		<div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
						Skills
					</h2>
					<p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
						Comprehensive expertise in cybersecurity, penetration testing, and security
						assessment across multiple platforms and tools.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
						{skillsCategories.map((category) => (
							<div
								key={category.name}
								className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
								<div className="mb-4 flex items-center gap-3">
									<div className="flex size-10 items-center justify-center rounded-lg bg-blue-900 dark:bg-blue-800">
										<category.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{category.name}
									</h3>
								</div>
								<ul className="space-y-2">
									{category.skills.map((skill, index) => (
										<li
											key={index}
											className="flex items-start text-sm text-gray-600 dark:text-gray-400">
											<span className="mr-2 text-blue-900 dark:text-blue-700">•</span>
											<span>{skill}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
