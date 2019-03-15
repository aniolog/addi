import { expect } from 'chai';
import { verifyUserData } from '../../Services/goverment-service';

describe('Goverment service test' , () => {  
  it('should respond with a value saying if the data is correct', (done) => {
    verifyUserData({
      id: '12345',
      documentType: 'cc',
      expeditionDate: '01/01/2018',
      name: 'Carlos lozano'
    }).then(({ response }) => {
      expect(response).to.be('boolean');
      done();
    }).catch(() => done());
  });
});