import { getApolloClient } from '../../apollo/client';
import { gql } from '@apollo/client';

export interface Announcement {
    image: {
        url: any;
    };
    text: string;
    link: string;
}

export interface AnnouncementBlock {
    title: string;
    announcements: Announcement[];
}

export const announcementQuery_test = gql`
    query announcementLink {
        linkAnnouncement(id: "1N5e3pwhAQVhT3XctYjwr4") {
            text
            link
            image {
                url
            }
        }
    }
`;

export const announcementBlockQuery = gql`
    query blockAnnouncement {
        blockAnnouncementsCollection(limit: 1) {
            items {
                title
                linksCollection(limit: 3) {
                    items {
                        image {
                            url
                        }
                        text
                        link
                    }
                }
            }
        }
    }
`;

export const getAnnouncementBlock = async (): Promise<AnnouncementBlock> => {
    const client = getApolloClient({});

    const { data: rawAnnouncements } = await client.query({
        query: announcementBlockQuery,
    });

    const block = rawAnnouncements.blockAnnouncementsCollection.items[0];

    return {
        title: block.title,
        announcements: block.linksCollection.items,
    };
};
