import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { StaffBlock } from '../../models/staff';

export const staffBlockQuery = gql`
    query blockStaff {
        blockStaffCollection(limit: 1) {
            items {
                title
                itemsCollection {
                    items {
                        firstName
                        lastName
                        email
                        position
                        about
                        connectionLinkText
                        image {
                            url
                        }
                    }
                }
            }
        }
    }
`;

export const getStaffBlock = async (): Promise<StaffBlock> => {
    const client = getApolloClient({});

    const { data: rawStaffResult } = await client.query({
        query: staffBlockQuery,
    });

    const rawStaffBlock = rawStaffResult.blockStaffCollection.items[0];

    return {
        title: rawStaffBlock.title,
        staff: rawStaffBlock.itemsCollection.items,
    };
};
