import React, { useEffect, useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import Routes
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { AuthContext, FirebaseContext } from "./store/Context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Create from "./Pages/Create";
import view from "./Pages/ViewPost";
import View from "./Components/View/View";
import Post from "./store/PostContext";

function App() {
  const {  setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("Logged out");
      }
    });
  });

  return (
    <Post>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/signup" element={user ? <Navigate to={'/'}> </Navigate>: <Signup />} /> */}
            <Route path="/signup" element={ <Signup />} />
            {/* <Route
              path="/login"
              element={user ? <Navigate to={"/"}> </Navigate> : <Login />}
            /> */}
              <Route
              path="/login"
              element={ <Login />}
            />
            <Route path="/create" element={<Create />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </div>
      </Router>
    </Post>
  );
}

export default App;
