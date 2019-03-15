import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import RowStatusComponent from '../../Components/Table/Components/row-status';
import { SUCCESS_STATUS, ERROR_STATUS, PROCESSING_STATUS } from '../../Constants';

configure({adapter: new Adapter()});
describe('Row status component test' , () => {
  it('should renders success status acordingly', () => {
    const wrapper = shallow(<RowStatusComponent status={SUCCESS_STATUS}/>);
    expect(wrapper.html()).to.be.equal('<td><span class="badge badge-success">Success</span></td>');
  });

  it('should renders error status acordingly', () => {
    const wrapper = shallow(<RowStatusComponent status={ERROR_STATUS} />);
    expect(wrapper.html()).to.be.equal('<td><span class="badge badge-danger">Error</span></td>');
  });
  
  it('should renders processing status acordingly', () => {
    const wrapper = shallow(<RowStatusComponent status={PROCESSING_STATUS} />);
    expect(wrapper.html()).to.be.equal('<td><div role="status" class="spinner-border"><span class="sr-only">Loading...</span></div></td>');
  });
});