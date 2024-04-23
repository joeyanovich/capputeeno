import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;
  border: none;
  border-radius: 8px;

  font-family: inherit;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 20px;

  color: var(--text-dark);
  background-color: var(--bg-secondary);

  @media (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 22px;
  }
`

const InputContainer = styled.div`
  position: relative;

  width: 15.625rem;

  svg {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);

    cursor: pointer;
  }

  @media (min-width: 48rem) {
    width: 22rem;
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