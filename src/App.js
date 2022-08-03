import React from 'react';
import Cards from './components/Cards';
// import styled from 'styled-components';
import Header from './components/Header';
import { Routes, Route } from 'react-router';
import Cart from './components/Cart';
import About from './components/About';
import SignIn from './components/SignIn';
import ProtectedRoutes from './components/ProtectedRoutes';
import SignInRoute from './routes/SignInRoute';
import SignOutRoute from './routes/SignOutRoute.';
import { useLocation } from 'react-router-dom';
function App() {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="App">
      <Header />
      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/about" element={<About />} />

        <Route
          path="/signin"
          element={
            <SignInRoute>
              <SignIn />
            </SignInRoute>
          }
        />
        <Route path="/signout" element={<SignOutRoute />} />
      </Routes>
      {/* <Cards /> */}
    </div>
  );
}

export default App;
