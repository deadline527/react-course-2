import React from 'react';
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses'

test('Should render ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

// test('Should render ExpenseListItem without expenses', () => {
//     const wrapper = shallow(<ExpenseListItem {...expenses[4]} />);
//     expect(toJSON(wrapper)).toMatchSnapshot();
// })

