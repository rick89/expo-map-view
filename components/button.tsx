import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
	title: string;
	onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				paddingVertical: 10,
				paddingHorizontal: 20,
				backgroundColor: 'blue',
			}}
		>
			<Text
				style={{
					fontSize: 20,
					color: 'white',
					textAlign: 'center',
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};
