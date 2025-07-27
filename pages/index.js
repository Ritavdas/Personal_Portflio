import { Box, Text, Heading, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import { Grid } from "../components/Grid";
import { Experience } from "../components/Experience";
import { Avatar } from "../components/Avatar";
import useWindowWidth from "../hooks/Width";
export default function Home() {
	const width = useWindowWidth();
	let introductory_text = `
	GM, I'm Ritav. I build things that make money and solve real problems. Over the past 4+ years, I've generated $25K+ in revenue through smart integrations, won India's first Generative AI hackathon, and shipped products used by thousands of people daily. Currently obsessed with AI platforms and e-commerce systems that actually work. When I'm not coding, I'm probably trying to get better at being consistent at the gym.
	`;

	let Work_Experiences = [
		{
			href: "https://apptile.co/",
			side: "April 2024 - Present",
			title: "Software Engineer - Apptile",
			desc: [
				`Generated over $25K in additional revenue by architecting comprehensive integrations, delivering 10+ critical features while mentoring junior developers.`,
				`Built enterprise-level systems serving thousands of users across 5+ international markets, with real-time tracking and automation capabilities.`,
				`Led development of complex Shopify ecosystem integrations that directly impact bottom-line revenue growth.`,
			],
			stack: "React • Node.js • Shopify API • TypeScript • Enterprise Systems",
		},
		{
			href: "https://tile.dev/",
			side: "2024",
			title: "Founding Engineer - tile.dev (#4 on ProductHunt)",
			desc: [
				`Architected a prompt-to-app platform that hit #4 on ProductHunt, building the core AI infrastructure from scratch.`,
				`Created an in-browser IDE with live previews and automated build pipelines - basically magic for developers.`,
				`Pioneered sliding window techniques for LLM context management, solving real problems in AI conversation flow.`,
			],
			stack: "React • Node.js • AI/LLM • Docker • Monaco Editor",
		},
		{
			href: "https://betterapp.ai/",
			side: "2023 - 2024",
			title: "FullStack Developer - Betterapp",
			desc: [
				`Built a Chrome extension used by 1,500+ daily active users, helping people reclaim their time from digital distractions.`,
				`Shipped mobile features that boosted the app store rating from 4.3 to 4.5, serving 5,000+ monthly users.`,
				`Created notification systems that increased engagement by 65% while reducing server load - efficiency meets impact.`,
			],
			stack: "React • Kotlin • Mobile Development • Browser Extensions",
		},
		{
			side: "2021 - 2023",
			title: "...plus some other exciting ventures along the way",
			desc: [
				`Worked with innovative startups and established companies, building everything from data pipelines to dealer management platforms.`,
				`Each experience taught me something new about scaling systems, leading teams, and shipping products that matter.`,
			],
			stack: "Various Technologies • Continuous Learning • Impact-Driven Development",
		},
	];

	let side_projects = [
		{
			side: "2024",
			title: "Hemingway.Ink - AI Marketing Agent",
			href: "https://hemingway.ink/",
			desc: [
				"Built an AI-powered writing platform that learns your brand voice and creates marketing content that actually sounds like you wrote it.",
				"Hit $100 MRR with 50+ active users within the first few months - turns out people really want AI that gets their vibe.",
				"The platform uses advanced prompt engineering and fine-tuning to create personalized marketing agents that scale your voice, not replace it.",
				"It's like having a copywriter who studied all your best content and can write in your style on demand.",
			],
			stack: "Next • OpenAI • Stripe • AI/LLM • Product Strategy",
		},
		{
			side: "Always",
			title: "...and a few other experiments brewing in the lab",
			desc: [
				"From Chrome extensions that went viral to platforms that never saw the light of day - each project teaches me something new.",
				"Some made money, some made users happy, some just made me a better developer. All were worth building.",
			],
			stack: "Curiosity • Rapid Prototyping • Learning by Shipping",
		},
	];

	return (
		<>
			<Head>
				<title>Ritav Das - Software Engineer</title>
			</Head>

			<Box
				py={width > 650 ? "7rem" : "5rem"}
				px={4}
				maxWidth={500}
				mx="auto"
			>
				<Grid
					fluid
					templateColumns="repeat(4, 1fr)"
					mb={10}
					alignItems="center"
				>
					<GridItem colSpan={1}>
						<Avatar />
					</GridItem>
					<GridItem colSpan={3}>
						<Box>
							<Heading as="h1" size="lg">
								Ritav Das
							</Heading>
							<Text>Software Engineer</Text>
						</Box>
					</GridItem>
				</Grid>
				<Box mb={14}>
					<Heading as="h2" size="md" mb={2}>
						About
					</Heading>
					<Text>{introductory_text}</Text>
				</Box>
				<Box mb={14}>
					<Heading as="h2" size="md" mb={10}>
						Work Experience
					</Heading>
					{Work_Experiences.map((experience, index) => (
						<Experience
							key={index}
							href={experience.href}
							side={experience.side}
							title={experience.title}
							desc={experience.desc}
							stack={experience.stack}
							mb={10}
						/>
					))}
					<Heading as="h2" size="md" className="mt-14 mb-10">
						Projects
					</Heading>
					{side_projects.map((project, index) => (
						<Experience
							key={index}
							image={project.image}
							href={project.href}
							side={project.side}
							title={project.title}
							desc={project.desc}
							stack={project.stack}
							mb={10}
						/>
					))}
					<Heading as="h2" size="md" mt={14} mb={10}>
						Links
					</Heading>

					<Experience
						side="Github"
						title="@ritavdas"
						href="https://github.com/ritavdas"
						mb={4}
					/>
					<Experience
						side="Twitter"
						title="@dasritav"
						href="https://twitter.com/dasritav"
						mb={4}
					/>
					<Experience
						side="Blogs"
						title="@ritavdas"
						href="https://substack.com/@ritavdas"
						mb={4}
					/>
					<Experience
						side="Tech Blogs"
						title="@ritavdas"
						href="https://ritavdas.hashnode.dev/"
						mb={4}
					/>
					<Experience
						side="LinkedIn"
						title="@ritav-das"
						href="https://www.linkedin.com/in/ritav-das-76422414a/"
						mb={4}
					/>
					<Experience
						side="Email"
						title="@ritavdas"
						href="mailto:ritavdas@gmail.com"
						mb={4}
					/>
				</Box>
			</Box>
		</>
	);
}
