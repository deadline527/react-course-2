import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should set up edit expense object', () => {
    const action = editExpense('123abc', { amount: 2200 } )
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { 
            amount: 2200
        }
    })
})

test('Should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 1095.00,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up add expense action object with default values', () => {
    const expenseData = {};
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            note: '',
            id: expect.any(String)
        }
    })
})