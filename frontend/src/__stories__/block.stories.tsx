import React from 'react';
import { ServiceStory } from '../helpers/story';
import { storiesOf } from '@storybook/react';
import WelcomeContainer from '../containers/welcome';
import AnnouncementContainer from '../containers/announcement';
import { getWelcomeBlock } from './services/welcome.services';
import { getAnnouncementBlock } from './services/announcements.services';
import { getWhoWeAreBlock } from './services/whoWeAre.services';
import IntroContainer from '../containers/intro';
import WhoWeAreSvg from '../svgs/whoWeAre.svg';
import { getStaffBlock } from './services/staff.services';
import ConnectionGroupContainer from '../containers/connectionGroup';
import { getConnectionGroupBlock } from './services/connectionGroup.service';
import { getContactBlock } from './services/contact.service';
import { getHowToConnectBlock } from './services/howToConnect.services';
import ContactContainer from '../containers/contact';
import HowToConnectSvg from '../svgs/howToConnect.svg';
import MinistryConnectionContainer from '../containers/ministryConnection';
import MinistryDescriptionContainer from '../containers/ministryDescription';
import StaffContainer from '../containers/staff';
import UpcomingEventsContainer from '../containers/upcomingEvents';
import { getMinistryConnectionsBlock } from './services/ministryConnection.service';
import { getMinistryDescriptionBlock } from './services/ministryDescription.service';
import { getUpcomingEventsBlock } from './services/upcomingEvent.service';

storiesOf('Block', module)
    .add('Announcements', () => (
        <ServiceStory
            service={getAnnouncementBlock}
            component={AnnouncementContainer}
        />
    ))
    .add('Connection Groups', () => (
        <ServiceStory
            service={getConnectionGroupBlock}
            component={ConnectionGroupContainer}
        />
    ))
    .add('Contact', () => (
        <ServiceStory service={getContactBlock} component={ContactContainer} />
    ))
    .add('How To Connect', () => (
        <ServiceStory
            service={getHowToConnectBlock}
            component={(props: any) => (
                <IntroContainer {...props}>
                    <HowToConnectSvg />
                </IntroContainer>
            )}
        />
    ))
    .add('Ministry Connections', () => (
        <ServiceStory
            service={getMinistryConnectionsBlock}
            component={MinistryConnectionContainer}
        />
    ))
    .add('Ministry Descriptions', () => (
        <ServiceStory
            service={getMinistryDescriptionBlock}
            component={MinistryDescriptionContainer}
        />
    ))
    .add('Staff', () => (
        <ServiceStory service={getStaffBlock} component={StaffContainer} />
    ))
    .add('Upcoming Events', () => (
        <ServiceStory
            service={getUpcomingEventsBlock}
            component={UpcomingEventsContainer}
        />
    ))
    .add('Welcome', () => (
        <ServiceStory service={getWelcomeBlock} component={WelcomeContainer} />
    ))
    .add('Who We Are', () => (
        <ServiceStory
            service={getWhoWeAreBlock}
            component={(props: any) => (
                <IntroContainer {...props}>
                    <WhoWeAreSvg />
                </IntroContainer>
            )}
        />
    ));