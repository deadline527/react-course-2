import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined,{type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sort by to amount', () => {
    const currentState={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined      
    }
    const state = filtersReducer(currentState,{type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})    

test('Should set sort by to date', () => {
    const currentState={
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined      
    }
    const state = filtersReducer(currentState,{type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})    

test('Should set text filter', () => {
    const text = 'Text'
    const state = filtersReducer(undefined,{type: 'SET_TEXT_FILTER', text: text})
    expect(state.text).toBe('Text')
})    


test('Should set start date', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE', 
        startDate
    }
    const state = filtersReducer(undefined,action)
    expect(state.startDate).toEqual(startDate)
})    

test('Should set end date', () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE', 
        endDate
    }
    const state = filtersReducer(undefined,action)
    expect(state.endDate).toEqual(endDate)
})    