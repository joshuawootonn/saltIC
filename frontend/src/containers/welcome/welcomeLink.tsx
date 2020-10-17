import React, { FC } from 'react';
import typography from '../../components/typography';
import { css } from 'styled-components/macro';
import TextLink from '../../components/textLink';

const styles = {
    root: css`
        max-width: 750px;
        display: flex;
        flex-direction: column;
    `,
    text: css`
        ${typography.bigText};
        border-bottom: 2px solid ${({ theme }) => theme.colors.purple.lightest};
        padding-bottom: 10px;
    `,
    button: css`
        transform: translateY(-2px);
        justify-self: flex-end;
        align-self: flex-end;
    `,
};

export interface TextButtonProps {
    text: string;
    label: string;
    to: string;
}

const WelcomeLink: FC<TextButtonProps> = ({ text, label, ...props }) => (
    <div css={styles.root}>
        <p css={styles.text}>{text}</p>

        <TextLink destinationType={'internal'} css={styles.button} {...props}>
            {label}
        </TextLink>
    </div>
);

export default WelcomeLink;
