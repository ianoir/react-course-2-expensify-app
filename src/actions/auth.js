import { auth, firebase, firebaseAuth, googleAuthProvider } from "../firebase/firebase";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebaseAuth.signInWithPopup(auth, googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebaseAuth.signOut(auth);
    };
};