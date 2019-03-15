import Axios from 'axios';
import AxiosMocker from 'axios-mock-adapter';
import { calculateRandomWithinRange } from '../Utils';

export const verifyUserData =  (data) => {
    const url = '/citizens/verified';
    const mockData = new AxiosMocker(Axios);

    mockData.onPost(url).reply(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([200, { response: calculateRandomWithinRange(0,100) > 10} ]);
            }, 1000);
        });
    });

    return Axios.post(url, data).then(({ data }) => data);
};
