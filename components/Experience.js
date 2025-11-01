import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Experience = ({ side, title, desc, stack, image, href, mb }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`grid grid-cols-4 gap-4 mb-${mb ? mb : 10} transition-all duration-300 hover:translate-y-[-2px]`}
    >
      <div className="col-span-4 md:col-span-1">
        <p className="text-white opacity-50">{side}</p>
      </div>
      <div className="col-span-4 md:col-span-3">
        {image && <img className="w-9 h-9 mb-4" src={image} alt={title} />}
        <h3 className="text-lg font-bold flex items-center mb-3">
          {href ? (
            <a
              href={href}
              className="text-gray-200 flex items-center group hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
              <img
                className="ml-2 transform -translate-y-px group-hover:translate-x-1 transition-transform duration-200"
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
              <li
                key={index}
                className="list-disc"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        )}
        {stack && (
          <Text color="white" opacity={0.5}>
            {stack}
          </Text>
        )}{" "}
      </div>
    </motion.div>
  );
};

Experience.propTypes = {
  side: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string),
  stack: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
};
