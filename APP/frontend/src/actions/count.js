import { INCREASE, DECREASE } from '../constants';

export const increase = (n) => ({
    type: INCREASE,
    amount: n,
});

export const decrease = (n) => ({
    type: DECREASE,
    amount: n,
});
