import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCreateAuthStateContext } from '../context/UserContext';
function Card({
  value: {
    id,
    h4,
    h5,
    para1,
    para2,
    para3,
    para4,
    price,
    name,
    username,
    title,
    category,
    image,
  },
}) {
  const navigate = useNavigate();
  const { isAuthenticated } = useCreateAuthStateContext();
  const handleOnClick = () => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
    navigate('/cart');
  };
  return (
    <Div className="card" key={id}>
      <h4>{h4}</h4>
      <h5>{h5}</h5>
      <p>{para1}</p>
      <p>{para2}</p>
      <p>{para3}</p>
      <p>{para4}</p>
      <h4>{price}</h4>
      {/* <p>{id}</p> */}
      {/* <p>{name}</p>
      <p>{username}</p> */}
      {/* <p>{title}</p>
      <p>{category}</p>
      <img src={image} alt="" /> */}
      <button className="btn" onClick={handleOnClick}>
        Get offer
      </button>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  border: 2px solid red;
  margin: 10px;
  flex-direction: column;
  width: 300px;
  padding: 1rem;
  .btn {
    padding: 1rem;
    background-color: red;
    color: white;
    font-size: 1rem;
  }
`;
export default Card;
