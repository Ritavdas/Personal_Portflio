import { Flex, Image } from "@chakra-ui/react";

export const Header = () => {
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
			<Image src="/logo.svg" alt="logo" />
		</Flex>
	);
};
