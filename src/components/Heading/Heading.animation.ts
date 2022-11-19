import { Variants } from "framer-motion";

const LAYOUT_DURATION = 1;
const HEADER_DURATION = 0.6;
const DELAY = 1;

export const headerAnim: Variants = {
	initial: (initial: boolean) => {
		if (initial) {
			return ({
				width: "100%",
				rotate: 0,
			});
		}
		
		return ({
			width: 0,
			rotate: -2,
		});
	},
	animate: (initial: boolean) => {
		if (initial) {
			return ({
				width: ["100%", "0%", "100%"],
				rotate: -2,
				transition: {
					type: "keyframes",
					delay: DELAY + LAYOUT_DURATION,
					delayChildren: (DELAY + LAYOUT_DURATION) + (HEADER_DURATION / 2),
					duration: HEADER_DURATION,
				}
			});
		}

		return ({
			width: "100%",
			transition: {
				type: "tween",
				ease: "anticipate",
				delayChildren: HEADER_DURATION / 2,
				duration: HEADER_DURATION,
			}
		});
	},
	exit: {
		width: 0,
		opacity: 0,
		transition: {
			default: {
				type: "tween",
				ease: "anticipate",
				duration: HEADER_DURATION,
			},
			opacity: {
				delay: 0.2,
			},
		}
	},
};
 
export const textAnim: Variants = {
	initial: {
		scale: 1.8,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			opacity: {
				duration: 0.3,
			},
			default: {
				type: "spring",
				bounce: 0.4,
				duration: 1,
			}
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: HEADER_DURATION,
		}
	},
};

export const layoutTransition = {
	type: "tween",
	ease: "anticipate",
	delay: DELAY,
	duration: LAYOUT_DURATION,
}