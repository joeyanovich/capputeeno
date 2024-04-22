import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-type"

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: inherit;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;

    cursor: pointer;
    border: none;

    color: var(--text-dark);
    background-color: transparent;

    svg {
      margin-left: 0.5rem;
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  top: 100%;

  width: 15.625rem;
  padding: 0.75rem 1rem;
  list-style: none;
  border-radius: 4px;
  z-index: 999;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #FFF;

  li {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;

    cursor: pointer;

    color: var(--text-dark);
  }

  li + li {
    margin-top: 0.25rem;
  }
`

export function FilterByPriority() {
  const [isOpen, setIsOpen]= useState(false)
  const { setPriority }= useFilter()

  const handleOpen = () => setIsOpen(prev => !prev)

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen &&
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
        </PriorityFilter>}
    </FilterContainer>
  )
}