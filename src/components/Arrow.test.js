import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './Arrow';
import Arrow from './Arrow';
describe('Arrow', () => {
  it('should render an arrow', () => {
    const component = shallow(<Arrow stepNumber={2} totalSteps ={4} />);
  
    expect(component.text()).toBe(" -> ");
  });

  it('should not render an arrow for last step', () => {
    const component = shallow(<Arrow stepNumber={3} totalSteps ={4} />);
  
    expect(component.text()).toBe(" ");
  });

  it('should not render an arrow if there is only one step', () => {
    const component = shallow(<Arrow stepNumber={0} totalSteps ={1} />);
  
    expect(component.text()).toBe(" ");
  });
});