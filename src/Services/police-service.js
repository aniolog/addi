import { calculateRandomWithinRange } from '../Utils';
import Axios from 'axios';
import AxiosMocker from 'axios-mock-adapter';

export const verifyPoliceRecords =  (id) => {
    const mockData = new AxiosMocker(Axios);

    mockData.onGet(`/citizens/police-records/${id}`).reply(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([200, { qty: calculateRandomWithinRange(2, 0) }]);
            }, 4000);
        });
    });

    return Axios.get(`/citizens/police-records/${id}`).then(({ data }) => data);
};