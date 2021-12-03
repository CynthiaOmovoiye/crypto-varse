import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsApiHeaders ={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '3519b1bd0amsh79524958793a668p131d6cjsn5f72894adeed'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest =(url)=>({
    url,headers:cryptoNewsApiHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
     baseUrl   
    }),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) =>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi