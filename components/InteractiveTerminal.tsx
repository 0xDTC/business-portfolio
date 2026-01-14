"use client";

import { useState, useRef, useEffect } from "react";

interface CommandOutput {
	type: "command" | "output" | "error";
	content: string;
}

const supportedCommands = [
	"ls",
	"pwd",
	"echo",
	"whoami",
	"date",
	"clear",
	"help",
	"cat",
	"uname",
	"uptime",
];

const fileSystem: Record<string, string[]> = {
	"/": ["home", "usr", "var", "etc"],
	"/home": ["user", "projects"],
	"/home/user": ["documents", "downloads", "desktop"],
	"/home/user/projects": ["portfolio", "blog", "api"],
};

function executeCommand(command: string): string {
	const [cmd, ...args] = command.trim().split(/\s+/);
	const fullCommand = command.trim().toLowerCase();

	switch (cmd) {
		case "ls":
			const path = args[0] || "/home/user";
			const files = fileSystem[path] || [];
			return files.length > 0 ? files.join("  ") : "";
		case "pwd":
			return "/home/user";
		case "echo":
			return args.join(" ");
		case "whoami":
			return "Tanveer Singh | Securit Engineer | Red Teamer";
		case "date":
			return new Date().toLocaleString();
		case "clear":
			return "";
		case "help":
			return `Available commands: ${supportedCommands.join(", ")}, "who am i"\n\nTry: ls, pwd, echo, whoami, date, help`;
		case "cat":
			if (args[0]) {
				return `Contents of ${args[0]}\nThis is a simulated file system.\nYou can explore with 'ls' command.`;
			}
			return "Usage: cat <filename>";
		case "uname":
			return "Linux";
		case "uptime":
			return "up 2 days, 14:30";
		case "":
			return "";
		default:
			// Handle "who am i" as a multi-word command
			if (fullCommand === "who am i") {
				return "Tanveer Singh | Securit Engineer | Red Teamer";
			}
			return `Command not found: ${cmd}. Type 'help' for available commands.`;
	}
}

export default function InteractiveTerminal() {
	const [history, setHistory] = useState<CommandOutput[]>([
		{
			type: "output",
			content: "Welcome to the interactive terminal!\nType 'help' to see available commands.",
		},
	]);
	const [currentInput, setCurrentInput] = useState("");
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const terminalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [history]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!currentInput.trim()) return;

		const command = currentInput.trim();
		const output = executeCommand(command);

		const newHistory: CommandOutput[] = [
			...history,
			{ type: "command", content: command },
		];

		if (output) {
			newHistory.push({
				type: output.includes("not found") ? "error" : "output",
				content: output,
			});
		}

		setHistory(newHistory);

		if (command !== "clear") {
			setCommandHistory((prev) => [...prev, command]);
		} else {
			setHistory([{ type: "output", content: "" }]);
		}

		setCurrentInput("");
		setHistoryIndex(-1);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "ArrowUp") {
			e.preventDefault();
			if (commandHistory.length > 0) {
				const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
				setHistoryIndex(newIndex);
				setCurrentInput(commandHistory[newIndex]);
			}
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			if (historyIndex !== -1) {
				const newIndex = historyIndex + 1;
				if (newIndex >= commandHistory.length) {
					setHistoryIndex(-1);
					setCurrentInput("");
				} else {
					setHistoryIndex(newIndex);
					setCurrentInput(commandHistory[newIndex]);
				}
			}
		}
	};

	return (
		<div className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 dark:bg-gray-800 dark:ring-white/10 overflow-hidden">
			{/* Terminal Header */}
			<div className="flex items-center gap-2 bg-gray-800 px-4 py-3 dark:bg-gray-900">
				<div className="flex gap-2">
					<div className="h-3 w-3 rounded-full bg-red-500"></div>
					<div className="h-3 w-3 rounded-full bg-yellow-500"></div>
					<div className="h-3 w-3 rounded-full bg-green-500"></div>
				</div>
				<div className="ml-4 text-xs text-gray-400">Terminal</div>
			</div>

			{/* Terminal Body */}
			<div
				ref={terminalRef}
				className="h-96 overflow-y-auto bg-gray-900 p-4 font-mono text-sm dark:bg-gray-950">
				{history.map((item, index) => {
					if (item.type === "command") {
						return (
							<div
								key={index}
								className="mb-1">
								<span className="text-green-400">user@portfolio</span>
								<span className="text-gray-500">:</span>
								<span className="text-blue-400">~</span>
								<span className="text-gray-500">$</span>{" "}
								<span className="text-gray-100">{item.content}</span>
							</div>
						);
					} else if (item.type === "error") {
						return (
							<div
								key={index}
								className="mb-2 text-red-400 whitespace-pre-wrap">
								{item.content}
							</div>
						);
					} else {
						return (
							<div
								key={index}
								className="mb-2 text-gray-300 whitespace-pre-wrap">
								{item.content}
							</div>
						);
					}
				})}

				{/* Input Line */}
				<form
					onSubmit={handleSubmit}
					className="flex items-center">
					<span className="text-green-400">user@portfolio</span>
					<span className="text-gray-500">:</span>
					<span className="text-blue-400">~</span>
					<span className="text-gray-500">$</span>{" "}
					<input
						ref={inputRef}
						type="text"
						value={currentInput}
						onChange={(e) => setCurrentInput(e.target.value)}
						onKeyDown={handleKeyDown}
						className="ml-2 flex-1 bg-transparent text-gray-100 outline-none focus:outline-none"
						placeholder=""
						autoFocus
					/>
				</form>
			</div>
		</div>
	);
}
