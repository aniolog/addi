import { expect } from 'chai';
import { validatePerson } from '../../Services/validation-service';

describe('Police service test' , () => {  
  it('should respond with a value saying the score of the user', (done) => {
    validatePerson('1').then(({ score }) => {
      expect(score).to.be('integer');
      done();
    }).catch(() => done());
  });
});