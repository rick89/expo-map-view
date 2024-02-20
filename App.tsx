import { View } from 'react-native';
import { MapViewScreen } from './screens/map-screen';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<View style={{ flex: 1 }}>
					<MapViewScreen />
				</View>
			</PersistGate>
		</Provider>
	);
}
