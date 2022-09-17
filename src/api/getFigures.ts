import legoApi from "./legoApi";
import { legoApiTags } from "../constants/constants";
import { FigureParts, MiniFigure } from "../types";

const { GET_FIGURE, GET_FIGURE_PARTS } = legoApiTags;

const headers = new Headers({
    Authorization: `key ${process.env.REACT_APP_API_KEY}`
});

const figures = legoApi.injectEndpoints({
    endpoints: (builder) => ({
        getFigure: builder.query<MiniFigure, string>({
            query: (id) => ({
                url: `minifigs/fig-${id}/`,
                headers
            }),
            providesTags: GET_FIGURE
        }),
        getFigureParts: builder.query<FigureParts, string>({
            query: (id) => ({
                url: `minifigs/fig-${id}/parts/`,
                headers
            }),
            providesTags: GET_FIGURE_PARTS
        })
    })
});

export const { useGetFigureQuery, useGetFigurePartsQuery } = figures;
