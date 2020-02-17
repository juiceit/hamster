import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const PrimaryButton = styled.button`
  font-weight: 600;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  border-top: 3px solid transparent;
  border-bottom: 3px solid ${props => tinycolor(props.theme.primary).darken(10).toRgbString()};
  background-color: ${props => props.theme.primary};
  color: ${props => tinycolor(props.theme.primary).isDark() ? "white" : "black"};
  cursor: pointer;
  transition: all 150ms;

  &:hover, &:focus {
    border-bottom: 3px solid transparent;
    background-color: ${props => tinycolor(props.theme.primary).darken(10).toRgbString()};
  }
`;

export default PrimaryButton;