import styled from 'styled-components';

const PrevButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  margin-left: -11px;
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

  transition: transform 150ms ease-in-out;
  :hover {
    background-color: #f2f2f2;
  }
`;

const NextButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  margin-right: -11px;
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

  transition: transform 150ms ease-in-out;
  :hover {
    background-color: #f2f2f2;
  }
`;

export { PrevButton, NextButton };