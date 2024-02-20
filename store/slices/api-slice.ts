import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'qs';

const JOB_ROOT_URL = 'http://api.indeed.com/';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: JOB_ROOT_URL }),
	endpoints: (builder) => ({
		getJobs: builder.query({
			query: (params) => `ads/apisearch?${params}`,
		}),
	}),
});

export default apiSlice;
export const { useGetJobsQuery } = apiSlice;
