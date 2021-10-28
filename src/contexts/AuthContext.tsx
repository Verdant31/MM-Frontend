import { createContext, useState, useEffect, ReactNode } from 'react';
import { useHistory } from 'react-router';
import { firebase, auth } from '../services/firebase';

type User = {
  id: string,
  email: string | null,
}

type AuthContextType = {
  user: User | undefined;
  signIn: (email: string, password: string) => Promise<boolean>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  async function signIn(email: string, password: string) {
    let error = false;
    await firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      if (user.user?.uid) {
        setUser({
          id: user.user.uid,
          email: user.user.email,
        })
      }
    }).catch((err) => {
      error = true;
      return error;
    })
    return error;
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
