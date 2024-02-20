import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Region } from 'react-native-maps';

type Job = {
	title: string;
};

type JobState = {
	jobs: Job[];
};

const initialState: JobState = {
	jobs: [],
};

export const jobSlice = createSlice({
	name: 'job-slice',
	initialState,
	reducers: {
		storeJobs(state, action: PayloadAction<Region>) {
			// axios get jobs
			// store result in state
			state.jobs.push({
				title: 'React dev',
			});
		},
	},
});

export default jobSlice;
export const { storeJobs } = jobSlice.actions;
