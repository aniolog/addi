import Axios from 'axios';
import AxiosMocker from 'axios-mock-adapter';

export const verifyPoliceRecords =  (id) => {
    const mockData = new AxiosMocker(Axios);

    mockData.onGet(`/citizens/police-records/${id}`).reply(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([200, { qty: Math.floor(Math.random() * (+2 - +0)) } ]);
            }, 1000);
        });
    });

    return Axios.get(`/citizens/police-records/${id}`).then(({ data }) => data);
};