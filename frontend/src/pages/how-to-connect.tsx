import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import IntroContainer from '../containers/intro';
import UpcomingEventsContainer from '../containers/upcomingEvents';
import ConnectionGroupContainer from '../containers/connectionGroup';
import MinistryConnectionContainer from '../containers/ministryConnection';
import { useHowToConnectBlock } from '../services/howToConnect.services';
import { useUpcomingEventBlock } from '../services/upcomingEvent.services';
import { useConnectionGroupBlock } from '../services/connectionGroup.services';
import { useMinistryConnectionBlock } from '../services/ministryConnection.services';
import Page from '../components/page';
import SeoComponent from '../components/seo';
import { useTitleScoller } from '../helpers/scroll';

const styles = {
    intro: css`
        margin-bottom: 150px;
    `,
    upcomingEvents: css`
        margin-bottom: 0;
    `,
    connectionGroup: css`
        margin-bottom: 250px;
    `,
    ministryConnections: css`
        margin-bottom: 250px;
    `,
};

const HowToConnect: FC = () => {
    const howToConnectBlock = useHowToConnectBlock();
    const upcomingEventBlock = useUpcomingEventBlock();
    const connectionGroupBlock = useConnectionGroupBlock();
    const ministryConnectionsBlock = useMinistryConnectionBlock();
    useTitleScoller();

    return (
        <Page>
            <SeoComponent
                title={howToConnectBlock.title}
                isTitleTemplated={true}
                description={howToConnectBlock.body}
                image={'/howToConnect.png'}
            />
            <IntroContainer
                type={'HowToConnect'}
                introBlock={howToConnectBlock}
                css={styles.intro}
            />
            <UpcomingEventsContainer
                upcomingEventBlock={upcomingEventBlock}
                css={styles.upcomingEvents}
            />
            <ConnectionGroupContainer
                connectionGroupBlock={connectionGroupBlock}
                css={styles.connectionGroup}
            />

            <MinistryConnectionContainer
                ministryConnectionBlock={ministryConnectionsBlock}
                css={styles.ministryConnections}
            />
        </Page>
    );
};

export default HowToConnect;
