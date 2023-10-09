import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        setloading(true)

        return signOut(auth)
    }
    // google sign 
    const googleSignIn = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            console.log('user is in state', auth)
            setuser(createUser)
            setloading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authinfo = {
        user,
        createUser,
        signIn,
        logout,
        googleSignIn,
        loading

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;