import React, { useContext, createContext, useState, useEffect } from 'react'
import { 
  GoogleAuthProvider, 
  signInWithRedirect, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../firebase-config'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})  

  const googleSignIn = async() => {
    const provider = new GoogleAuthProvider()
    //const response = signInWithRedirect(auth, provider)
    let response = await signInWithPopup(auth, provider)
    console.log(response)
    const { email, uid } = response.user
    let user = window.localStorage.getItem('userData')
    if(!user){
      window.localStorage.setItem(
        'userData',
        JSON.stringify({email, id: uid})
        )
    }
   return response.user
  }

  const createUserEmailPassword = (email, password) => {
    const user = createUserWithEmailAndPassword(auth, email, password)
    return user
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    signOut(auth)
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('userData')
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