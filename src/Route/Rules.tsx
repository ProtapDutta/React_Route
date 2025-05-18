import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";
import Menu from "./Menu";
import NewUser from "./NewUser";
import ApiUsers from "./ApiUsers";
import View from "./View";

const Rules = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    return localStorage.getItem("isSignedIn") === "true";
  });

  const signin = () => {
    setIsSignedIn(true);
    localStorage.setItem("isSignedIn", "true");
  };
  const signout = () => {
    setIsSignedIn(false);
    localStorage.setItem("isSignedIn", "false");
  };
  
  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn ? "true" : "false");
  }, [isSignedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isSignedIn ? <Navigate to="/menu" replace /> : <Login signin={signin} />} />
        <Route path="/menu" element={<Protected isSignedIn={isSignedIn}><Menu signout={signout} /></Protected>} />
        <Route path="/new" element={<Protected isSignedIn={isSignedIn}><NewUser signout={signout} /></Protected>} />
        <Route path="/api-users" element={<Protected isSignedIn={isSignedIn}><ApiUsers signout={signout} /></Protected>} />
        <Route path="/view/:id" element={<Protected isSignedIn={isSignedIn}><View signout={signout} /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rules;