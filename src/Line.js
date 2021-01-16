import styled from "styled-components";

//the paragraph is rendered with highlighted background depending on isCurrent prop passed by parent component App
const StyledParagraph = styled.p`
    color: #6c5ce7;
    background: ${props => props.isCurrent ? "#ffeaa7" : "none"};
    font-size: 0.8em;
    font-style: italic;
    margin-top: 20px;
`;

function Line(props) {  
    //isCurrent value is passed down and controlled by App; when TRUE, isCurrent property is read by StyledParagraph and the line is highlighted  
    return (
        <div>
           <StyledParagraph isCurrent={props.isCurrent}>{props.text}</StyledParagraph>           
        </div>
    );
};

export default Line;