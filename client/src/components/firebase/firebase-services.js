import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  } from 'firebase/auth'
import { auth } from './firebase-config'
import { postUser } from '../../redux/actions'

// export const userLogin = async (email, password) => {
//   awaut sign
// }

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  let response = await signInWithPopup(auth, provider)
  const { email, uid, username } = response.user
  let user = window.localStorage.getItem('userData')
  if(!user){
    window.localStorage.setItem(
      'userData',
      JSON.stringify({ email, username})
      )
  }
  return response.user
}