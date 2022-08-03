import React, { useState } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import Card from './Card';
function Cards() {
  const cardsContent = [
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
    {
      id: uniqid(),
      h4: 'Weekly',
      h5: 'Super Duper',
      para1: '6 Gb',
      para2: '500',
      para3: '25',
      para4: '500',
      price: 'Rs 170',
    },
  ];
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
        // console.log(users);
      });
  };
  React.useEffect(() => {
    // fetchData();
  }, []);

  return (
    <Section>
      <div className="cards">
        {cardsContent.map((value, index) => {
          return (
            <>
              <Card value={value} key={index} />
            </>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  // display: flex;
  .cards {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
  }
`;
export default Cards;
