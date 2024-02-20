import { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from '../components/button';
import { useJobDispatch, useJobSelector } from '../store/hooks';
import fetchJobs from '../store/slices/job-slice';
import reverseGeocode from 'latlng-to-zip';
import { useGetJobsQuery } from '../store/slices/api-slice';
import qs from 'qs';

type MapScreenProps = {};

export type Region = {
	longitude: number;
	latitude: number;
	longitudeDelta: number;
	latitudeDelta: number;
};

export const MapViewScreen = ({}: MapScreenProps) => {
	const dispatch = useJobDispatch();
	// const jobs = useJobSelector((state) => state.jobs);
	let [region, setRegion] = useState<Region>({
		longitude: -122,
		latitude: 37,
		longitudeDelta: 0.04,
		latitudeDelta: 0.09,
	});

	const JOB_QUERY_PARAMS = {
		publisher: '4201738803816157',
		format: 'json',
		v: '2',
		latlong: 1,
		radius: 10,
		q: 'rect',
	};

	const postcode = reverseGeocode(region);

	const { data: jobData } = useGetJobsQuery(
		qs.stringify({ ...JOB_QUERY_PARAMS, l: postcode })
	);
	console.log('jobs data', jobData);

	const onRegionChangeComplete = (region: Region) => {
		setRegion(region);
	};

	const handleOnPress = () => {
		// console.log('jobs', jobs);
	};

	return (
		<View style={{ flex: 1 }}>
			<MapView
				onRegionChangeComplete={onRegionChangeComplete}
				region={region}
				style={{ flex: 1 }}
			/>
			<Button onPress={handleOnPress} title='Search' />
		</View>
	);
};
