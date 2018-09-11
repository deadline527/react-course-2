import expensesReducer from '../../reducers/expenses'
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('Should set up default state values', () => {
    const state = expensesReducer(undefined,{type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 2
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
});

test('Should add an expense', () => {
    const expense = {
        id: 100,
        description: 'test4',
        note: 'test4',
        amount: 100,
        createdAt: 100,
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses, expense])
});

test('Should edit an expense', () => {
    const amount = 2000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state[1].amount).toEqual(2000)
})

test('Should not edit an expense if id not found', () => {
    const amount = 2000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2000',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})