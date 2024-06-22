import { createContext, useState } from "react";
import { firebaseApp, auth, db, storage } from "../firebase/config";

// export const FirebaseContext = createContext("null");
// export const AuthContext = createContext("null");
export const FirebaseContext = createContext({ firebaseApp, auth, db, storage });
export const AuthContext = createContext({ user: null, setUser: () => {} }); // Adjusted default value

export default function Context({ children }) {
  const [user, setUser] = useState(null);

  return (
    // <UserContext.Provider value={{ userData, setUserData }}>
    <AuthContext.Provider value={{ user, setUser }}>
      <FirebaseContext.Provider value={{ firebaseApp, auth, db, storage }}>
        {children}
      </FirebaseContext.Provider>
    </AuthContext.Provider>
    // </UserContext.Provider>
  );
}
