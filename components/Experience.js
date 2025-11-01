import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";

export const Experience = ({ side, title, desc, stack, image, href, mb }) => (
	<div className={`grid grid-cols-4 gap-4 mb-${mb}`}>
		<div className="col-span-4 md:col-span-1">
			<p className="text-white opacity-50">{side}</p>
		</div>
		<div className="col-span-4 md:col-span-3">
			{image && <img className="w-9 h-9 mb-4" src={image} alt={title} />}
			<h3 className="text-lg font-bold flex items-center">
				{href ? (
					<a href={href} className="text-gray-300 flex" target="_blank">
						{title}
						<img
							className="ml-2 transform -translate-y-px"
							src="/arrow-link.svg"
							alt={`link to ${title}`}
						/>
					</a>
				) : (
					title
				)}
			</h3>
			{desc && (
				<ul className="my-2">
					{desc.map((item, index) => (
						<li key={index} className="list-disc">
							{item}
						</li>
					))}
				</ul>
			)}
			{stack && (
				<Text color="white" opacity={0.5}>
					{stack}
				</Text>
			)}{" "}
		</div>
	</div>
);

Experience.propTypes = {
	side: PropTypes.string,
	title: PropTypes.string.isRequired,
	desc: PropTypes.arrayOf(PropTypes.string),
	stack: PropTypes.string,
	image: PropTypes.string,
	href: PropTypes.string,
};
