import { graphql, useStaticQuery } from 'gatsby';
import { ConnectionGroupBlock } from '../models/connectionGroup';

export const useConnectionGroupBlock = (): ConnectionGroupBlock => {
    const raw = useStaticQuery(graphql`
        query blockConnectionGroups {
            allContentfulBlockConnectionGroups(limit: 1) {
                nodes {
                    title
                    description {
                        description
                    }

                    items {
                        leaders
                        description {
                            description
                        }
                        gender
                        dateTime
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockConnectionGroups.nodes[0];

    return {
        ...block,
        description: block.description.description,
        groups: block.items.map((i: any) => ({
            ...i,
            description: i.description.description,
        })),
    };
};
