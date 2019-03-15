import { expect } from 'chai';
import { calculateRandomWithinRange } from '../../Utils';

describe('Utils methods test' , () => {  
  it('should return a value between the limits', () => {
    const value = calculateRandomWithinRange(0, 100);
    expect(value).to.be.within(0,100);
  });
});