import { useSelector } from 'react-redux';

export const useCount = () => {
    return useSelector(({ counterReducer }) => counterReducer?.count);
}