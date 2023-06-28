// =============================== TRANSITIONS ===============================
const easeVar = [0.43, 0.13, 0.23, 0.96]
export const aboutTransition = { duration: 0.5, ease: easeVar }
export const skillsTransition = { duration: 1, ease: easeVar }
export const contactTransition = { duration: 1.5, ease: easeVar }
export const heroTransition = { duration: 0.6, ease: easeVar }
export const navbarTransition = { duration: 0.7, ease: easeVar }
export const sectionTransition = { duration: 1, ease: easeVar }
export const sideColumnTransition = { duration: 1, ease: easeVar }

// ========================== ABOUT SECTION VARIANTS ==========================
export const headingLineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: 140, opacity: 1 }
}

export const aboutTextVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
}

export const portraitImageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
}

export const paragraphLineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 330, opacity: 1 }
}

export const skillVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
}

export const groupVariants = {
	hidden: {},
	visible: {},
};

// ========================== HOME SECTION VARIANTS ==========================
export const controlVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: { opacity: 1, width: "100%" }
}

// export const buttonVariants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0 }
// }

export const homeJapaneseVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 100 }
}

export const sloganVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

export const cvVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

export const paintingVariants = {
    hidden: { left: '1000px', opacity: 0.4 },
    visible: { left: '30%' }
}

export const statueVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
}

export const homeCircleVariants = {
    hidden: { opacity: 0, y: 100, left: '12%', top: '25%' },
    visible: { opacity: 1, y: 0 }
}

// ========================== NAVIGATION BAR VARIANTS ==========================
export const navVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
}

export const navLineVariants = {
    notActive: { width: 30 },
    active: { width: 60 }
}

// ========================== GENERAL SECTION VARIANTS ==========================
export const imageVariants = {
    hidden: { height: '10%', width: '100%', scale: 1 },
    visible: { height: '100%', width: '100%', scale: 1.08 },
    switch: { width: '100%', height: '100%', scale: 1.08 }
}

export const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    switch: { scaleY: 0 }
}

export const button2Variants = {
    hidden: { x: -200, opacity: 1 },
    visible: { x: 0, opacity: 1 },
    switch: { y: -20, opacity: 0 }
}

export const descVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    switch: { opacity: 0, y: -10 }
}

export const sectionJapaneseVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    switch: { opacity: 1, y: 0 }
}

const sectionCircleVariants = {
    hidden: { left: '22%', bottom: '60%', opacity: 0 },
    visible: { left: '22%', bottom: '5%', opacity: 1 },
    switch: { left: '5%', bottom: '5%' }
}

const circleVariantsMobile = {
    hidden: { left: '12%', bottom: '60%', opacity: 0 },
    visible: { left: '12%', bottom: '5%', opacity: 1 },
    switch: { left: '5%', bottom: '5%' }
}

export const circleArray1 = [sectionCircleVariants, circleVariantsMobile]

const sectionCircleVariants2 = {
    hidden: { right: '-5%', bottom: '60%', opacity: 0 },
    visible: { right: '-5%', bottom: '-5%', opacity: 1 },
    switch: { right: '-5%', bottom: '-1%' }
}

const circleVariants2Mobile = {
    hidden: { right: '5%', bottom: '60%', opacity: 0 },
    visible: { right: '5%', bottom: '-5%', opacity: 1 },
    switch: { right: '5%', bottom: '-1%' }
}

export const circleArray2 = [sectionCircleVariants2, circleVariants2Mobile]

export const scrollTextVariants = {
    visible: { opacity: 0, y: -30, width: 130, rotate: 90 },
    switch: { opacity: 1, y: 0, rotate: 90 }
}

export const scrollLineVariants = {
    visible: { height: 0 },
    switch: { height: 300 }
}

// ========================== SIDE COLUMN VARIANTS ==========================
export const sideColumnLineVariants = {
    visible: { height: '170px' },
    hidden: { height: 0 }
}

export const sideColumnTextVariants = {
    visible: { opacity: 1, rotate: 90, y: 0 },
    hidden: { opacity: 0, rotate: 90, y: -30 }
}

export const socialVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 }
}

export const pageVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 }
}

export const mailVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
}