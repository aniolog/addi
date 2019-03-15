import Axios from 'axios';
import AxiosMocker from 'axios-mock-adapter';
import { calculateRandomWithinRange } from '../Utils';
import { ADDI_LOWER_SCORE, ADDI_MAX_SCORE } from '../Constants';


export const getUserScore =  (id) => {
    const url = `/score/${id}`;
    const mockData = new AxiosMocker(Axios);

    mockData.onGet(url).reply(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([200, { score: calculateRandomWithinRange(ADDI_LOWER_SCORE, ADDI_MAX_SCORE) }]);
            }, 1000);
        });
    });

    return Axios.get(url).then(({ data }) => data);
};