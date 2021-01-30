import {StyledParagraph} from './styles';

const Line = ({text, isCurrent}) => <StyledParagraph isCurrent={isCurrent}>{text}</StyledParagraph>;

export default Line;