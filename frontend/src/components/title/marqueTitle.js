import React, { useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import typography from '../typography';
import slugify from '../../helpers/slugify';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import { queryShit } from '../useScreenType';
import { handleTitleElementClick } from '../../helpers/scroll';

const BannerRoot = styled(Element)`
    width: 100vw;

    ${queryShit({
        mobile: css`
            height: 90px;
        `,
        tablet: css`
            height: 100px;
        `,
        desktop: css`
            height: 120px;
        `,
    })}
`;

const H2 = styled(motion.h2)`
    ${typography.title2};
    cursor: pointer;
    transform-origin: left;
    z-index: 100;
    margin: 0 auto;
    white-space: nowrap;
    position: absolute;
    span {
        ${typography.title2};
        display: inline-block;
        padding-left: 30px;

        ${queryShit({
            mobile: css`
                font-size: 45px;
            `,
        })}
    }
`;

const headerAnimationProps = {
    initial: { x: '0%' },
    variants: {
        entered: { x: ['0%', '-100%'] },
        exited: { x: '0%' },
    },
    transition: {
        bounce: 0,
        repeat: Infinity,
        duration: 30,
        ease: 'linear',
    },
};

const animationProps = {
    initial: { opacity: 0 },
    variants: {
        entered: { opacity: 1 },
        exited: { opacity: 0 },
    },
    transition: {
        type: 'spring',
        duration: 1,
        bounce: 0,
    },
};

const MarqueTitle = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    // Note due to the animation and possible absolute positioned elements this is not 1.0 threshold
    const { isVisible } = useIntersect(ref, { threshold: 0.6 });

    return (
        <BannerRoot
            name={`#${slugify(props.children)}`}
            onClick={() => handleTitleElementClick(props.children)}
        >
            <div ref={ref}>
                <H2
                    animate={toVariant(isLoaded && isVisible)}
                    {...animationProps}
                    {...props}
                >
                    <motion.span {...headerAnimationProps}>
                        {new Array(4).fill(props.children).map((c, i) => (
                            <React.Fragment key={i}>{c + ' '}</React.Fragment>
                        ))}
                    </motion.span>
                </H2>
                <H2
                    animate={toVariant(isLoaded && isVisible)}
                    {...animationProps}
                    {...props}
                >
                    <motion.span
                        css={css`
                            margin-left: 100%;
                        `}
                        {...headerAnimationProps}
                    >
                        {new Array(4).fill(props.children).map((c, i) => (
                            <React.Fragment key={i}>{c + ' '}</React.Fragment>
                        ))}
                    </motion.span>
                </H2>
            </div>
        </BannerRoot>
    );
};

export default MarqueTitle;
