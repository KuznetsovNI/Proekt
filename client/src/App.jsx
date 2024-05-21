import { useContext } from "react";
import { Link, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Demo from "./pages/Demo";
import About from "./pages/aboutUs";


import Layout from "./pages/Blog/Layout";
import Home from "./pages/Blog/Home";
import Blog from "./pages/Blog/Blog";
import Createblog from "./pages/Blog/Createblog";

import Support from "./pages/support";
import style from "./app.module.scss";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isUserLogged } = useContext(AuthContext);
  console.log(isUserLogged);


  return (
    
    <SnackbarProvider>
    <div className={style}>
    
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/create" element={<Createblog />} />
          {isUserLogged ? (
            <Route path="/demo" element={<Demo />} />
          ) : (
            <>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </>
          )}
          <Route  
            path="*"
            element={<Navigate to={isUserLogged ? "/demo" : "/sign-in"} />}
          />
        </Routes>
      </BrowserRouter>
      
    </div>
    </SnackbarProvider>
  );
};

export default App;
