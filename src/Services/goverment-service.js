import Axios from 'axios';
import AxiosMocker from 'axios-mock-adapter';
import { calculateRandomWithinRange } from '../Utils';

export const verifyUserData =  (data) => {
    const mockData = new AxiosMocker(Axios);

    mockData.onPost('/citizens/verified').reply(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let status, success;
                if (calculateRandomWithinRange(100,0) > 10) {
                    status = 200;
                    success = true;
                } else {
                    status = 404;
                    success = false;
                }
                resolve([status, { success } ]);
            }, 4000);
        });
    });

    return Axios.post('/citizens/verified', data).then(({ data }) => data);
};
