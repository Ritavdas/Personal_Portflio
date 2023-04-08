import { Image, Flex } from "@chakra-ui/react";

export const Avatar = () => {
	return (
		<>
			<Flex alignItems="center" justifyContent="center" position="relative">
				<Image
					borderRadius="full"
					width={{ base: "80%", lg: "full" }}
					src="/Pixel.jpg"
					alt="Pixelated image of a ban with a dog"
				/>
			</Flex>
		</>
	);
};
