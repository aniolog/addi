import { calculateRandomWithinRange } from '../Utils';
import { ADDI_LOWER_SCORE, ADDI_MAX_SCORE } from '../Constants';

export const getUserScore = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                score: calculateRandomWithinRange(ADDI_LOWER_SCORE, ADDI_MAX_SCORE) 
            });
        }, 1000);
    });
};