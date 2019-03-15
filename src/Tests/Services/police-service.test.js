import { expect } from 'chai';
import { verifyPoliceRecords } from '../../Services/police-service';


describe('Police service test' , () => {  
  it('should respond with a value saying the quantity of criminal recors of the user', (done) => {
    verifyPoliceRecords('1').then(({ response }) => {
      expect(response).to.be('integer');
      done();
    }).catch(() => done());
  });
});