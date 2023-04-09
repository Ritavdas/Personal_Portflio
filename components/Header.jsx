import { Flex, Image } from "@chakra-ui/react";
import useWindowWidth from "../hooks/Width";
import useScroll from "../hooks/Scroll";

export const Header = () => {
	const width = useWindowWidth();
	const { scroll, rotationAngle } = useScroll();

	if (width < 650) return;
	return (
		<Flex
			position="fixed"
			top={0}
			width="full"
			p={4}
			as="header"
			alignItems="center"
			justifyContent="space-between"
		>
			<Image
				src="/logo.svg"
				alt="logo"
				className={`w-12 h-12 ${scroll ? "rotate scroll" : ""}`}
				style={{ transform: `rotate(${rotationAngle}deg)` }}
			/>
		</Flex>
	);
};
