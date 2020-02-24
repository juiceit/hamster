import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const PrimaryButton = styled.button`
  height: 44px;
  min-width: 44px;
  font-weight: 600;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid ${props => tinycolor(props.theme.primary).darken(10).toRgbString()};
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