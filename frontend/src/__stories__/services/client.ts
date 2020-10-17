import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const DELIVERY_TOKEN = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const CDA = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;
const uri = `https://localhost:8000/____graphql`;

const env = process.env.NODE_ENV;

export const isProduction = env === 'production';

const createLink = createHttpLink({
    fetch,
    uri: CDA,
    headers: {
        authorization: `Bearer ${PREVIEW_TOKEN}`,
        'Content-Language': 'en-us',
    },
});

export const getApolloClient = ({ initialState }: any) =>
    new ApolloClient({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        link: createLink,
        cache: new InMemoryCache(initialState || {}),
    });