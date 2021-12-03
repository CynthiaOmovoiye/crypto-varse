import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3519b1bd0amsh79524958793a668p131d6cjsn5f72894adeed'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest =(url)=>({
    url,headers:cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
     baseUrl   
    }),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: () =>createRequest("/coins")
        })
    })
})
export const {useGetCryptosQuery} = cryptoApi