import React from 'react';
import { shallow } from 'enzyme';
import CompletedTable from '../components/CompletedTable';

const props = {
    completedTodos:[
        {
          text: 'Run the tests',
          completed: true,
          id: 1
        }, {
          text: 'Use Redux',
          completed: true,
          id: 0
        }
      ]
};

const mySetup = (myProps) => {
    Object.assign(props, myProps);

    return shallow(<CompletedTable {...props} />);
};

describe('CompletedTable', () => {
    it('renders the minus icon', () => {
        const component = mySetup();
        expect(component.length).toEqual(1);
        expect(component.props().completedTodos).not.toBeNull();
    });

  
});
