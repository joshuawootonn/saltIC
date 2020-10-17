import React, { FC, useEffect, useState } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import axios from 'axios';
import { css } from 'styled-components';

const useBlockData = (domain: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const baseUrl =
        process.env.NODE_ENV === 'production'
            ? 'https://salt-co-iowa-city.vercel.app/api'
            : `http://localhost:3000/api`;

    useEffect(() => {
        axios
            .get(`${baseUrl}/${domain}?isPreview=true`)
            .then((result) => setData(result.data))
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, []);

    return { loading, error, data };
};

const style = css`
    color: white;
    font-size: 50px;
    font-family: 'MonumentExtended', Arial, sans-serif;
`;

export const QueryStory: FC<{
    query: DocumentNode;
    component: any;
}> = ({ query, component: Component }) => {
    console.log(typeof query);

    const { data, loading, error } = useQuery(query);

    if (loading) return <p css={style}>...Loading</p>;
    if (error) return <p css={style}>Error</p>;

    return <Component {...data} />;
};

export const BlockStory: FC<{
    domain: string;
    component: any;
}> = ({ domain, component: Component }) => {
    const { data, loading, error } = useBlockData(domain);

    if (loading) return <p css={style}>...Loading</p>;
    if (error) return <p css={style}>Error</p>;

    return <Component {...data} />;
};