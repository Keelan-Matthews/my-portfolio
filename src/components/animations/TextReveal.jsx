import React, { useEffect } from 'react'
import {useAnimation, motion} from "framer-motion/dist/framer-motion"
import styled from "styled-components"


const Title = styled.h2`
  font-size: 7rem;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function TextReveal(props) {
    const ctrls = useAnimation();
    const text = props.text;
    const isVisible = props.visible;

    useEffect(() => {
        if (isVisible)
            ctrls.start("visible")
        else
            ctrls.start("hidden")
    }, [isVisible]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            x: `-0.25em`,
        },
        visible: {
            opacity: 1,
            x: `0em`,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };


    return (
        <Title aria-label={text} role="heading">
            {text.split(" ").map((word, index) => {
                return (
                    <Word
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <Character
                                    aria-hidden="true"
                                    key={index}
                                    variants={characterAnimation}
                                >
                                    {character}
                                </Character>
                            );
                        })}
                    </Word>
                );
            })}
        </Title>
    )
}
