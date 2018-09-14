import { firebase, googleAuthProvider } from '../firebase/firebase'

export const startLogin = () => {
        // return null;
        return firebase.auth().signInWithPopup(googleAuthProvider)
}