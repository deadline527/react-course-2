import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDlj5nyf3xHY3GdQfKaI8olLivxEsFOCHA",
    authDomain: "expensify-bcc3e.firebaseapp.com",
    databaseURL: "https://expensify-bcc3e.firebaseio.com",
    projectId: "expensify-bcc3e",
    storageBucket: "expensify-bcc3e.appspot.com",
    messagingSenderId: "266498342385"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// const expenseArray = database.ref('expenses').on('value', (snapshot) => {
//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = []
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       })
//       console.log(expenses)
//     })
// })

// database.ref('notes').push({
//   title: 'course-topics',
//   body: 'react-native'
// })

// database.ref('expenses').push({
//   description: 'phone bill',
//   note: '',
//   amount: 4700,
//   createdAt: 1000
// })

// database.ref('expenses').push({
//   description: 'gas bill',
//   note: '',
//   amount: 444,
//   createdAt: 1200
// })

// database.ref('expenses').push({
//   description: 'water bill',
//   note: '',
//   amount: 222,
//   createdAt: 400
// })


// database.ref('notes').set(notes)

// database.ref().set({
//     name: 'thomas tyler',
//     age: 34,
//     stressLevel: 6,
//     job: {
//       title: 'Manager',
//       company: 'google'
//     },
//     location: {
//         city: 'Plantation',
//         country: 'USA'
//         }
// }).then(() => {
//     console.log('Data is saved.')
// }).catch((e) => {
//     console.log('This failed... ',e)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error! ',e)
// })

// setTimeout(() => {
//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })
// }, 3500)

// database.ref().off(onValueChange)

// setTimeout(() => {
//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Home',
//     'location/city': 'Seattle'
//   })
// }, 3500)



// database.ref().once('value')
// .then(snapshot => {
//   console.log('snapshot',snapshot.val())
// }).catch((e) => {
//   console.log('fetching data',e)
// })

// database.ref('occupation/title').set('Infrastructure Engineer')

// database.ref('siblings').set({
//     brother: 'James',
//     sister: 'Sara'
// }).then(() => {
//     console.log('Data has been saved.')
// }).catch((e) => {
//     console.log('ERRORRRRRRrrRRrrRRrr', e)
// })

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('Removed.')
// }).catch((e) => {
//     console.log('REMOVEEEDDDDDD...', e)
// })