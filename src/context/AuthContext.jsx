import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase.config'
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged 
        } from 'firebase/auth'


const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})

    //sign up for new Account
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in with existing account
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout function
    const logout = () => {
        return signOut(auth)
    }

    //to display user email in <Account />
    //useEffect/dependcyArray[] because we only want it to run once, when the component mounts
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    return (
                            //In the value property, it's where we export our functions(createNewUser)
        <UserContext.Provider value={{createNewUser, user, logout, signIn}}>
            {children}
        </UserContext.Provider>
    )
}

//This makes our user context available throughout the app
export const UserAuth = () => {
    return useContext(UserContext)
}