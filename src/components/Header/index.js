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
            <li>About</li>
          </Link>
          <Link to="cart">
            <li>Cart</li>
          </Link>
          <Link to="signin">
            <li>Sign In</li>
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
