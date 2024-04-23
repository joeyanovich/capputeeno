import styled from "styled-components"
import { BackIcon } from "./icons/back-icon"

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;

  color: var(--secondary-text);
  background-color: transparent;
` 

export function BackButton() {
  return (
    <Button>
      <BackIcon />
      voltar
    </Button>
  )
}