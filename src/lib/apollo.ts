import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u79jl10n5k01ukfghie64b/master',
    cache: new InMemoryCache()
})