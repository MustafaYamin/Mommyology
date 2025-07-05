import Image from 'next/image';

const funFont = "font-['Comic_Sans_MS','Comic_Sans','cursive'] font-extrabold tracking-wide";

const socialLinks = [
	{
		href: 'https://facebook.com/',
		label: 'Facebook',
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className="w-7 h-7"
				aria-hidden="true"
			>
				<path
					d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5Z"
					fill="#A78BFA"
					stroke="#fff"
					strokeWidth="1.5"
				/>
				<path
					d="M13.5 22V14.5h2.25l.25-2H13.5V11.5c0-.58.16-.97 1-.97h1.25V8.7c-.22-.03-.97-.1-1.85-.1-1.83 0-3.15 1.12-3.15 3.18V12.5H8v2h2.25V22"
					stroke="#fff"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		href: 'https://instagram.com/',
		label: 'Instagram',
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className="w-7 h-7"
				aria-hidden="true"
			>
				<rect
					x="2"
					y="2"
					width="20"
					height="20"
					rx="6"
					fill="#A78BFA"
					stroke="#fff"
					strokeWidth="1.5"
				/>
				<circle
					cx="12"
					cy="12"
					r="5"
					stroke="#fff"
					strokeWidth="1.5"
				/>
				<circle cx="17" cy="7" r="1.2" fill="#fff" />
			</svg>
		),
	},
];

const Footer = () => {
	return (
		<footer className="w-full bg-[#6B5AA2] text-[#FDE047] py-10 px-4 flex flex-col items-center relative mt-10 shadow-inner overflow-visible border-t-4 border-[#FDE047]">
			<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl mx-auto gap-6 z-10">
				<div className="flex items-center gap-4">
					<Image
						src="/Images/logo.jpg"
						alt="Mommyology Logo"
						width={110}
						height={34}
						className="rounded-2xl bg-[#FDE047] p-1 border-4 border-[#45C8F0] shadow-lg hover:scale-105 transition-transform"
					/>
					<span className={`text-2xl md:text-3xl ${funFont}`}>
						mommyology
					</span>
				</div>
				<div className="flex gap-6 mt-4 md:mt-0">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.label}
							className="rounded-xl bg-[#A78BFA] border border-white/60 p-3 flex items-center justify-center shadow hover:bg-[#FDE047] hover:border-[#45C8F0] transition-all duration-200"
						>
							{link.icon}
						</a>
					))}
				</div>
			</div>
			<p
				className={`text-[#FDE047] text-base md:text-lg mt-6 ${funFont} z-10 text-center`}
			>
				© {new Date().getFullYear()} Mommyology. All rights reserved.
			</p>
			{/* Playful footer bubbles using only brand colors */}
			<div className="absolute -top-4 left-8 w-10 h-10 bg-[#FDE047]/60 rounded-full blur-xl animate-bounce-slow z-0" />
			<div className="absolute -bottom-4 right-16 w-14 h-14 bg-[#45C8F0]/40 rounded-full blur-xl animate-bounce-slower z-0" />
			<div className="absolute top-2 right-4 w-6 h-6 bg-[#6B5AA2]/70 rounded-full blur-md animate-bounce-fast z-0" />
		</footer>
	);
};

export default Footer;
