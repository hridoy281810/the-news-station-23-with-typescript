import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { ReactNode, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { AuthContextType, User } from "../model/TypePassing";
// AuthContextType
// User
interface AuthProviderProps{
    children: ReactNode
}

const auth = getAuth(app)
export const AuthContext = createContext<AuthContextType | null>(null)
const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}:AuthProviderProps )=> {
    const [user, setUser] = useState<User |null>(null);
    const [loading, setLoading] = useState<boolean >(true);
    const crateUser = (email: string, password: string )  =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const signIn = (email: string, password: string) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
                setUser(loggedUser);
                setLoading(false);
            });
            return () => {
                return unsubscribe();
            };
        }, []);
    
        // Login with google
        const signInGoogle = () => {
            setLoading(true);
            return signInWithPopup (auth, GoogleProvider);
        };
    
       // logout
       const logout = () => {
        setLoading(true);
        return signOut(auth);
    };
const authInfo:AuthContextType  ={
        user,
        crateUser,
        setLoading,
        loading,
        signIn,
        logout,
        signInGoogle,
}
  return (
    <AuthContext.Provider value={authInfo}>
   {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;