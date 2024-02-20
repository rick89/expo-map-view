import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from 'react-redux';
import { type AppDispatch, RootState } from '../store/store';

type DispatchFunction = () => AppDispatch;

export const useJobDispatch: DispatchFunction = useDispatch;
export const useJobSelector: TypedUseSelectorHook<RootState> = useSelector;
