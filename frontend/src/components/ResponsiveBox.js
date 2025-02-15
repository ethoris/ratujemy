// src/components/ResponsiveBox.js
import styled from 'styled-components';

const ResponsiveBox = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #f6f6f6;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export default ResponsiveBox;
