import styled from "styled-components";

const StyledParagraph = styled.p`
    color: #6c5ce7;
    font-size: 0.8em;
    font-style: italic;
    margin-top: 20px;
`;

function Line(props) {
    return (
        <StyledParagraph>{props.text}</StyledParagraph>
    );

};

export default Line;