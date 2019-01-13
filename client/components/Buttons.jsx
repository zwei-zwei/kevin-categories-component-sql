import styled from 'styled-components';

const PrevButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  margin-left: -10px;
  margin-bottom: 50px;
  color: #6441a4;
  padding: 22px 10px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-family: 'Verdana', sans-serif;
  font-size: 15px;
  font-weight: bold;
  box-shadow: -5px 10px 15px #d8d8d8;
  transition: transform 150ms ease-in-out;
`;

const NextButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  margin-right: -10px;
  margin-bottom: 50px;
  color: #6441a4;
  padding: 22px 10px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-family: "Verdana", sans-serif;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 5px 10px 15px #d8d8d8;
  transition: transform 150ms ease-in-out;
`;

export { PrevButton, NextButton };