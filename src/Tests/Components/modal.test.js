import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect, assert } from 'chai';
import ModalComponent from '../../Components/Modal';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

const mockMethod = () => { console.log('success') };

configure({adapter: new Adapter()});
describe('Modal component test' , () => {
  
  it('should renders the propspect modal correctly', () => {
    const wrapper = shallow(
      <ModalComponent
        open={true}
        onCandidateSubmit={mockMethod}
        onCloseModal={mockMethod}
        />
      );
  });

  it('should have every value of initial values set to undefined and valid on false', () => {
    const wrapper = shallow(
      <ModalComponent
        open={true}
        onCandidateSubmit={mockMethod}
        onCloseModal={mockMethod}
        />
      );
      const { value, formValid } = wrapper.state();
      Object.keys(value).forEach(key => assert.equal(value[key], undefined));
      assert.equal(formValid, false); 
  });

  it('should fired the onCandidateSubmit and onCloseSpy', () => {
    const onCloseSpy = spy();
    const onSubmitSpy = spy();
    const wrapper = shallow(
      <ModalComponent
        open={true}
        onCandidateSubmit={onSubmitSpy}
        onCloseModal={onCloseSpy}
        />
      );
      wrapper.find('#submit').simulate('click');
      wrapper.find('#close').simulate('click');
      const result = expect(onSubmitSpy).to.have.been.called && expect(onCloseSpy).to.have.been.called;
  });

  it('should the form be valid', () => {
    const fields = [
      { input: 'document-type' , value: 'CE', stateKey: 'documentType'},
      { input: 'id' , value: '800886', stateKey: 'id'},
      { input: 'expedition-date' , value: '01/01/2019', stateKey: 'expedition-date'},
      { input: 'name' , value: 'Carlos Lozano', stateKey: 'name'},
    ];

    const wrapper = shallow(
      <ModalComponent
        open={true}
        onCandidateSubmit={mockMethod}
        onCloseModal={mockMethod}
        />
    );
    
    fields.forEach((element) => {
      wrapper.find(`#${element.input}`)
        .simulate('change', { target: { value: element.value } })
      assert(element.value, wrapper.state().value[element.stateKey]);
    });

    assert(wrapper.state().formValid, true);
  });

});