import React, { FC } from 'react';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import WelcomeContainer from '../containers/welcome';
import { css } from 'styled-components/macro';
import AnnouncementContainer from '../containers/announcement';
import FooterContainer from '../containers/footer';
import { useAnnouncementBlock } from '../services/announcement.services';
import { useWelcomeBlock } from '../services/welcome.services';

const styles = {
    intro: css`
        margin-bottom: 250px;
    `,
    announcements: css`
        margin-bottom: 450px;
    `,
};

const Home: FC = () => {
    const welcomeBlock = useWelcomeBlock();
    const announcementBlock = useAnnouncementBlock();

    return (
        <ThemeContext theme={primaryTheme}>
            <WelcomeContainer css={styles.intro} {...welcomeBlock} />
            <AnnouncementContainer
                css={styles.announcements}
                {...announcementBlock}
            />
            <FooterContainer />
        </ThemeContext>
    );
};

export default Home;