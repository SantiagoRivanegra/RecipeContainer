import React, { useContext, createContext, useState, useEffect } from 'react'
import { 
  GoogleAuthProvider, 
  signInWithRedirect, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
} from 'firebase/auth'
import { auth } from '../firebase-config'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})  

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('User', currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return(
    <AuthContext.Provider value = {{googleSignIn, logOut, user, createUserEmailPassword, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}