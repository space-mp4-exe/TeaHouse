import { useState, useEffect} from 'react'
import './App.css'
import {auth} from "./firebase/firebase";
import type { User } from "firebase/auth";
import LoginPage from './components/login'
import SignUpPage from './components/SignUpPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfileCard from './components/profileScreen';
function App() {

  //const[islogin, setlogin] = useState(true);
  const [user, setUser] = useState<User | null>(null)

  useEffect(()=>{
    const currentUser = auth.currentUser;
    if(currentUser){
      setUser(currentUser);
    }
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      setUser(user);
    })

    return() => unsubscribe();

  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/login"
        element={user? <Navigate to="/" /> : <LoginPage/>}
        />
        <Route
        path="signup"
        element={user? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
        path="/profile"
        element={user ? <ProfileCard /> : <Navigate to = "/login" />}
        />
        <Route path = "/" element={<Navigate to="/profile"/>}/>

        <Route 
          path="/" 
          element={
            user ? (
              <div>
                <h1>Signed in as {user.email}</h1>
                <button onClick={() => auth.signOut()}>Log Out</button>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
        </Routes>

      </BrowserRouter>
  );
}

export default App
