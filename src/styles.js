import styled from "styled-components";

export const StyledParagraph = styled.p`
color: #6c5ce7;
background: ${props => props.isCurrent ? "#ffeaa7" : "none"};
font-size: 0.8em;
font-style: italic;
`;

export const StyledBox = styled.div`
  text-align: left;
  padding: 10px 30px;
  margin-top: 20px;
`;

export const AppHeader = styled.header`
  color: #2d3436;
  font-size: 1.2em;
  font-style: italic;
`;

export const StyledButton = styled.button`
font-size: 0.7em;
font-family: 'Segoe UI', 'Ubuntu', sans-serif;
`;