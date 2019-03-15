import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect, assert } from 'chai';
import TableComponent from '../../Components/Table';

configure({adapter: new Adapter()});
describe('Table component test' , () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<TableComponent />));

  it('should have no prospects and the modal closed', () => {
    const { modalOpen, prospects } = wrapper.state();
    expect(modalOpen).to.be.equal(false);
    expect(prospects.length).to.be.equal(0);
  });

  it('should change the modal open flag after the button clicked', () => {
    const { modalOpen, prospects } = wrapper.state();
    expect(modalOpen).to.be.equal(false);
    expect(prospects.length).to.be.equal(0);
  });

  it('should change the modal open flag after the button clicked', () => {
    const { modalOpen: prevValue } = wrapper.state();
    wrapper.instance().shouldOpenModal();
    const { modalOpen: currentValue } = wrapper.state();
    expect(prevValue).to.be.equal(!currentValue);
  });

  it('should change the modal open flag to the value passed', () => {
    wrapper.instance().shouldOpenModal(true);
    const { modalOpen } = wrapper.state();
    expect(modalOpen).to.be.equal(true);
  });

  it('should add prospect to the list', () => {
    wrapper.instance().startValidationProcess({
      id: '12345',
      documentType: 'cc',
      expeditionDate: '01/01/2018',
      name: 'Carlos lozano'
    });
    const { prospects } = wrapper.state();
    expect(prospects.length).to.be.equal(1);
  });

});