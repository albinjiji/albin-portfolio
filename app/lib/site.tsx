export const site = {
	name: 'Albin Jiji',
	title: 'Senior Software Engineer',
	tagline:
		'Frontend Engineer | React.js | Next.js | JavaScript | TypeScript | Redux | Redux Toolkit',
	email: 'albinjiji3@gmail.com',
	phone: '+91-7012017994',
	linkedin: 'https://www.linkedin.com/in/albinjiji/',
    gitHub: 'https://github.com/albinjiji',
	resumeUrl: '/-Resume.pdf',
	skillsStrip: ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'],
	about:
		"Passionate and results-driven Frontend Developer with 3+ years of experience building high-performance web and mobile applications. I specialize in developing scalable, responsive, and intuitive user interfaces using React.js, Next.js, TypeScript, Redux Toolkit, and JavaScript, ensuring exceptional user experiences and optimized performance. Skilled in Next.js SSR/SSG, state management, API integration, and UI performance tuning, with a strong focus on modular architecture and code maintainability. I collaborate closely with cross-functional teams to translate product requirements into elegant, production-ready solutions that drive business value. Holding a Master's in Computer Application (MCA), I bring a solid grounding in software engineering principles, paired with practical expertise in modern frontend frameworks, testing, and CI/CD workflows. I'm passionate about crafting impactful digital experiences and continuously evolving with emerging web technologies. Always open to connecting with engineering leaders, recruiters, and teams working on innovative, user-focused products.",
	skills: {
		frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Next.js', 'Redux Toolkit', 'TypeScript'],
		backend: [
			'Node.js(Beginner)',
			'Python(Beginner)'
		],
		core: [
            'Data Structures & Algorithms',
			'UI Development',
            'Responsive Web Design',
            'State Management',
            'Cross-Browser Compatibility',
            'Performance Optimization', 
            'Reusable Components',
            'Debugging', 
            'Testing',
            'Collaboration',
            'Code Review'
		],
		tools: [
			'Git', 'Jest', 'RESTful APIs', 'Azure', 'Figma', 'Material UI', 'Tailwind CSS'
		]
	},
	experience: [
		{
			role: 'Senior Software Engineer',
			company: 'Kalkitech',
			location: 'Kochi, India',
			period: 'June 2022 - Present',
			highlights: [
				'Built and maintained React.js-based WebView mobile applications for Android and iOS, ensuring high performance and cross-platform reliability.',
				'Created responsive, user-friendly web interfaces using React.js, TypeScript, and JavaScript to enhance usability and consistency across devices.',
				'Implemented custom React hooks to encapsulate shared logic, improving maintainability and scalability.',
				'Integrated RESTful APIs for smooth data communication between frontend and backend systems.',
				'Engineered reusable React components to accelerate feature development and standardize design patterns.',
				'Utilized Redux and Redux Toolkit for predictable state management and stable data flow across modules.',
				'Performed unit testing and debugging using Jest to strengthen reliability and reduce production issues.',
				'Collaborated with UI/UX designers, QA engineers, and backend developers to deliver optimized, production-ready applications.',
                'Technologies Used: React.js, Redux, Redux Toolkit, TypeScript, JavaScript, RESTful APIs, Jest, Git, HTML, CSS, Material UI, Figma.'
			]
		},
		{
			role: 'Intern',
			company: 'Kalkitech',
			location: '',
			period: 'April 2022 - June 2022',
			highlights: [
				'Developed a React application from scratch, contributing to both frontend development and feature implementation.',
				'Acquired hands-on experience in building responsive, scalable web applications, strengthening problem-solving and debugging skills.',
			]
		},
	],
    projects: [
        {
            name: 'InsightCoder - AI-Powered Coding Assistant',
            description: [
                'Developed an AI-based web app using Next.js, TypeScript, Redux Toolkit, and Tailwind CSS to help developers write, debug, and understand code.',
                'Integrated the Google Gemini API for intelligent code explanations and context-aware responses.',
                'Designed a responsive UI with reusable React components and managed state using RTK Query'
                ],
            links: [
                {label: 'GitHub', url: 'https://github.com/albinjiji/Insight-Coder'},
                {label: 'Live Demo', url: 'https://insight-coder.vercel.app/'},
            ],
        }
    ],
	education: [
		{
			degree: 'MCA',
			university: 'A P J Abdul Kalam Technological University',
			period: 'Sept 2019 - Sept 2021'
		},
        {
            degree: 'BCA',
            university: 'Calicut University',
            period: '2016 - 2019'
        }
	]
};

export type Site = typeof site;
