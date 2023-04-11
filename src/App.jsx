import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const { isLoggedIn } = useAuth();
  // const { isLoggedIn } = useContext(AuthContext);

  const [searchparams, setSearchparams] = useSearchParams();

  useEffect(() => {
    setSearchparams();
  }, []);

  return (
    <>
      {/* {isLoggedIn && <Navbar />} */}

      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default App;
