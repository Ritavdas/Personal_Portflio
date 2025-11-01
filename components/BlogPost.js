import { Box, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function BlogPost({ title, excerpt, date, href }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={href}
        isExternal
        _hover={{ textDecoration: "none" }}
        display="block"
      >
        <Box
          p={6}
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          borderRadius="lg"
          bg="whiteAlpha.50"
          transition="all 0.3s ease"
          _hover={{
            borderColor: "purple.500",
            bg: "whiteAlpha.100",
            shadow: "lg",
          }}
        >
          {/* Date */}
          <Text
            fontSize="sm"
            color="whiteAlpha.500"
            mb={2}
            textTransform="uppercase"
            letterSpacing="wide"
          >
            {date}
          </Text>

          {/* Title */}
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="whiteAlpha.900"
            mb={3}
            lineHeight="1.4"
          >
            {title}
          </Text>

          {/* Excerpt with CSS line-clamp */}
          <Text
            fontSize="md"
            color="whiteAlpha.700"
            lineHeight="1.6"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {excerpt}
          </Text>

          {/* Read more indicator */}
          <Text
            fontSize="sm"
            color="purple.400"
            mt={3}
            display="inline-flex"
            alignItems="center"
            transition="all 0.2s"
            _groupHover={{ color: "purple.300" }}
          >
            Read more →
          </Text>
        </Box>
      </Link>
    </MotionBox>
  );
}
