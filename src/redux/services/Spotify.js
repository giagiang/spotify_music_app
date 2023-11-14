import  {createApi , fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';

export const SpotifyAPI  = createApi({
    reducerPath: 'SpotifyAPI',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-api7.p.rapidapi.com',
        prepareHeaders : (headers) =>{
            headers.set ('X-RapidAPI-Key', 'ed07e2b48fmsh6286e6aa7ac4135p198668jsn26e64248a4ff')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/get-top-songs-in-world'})
    })
}) 
export const {
    useGetTopChartsQuery,
} = SpotifyAPI;
