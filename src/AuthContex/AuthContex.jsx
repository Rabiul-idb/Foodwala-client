import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
export const contextProvider = createContext();

const AuthContex = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // create new user with email and password
    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // Observer
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        if(currentUser){
            setUser(currentUser);
        }
        setLoading(false);
        
    })
    return unSubscribe;
   },[])

   // logOut
   const logOut = () =>{
    setLoading(true);
    return signOut(auth);
   }

   // login
   const userLogin = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   // login with google
   const provider = new GoogleAuthProvider();

   const loginWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
   }

    const contexValue = {
        auth,
        createNewUser,
        user,
        setUser,
        logOut,
        userLogin,
        loginWithGoogle,
    }

    return (
        <contextProvider.Provider value={contexValue}>{children}</contextProvider.Provider>
    );
};

export default AuthContex;