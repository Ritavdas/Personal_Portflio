import { useState, useEffect } from "react";

const useScroll = () => {
	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		const angle = -20 * (window.scrollY / 100);
		const shouldScroll = window.scrollY > 0;
		setScroll(shouldScroll);
		setRotationAngle(angle);
	};

	const [rotationAngle, setRotationAngle] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return { scroll, rotationAngle };
};

export default useScroll;
