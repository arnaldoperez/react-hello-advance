import { useReducer } from 'react';
import { reducer } from '../actions';

export const useGlobalState = (defaultStoreValue) => {
    const [store, dispatch] = useReducer(reducer, defaultStoreValue);
    return { store , dispatch };
};

