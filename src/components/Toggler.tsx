import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

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

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

interface TogglerContainerProps {
  checked: boolean;
}

const TogglerContainer = styled.div<TogglerContainerProps>`
  display: inline-flex;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  margin: 10px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'};
  justify-content: ${props => props.checked ? 'flex-start' : 'flex-end'};
  transition: all 150ms;
`;

const TogglerThingy = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #f5f5f5;
  box-shadow: 0 0px 4px rgba(0,0,0,0.2);
  transform: scale(1.5);
  transition: all 150ms;
`;

export default function Toggler({ checked, onToggle }: TogglerProps) {
  function handleToggle(event: ChangeEvent<HTMLInputElement>) {
    onToggle(event.target.checked);
  }

  return <CheckboxContainer>
    <HiddenCheckbox checked={checked} onChange={handleToggle} />
    <TogglerContainer checked={checked}>
      <TogglerThingy />
    </TogglerContainer>
  </CheckboxContainer>;
}
