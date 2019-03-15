import { expect } from 'chai';
import { getUserScore } from '../../Services/addi-service';


describe('Addi service test' , () => {  
  it('should respond with a number between 0 and 100', (done) => {
    getUserScore('124567').then(({ score }) => {
      expect(score).to.be.within(0,100);
      done();
    }).catch(() => done());
  });
});