import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client'

// const defaultOptions: DefaultOptions

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u79jl10n5k01ukfghie64b/master',
    cache: new InMemoryCache(),
    // defaultOptions: defaultOptions
})