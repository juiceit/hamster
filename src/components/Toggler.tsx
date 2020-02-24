import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TogglerContainerProps {
  checked: boolean;
}

interface TogglerProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const TogglerContainer = styled.div<TogglerContainerProps>`
  display: inline-flex;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  margin: 10px;
  background: ${props => props.checked ? props.theme.primary : '#d0d0d0'};
  border: 1px solid #707070;
  justify-content: ${props => props.checked ? 'flex-end' : 'flex-start'};
  transition: all 150ms;
`;

const TogglerThingy = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #f5f5f5;
  border: 1px solid #707070;
  box-shadow: 0 0px 4px rgba(0,0,0,0.2);
  transform: scale(1.5);
  transition: all 150ms;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;

:focus-within ${TogglerThingy} {
  box-shadow: 0 0px 4px ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};
}
`;

export default function Toggler({ checked, onToggle }: TogglerProps) {
  function handleClick() {
    onToggle(!checked);
  }

  function handleToggle(event: ChangeEvent<HTMLInputElement>) {
    onToggle(event.target.checked);
  }

  return <CheckboxContainer onClick={handleClick}>
    <HiddenCheckbox checked={checked} onChange={handleToggle} />
    <TogglerContainer checked={checked}>
      <TogglerThingy />
    </TogglerContainer>
  </CheckboxContainer>;
}
