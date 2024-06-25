"use client"
import {ApolloLink, HttpLink} from "@apollo/client";
import {ApolloNextAppProvider, NextSSRApolloClient,  NextSSRInMemoryCache,  SSRMultipartLink} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {

    const httplink = new HttpLink({
        uri:"https://rickandmortyapi.com/graphql"
    })

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: typeof window === "undefined" ? ApolloLink.from([
            new SSRMultipartLink({
                stripDefer: true,
            }),
            httplink,
        ])
        : httplink,
    });
}
export function ApolloWrapper({children}) {
    return (
    <ApolloNextAppProvider makeClient={makeClient}>{children}
    </ApolloNextAppProvider>
);
}