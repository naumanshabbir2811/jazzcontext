import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Index() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Section>
      <div>
        <ul>
          <Link to="/">
            <li style={{ color: pathname === '/' ? 'red' : 'black' }}>Home</li>
          </Link>
          <Link to="about">
            <li style={{ color: pathname === '/about' ? 'red' : 'black' }}>
              About
            </li>
          </Link>
          <Link to="cart">
            <li style={{ color: pathname === '/cart' ? 'red' : 'black' }}>
              Cart
            </li>
          </Link>
          <Link to="signin">
            <li style={{ color: pathname === '/signin' ? 'red' : 'black' }}>
              Sign In
            </li>
          </Link>
          <Link to="/signout">
            <li>Signout</li>
          </Link>
        </ul>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: row;
  ul {
    display: flex;
    li {
      margin: 1rem;
      cursor: pointer;
    }
  }
`;

export default Index;
