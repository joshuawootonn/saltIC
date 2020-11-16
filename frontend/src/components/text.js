import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components/macro';

const styles = {
    phantom: css`
        opacity: 0;
    `,
    normal: css`
        position: absolute;
    `,
};

const Root = styled.div`
    overflow: hidden;
    position: relative;
`;

const P = styled(motion.p)``;

const Span = styled(motion.span)`
    display: inline-block;
    overflow: hidden;

    div {
        display: inline-block;
        overflow: hidden;
        transform-origin: left;
    }
`;

const animationProps = {
    initial: { opacity: 0, y: 50 },
    variants: {
        entered: { y: 0, opacity: 1 },
        exited: { y: 50, opacity: 0 },
    },
    transition: { type: 'spring', duration: 1, bounce: 0 },
};

const Text = (props) => {
    const Component = props.elementType === 'paragraph' ? P : Span;
    return (
        <Root>
            <Component {...animationProps} {...props}>
                {props.children}
            </Component>
        </Root>
    );
};

export default Text;
