import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import typography from '../../components/typography';
import ImageControl from '../../components/imageControl';
import CardLink from '../../components/cardLink';
import GatsbyBackgroundImage from 'gatsby-background-image';
import World from '../../svgs/world.svg';
import Flag from '../../svgs/flag.svg';
import { MinistryConnection } from '../../models/ministryConnection';
import Title from '../../components/title';

export type MinistryConnectionBackgroundImage = 'World' | 'Flag';

const styles = {
    root: css`
        ${layout.container};
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    title: css`
        ${typography.title2};
        margin-bottom: 40px;
    `,

    columns: css`
        justify-self: center;
        position: relative;
        display: flex;
        flex-direction: row;
    `,
    imageContainer: css`
        position: relative;
        width: 500px;

        margin-right: 25px;
    `,

    image: css`
        transform: translateX(-170px);
        width: 670px;
        height: 450px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `,
    imageControl: css`
        position: absolute;
        bottom: 50px;
        right: -100px;
        z-index: 10;
    `,
    textContainer: css`
        margin-left: 25px;
        display: table;
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        width: 500px;
    `,

    textBlock1: css`
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
    `,
    textBlock2: css`
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    `,
    backgroundImage: css`
        position: absolute;
        height: 100%;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    `,
};

const MinistryConnectionCard: FC<MinistryConnection> = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <div css={styles.root}>
            {
                // TODO: this sucks, but I can't track the error at all :/
                // Make it a dict of components if you can
                props.backgroundImage === 'Flag' ? (
                    <Flag css={styles.backgroundImage} />
                ) : (
                    <World css={styles.backgroundImage} />
                )
            }
            <div>
                <Title variant="small" css={styles.title}>
                    {props.acronym || props.title}
                </Title>
                <div css={styles.columns}>
                    <div css={styles.imageContainer}>
                        <GatsbyBackgroundImage
                            fluid={props.images[currentImage].fluid}
                            css={styles.image}
                        >
                            <ImageControl
                                current={currentImage}
                                images={props.images}
                                handleChange={setCurrentImage}
                                css={styles.imageControl}
                            />
                        </GatsbyBackgroundImage>
                    </div>

                    <div css={styles.textContainer}>
                        <div css={styles.textBlock1}>
                            <h4 css={typography.card.title}>{props.title}</h4>
                            <p css={typography.card.text}>
                                {props.description}
                            </p>
                        </div>
                        <div css={styles.textBlock2}>
                            <CardLink to={'/contact'}>
                                {props.link.text}
                            </CardLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinistryConnectionCard;
