import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 22rem;
  padding: 0.625rem 1rem;
  border: none;
  border-radius: 8px;

  font-family: inherit;
  font-weight: 400;
  font-style: 0.875rem;
  line-height: 14px;

  color: var(--text-dark);
  background-color: var(--bg-secondary);
`

const InputContainer = styled.div`
  position: relative;

  width: 22rem;

  svg {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);

    cursor: pointer;
  }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string) => void
}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} {...props} />
      <SearchIcon />
    </InputContainer>
  )
}