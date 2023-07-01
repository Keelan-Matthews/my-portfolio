import React from 'react'
import Button from 'react-bootstrap/Button'
import TextReveal from '../animations/TextReveal'
import { motion } from 'framer-motion/dist/framer-motion'
import { sectionTransition, buttonVariants, button2Variants, descVariants, scrollLineVariants, scrollTextVariants } from '../animations/customVariants'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

export default function RightSide({ visible, title, desc, switchVar, site, slug, initial, ctrls, cta }) {

    const titleArray = title.split(' ');
    const titleArrayLength = titleArray.length;
    const showTwoTitleLines = titleArrayLength > 2;

    const renderTitle = () => {
        if (showTwoTitleLines) {
            return (
                <div>
                    <div className="smaller-text">
                        <TextReveal
                            text={titleArray.slice(0, titleArrayLength - 2).join(' ')}
                            visible={visible}
                            delay={1}
                            showInit={switchVar}
                        />
                    </div>
                    <div className="bigger-text">
                        <TextReveal
                            text={titleArray.slice(titleArrayLength - 2).join(' ')}
                            visible={visible}
                            className="transform-left m-0"
                            delay={1}
                            showInit={switchVar}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="bigger-text">
                    <TextReveal
                        text={title}
                        visible={visible}
                        className="transform-left m-0"
                        delay={1}
                        showInit={switchVar}
                    />
                </div>
            );
        }
    };

    const renderButtonTitle = () => {
        if (site === 'na') {
            return (
                <p>site unavailable</p>
            )
        }
        // else if the website link contains "figma", return view prototype
        else if (site.includes('figma')) {
            return (
                <p>view prototype <span className='show-arrow'><BsArrowRight size={20} /></span></p>
            )
        }
        // else return view site
        else {
            return (
                <p>view site <span className='show-arrow'><BsArrowRight size={20} /></span></p>
            )
        }
    }

    const renderButtons = () => {
        if (site) {
            return (
                <div className="mt-5 d-flex">
                    {/* Case Study Button */}
                    <motion.div
                        variants={buttonVariants}
                        initial={initial}
                        animate={ctrls}
                        transition={{ ...sectionTransition, delay: 0.5 }}
                    >
                        <Link to={`/projects/${slug}`}>
                            <Button variant="outline-secondary" size="lg" className='mt-4'>case study</Button>
                        </Link>
                    </motion.div>

                    {/* View Site Button */}
                    <div className={`overflow-hidden ${site !== 'na' && 'view-site'}`}>
                        <motion.div
                            variants={button2Variants}
                            initial={initial}
                            animate={ctrls}
                            transition={{ ...sectionTransition, delay: 1 }}
                        >
                            <Button
                                href={site !== 'na' && site}
                                target="_blank"
                                size="lg"
                                variant="outline-light text-dark"
                                className="mt-4 site-button"
                            >
                                {renderButtonTitle()}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            );
        } else {
            return (
                // CTA Button for home page
                <Link to={slug}>
                    <motion.div
                        variants={buttonVariants}
                        initial={initial}
                        animate={ctrls}
                        transition={{ ...sectionTransition, delay: 0.5 }}
                    >
                        <Button variant="outline-secondary" size="lg" className='mt-4'>{cta}</Button>
                    </motion.div>
                </Link>
            );
        }
    };

    return (
        <>
            {/* Section Title */}
            <div className={`ps-5 ps-md-0 pt-4 pt-md-0 ${site ? 'project-title' : ''}`}>
                {renderTitle()}

                <motion.p
                    variants={descVariants}
                    initial={initial}
                    animate={ctrls}
                    transition={{ ...sectionTransition, delay: 0.3 }}
                    className={site ? '' : 'description'}
                    style={site ? { maxWidth: '600px' } : ''}
                >
                    {desc}
                </motion.p>

                {renderButtons()}

                <div className={`scroll-down d-flex flex-column align-items-center w-25 ${switchVar ? '' : 'invisible'}`}>
                    <motion.p
                        variants={scrollTextVariants}
                        initial={initial}
                        animate={ctrls}
                        transition={{ ...sectionTransition, delay: 1 }}
                        className="fs-5"
                    >
                        scroll down
                    </motion.p>
                    <motion.div
                        variants={scrollLineVariants}
                        initial={initial}
                        animate={ctrls}
                        transition={{ ...sectionTransition, delay: 1.5 }}
                        className="mt-5 border-start border-2 border-dark"
                    >
                    </motion.div>
                </div>

            </div>
        </>
    )
}
