import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL, legoApiTags } from "../constants/constants";

const { GET_FIGURE, GET_FIGURE_PARTS } = legoApiTags;

const legoApi = createApi({
    reducerPath: "legoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    tagTypes: [...GET_FIGURE, ...GET_FIGURE_PARTS],
    endpoints: () => ({})
});

export default legoApi;
