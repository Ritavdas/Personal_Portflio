import { Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export const Avatar = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" position="relative">
        <MotionImage
          borderRadius="full"
          width={{ base: "80%", lg: "full" }}
          src="/Pixel.jpg"
          alt="Pixelated image of a ban with a dog"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          cursor="pointer"
        />
      </Flex>
    </>
  );
};
