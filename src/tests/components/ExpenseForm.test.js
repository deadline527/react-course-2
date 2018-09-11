import React from 'react';
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    toJSON(wrapper.find('form').simulate('submit', { preventDefault: () => { } 
    }))
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
})