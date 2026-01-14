const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/0xDTC",
		icon: (props: any) => (
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				{...props}>
				<path
					fillRule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "X (Twitter)",
		href: "https://x.com/DTCx0",
		icon: (props: any) => (
			<svg
				fill="currentColor"
				viewBox="0 0 24 24"
				{...props}>
				<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
			</svg>
		),
	},
	{
		name: "Email",
		href: "mailto:tanveersingh@0xdtc.com",
		icon: (props: any) => (
			<svg
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
				{...props}>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
				/>
			</svg>
		),
	},
	{
		name: "Buy Me a Coffee",
		href: "https://buymeacoffee.com/0xdtc",
		icon: (props: any) => (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				{...props}>
				<path d="M6.5 2C5.67 2 5 2.67 5 3.5V4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1v-.5C15 2.67 14.33 2 13.5 2h-7zM4 6h12v12H4V6zm7 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-1-6h2v2h-2V8z" />
			</svg>
		),
	},
	{
		name: "Hack The Box",
		href: "https://app.hackthebox.com/public/users/196903",
		icon: (props: any) => (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				{...props}>
				<path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4zm0 1.64L4 9v6l8 4 8-4V9l-8-4z" />
			</svg>
		),
	},
];

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-white dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
					&copy; {currentYear} Portfolio. All rights reserved.
				</p>
				<div className="flex justify-center gap-x-6 md:order-2">
					{socialLinks.map((item) => (
						<a
							key={item.name}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-blue-900 transition-colors dark:text-gray-400 dark:hover:text-blue-700">
							<span className="sr-only">{item.name}</span>
							<item.icon
								aria-hidden="true"
								className="size-6"
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
