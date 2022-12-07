import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion/dist/framer-motion"
import styled from "styled-components"


const Title = styled.h2`

`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const CharacterContainer = styled(motion.span)`
    display: inline-block;
    overflow: hidden;
    margin-right: -0.02em;
`;

const Character = styled(motion.span)`
  display: inline-block;
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
            x: `-0.95em`,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: props.delay
            },
        },
        visible: {
            x: `0em`,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: props.delay
            },
        },
    };


    return (
        <Title aria-label={text} role="heading">
            {text.split(" ").map((word, index) => {
                return (
                    <Word
                        className="section-title"
                        aria-hidden="true"
                        key={index}
                        initial={props.showInit === true ? "visible" : "hidden"}
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            staggerChildren: 0.02,
                        }}
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <CharacterContainer key={index}>
                                    <Character
                                        aria-hidden="true"
                                        key={index}
                                        variants={characterAnimation}
                                    >
                                        {character}
                                    </Character>
                                </CharacterContainer>
                            );
                        })}
                    </Word>
                );
            })}
        </Title>
    )
}
