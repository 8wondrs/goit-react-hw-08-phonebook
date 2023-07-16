import styled from 'styled-components';

export const ContactName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  background-color: #1677ff;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background-color: #1976d2;
  }
`;
