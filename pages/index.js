import { Box, Text, Heading, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import { Grid } from "../components/Grid";
import { Experience } from "../components/Experience";
import { Avatar } from "../components/Avatar";
import useWindowWidth from "../hooks/Width";
export default function Home() {
	const width = useWindowWidth();
	let introductory_text = `
	GM, I'm Ritav. I enjoy building dynamic, creative products from
	start to finish. Aim to approach every problem with a fresh, out-of-the-box perspective. 
	Hoping to get good at Muay Thai this year , wish me luck.
	`;

	let Work_Experiences = [
		{
			href: "https://thouc-labs.ai/",
			side: "July 2022 - Present",
			title: "FullStack Developer - Thoucentric Labs",
			desc: [
				`Made various features involving frontend, backend, and data science aspects, including UI/UX design, data transformation, data analysis, charting, and more using Next.js and Django.`,
				`Worked on enrichment, processing, cleaning, filtering, of user data using Pandas.`,
				`Worked on integration of Keycloak for central authentication, involving frontend and token processing using Next.js.`,
				`Implemented config-based subscriptions using the Django admin panel.`,
			],
			stack: "Next • Django • Tailwind • Postgres • Redis • Pytest",
		},
		{
			href: "https://thoucentric.com/",
			side: "January 2022 - June 2022",
			title: "FullStack Developer Intern - Thoucentric",
			desc: [
				`Improved product features, optimized code, and streamlined processes to enhance user engagement and operational efficiency.`,
				`Utilized responsive web design and UI to create a seamless user experience.`,
				`Built a secure and scalable application using Django, Bootstrap, and Plotly, with expertise in fetching data using an API and storing it on MongoDB Atlas.`,
				`Worked Mahindra project leveraging Next and JS Django.`,
			],
			stack: "Next • Django • Tailwind • CSS • Plotly",
		},
		{
			href: "https://lightcast.io/",
			side: "May 2021 - July 2021",
			title: "Testing Intern - Lightcast",
			desc: [
				`Executed 30 test cases, ensuring that all scenarios were covered and the software was of high quality.`,
				`Debugged and ran tests to ensure proper functionality.`,
				`Wrote test scripts on C# using Selenium for development purposes.`,
				`Closed 28 bug tickets, ensuring that all issues were tracked and resolved.`,
			],
			stack: "C# • Selenium • JIRA • Git",
		},
	];

	let side_projects = [
		{
			image: "/netflix.png",
			side: "2023",
			title: "Netflix Clone",
			href: "https://github.com/Ritavdas/Netflix_Clone",
			desc: [
				"This project aims to replicate Netflix's core features and uses.",
				"The frontend and backend both are managed by Next",
			],
			stack: "Next • Tailwind • Mongo • Prisma",
		},
		{
			image: "/nextauth.png",
			side: "2023",
			title: "Next Auth",
			href: "https://github.com/Ritavdas/NextJS-Auth",
			desc: [
				"A Next.js project that demonstrates the implementation of Google, GitHub, and custom credential login using the NextAuth library",
				"Has a pretty clean and responsive UI",
			],
			stack: "Next • NextAuth • Mongo • Tailwind",
		},
	];

	return (
		<>
			<Head>
				<title>Ritav Das - FullStack Developer</title>
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
							<Text>Fullstack Developer</Text>
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
						side="Blogs"
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
						side="Twitter"
						title="@dasritav"
						href="https://twitter.com/dasritav"
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
