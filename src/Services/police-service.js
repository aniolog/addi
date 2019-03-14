import { calculateRandomWithinRange } from '../Utils';
import Axios from 'axios';
import AxiosMocker from 'axios-mock-adapter';

export const verifyPoliceRecords =  (id) => {
    const url = `/citizens/police-records/${id}`;
    const mockData = new AxiosMocker(Axios);

    mockData.onGet(url).reply(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([200, { qty: calculateRandomWithinRange(2, 0) }]);
            }, 4000);
        });
    });

    return Axios.get(url).then(({ data }) => data);
};