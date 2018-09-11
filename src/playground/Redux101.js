import { createStore } from 'redux';

const add = (data) => {
    return data.a + data.b;
}
console.log(add({ a: 1, b: 12}))


const incrementCount = ({incrementBy = 1}) => ({
    type: 'INCREMENT',
    incrementBy,
})

const decrementCount = ({decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy,
})

const setCount = ({ count }) => ({
    type: 'SET',
    count,
})

const reset = (count) => ({
    type: 'RESET',
})

const countReducer = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy,
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy,
            }
        case 'RESET': 
            return {
                count: state.count = 0,
            }
        case 'SET':
            return {
                count: action.count,
            }
        default:
            return state;
    }
});

const store = createStore(countReducer);

// const store = createStore((state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy,
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - action.decrementBy,
//             }
//         case 'RESET': 
//             return {
//                 count: state.count = 0,
//             }
//         case 'SET':
//             return {
//                 count: action.count,
//             }
//         default:
//             return state;
//     }
// });

// const unsubscribe = store.subscribe(() => {
//     return (
//         console.log(store.getState())
//     );
// });

// // store.dispatch({
// //     type: 'INCREMENT',
// //     incrementBy: 5,
// // });

// store.dispatch(incrementCount({ incrementBy: 5 }))
// store.dispatch(incrementCount({ incrementBy: 12 }))
// store.dispatch(decrementCount({ decrementBy: 2 }))
// store.dispatch(reset());
// store.dispatch(setCount({count: 100}));