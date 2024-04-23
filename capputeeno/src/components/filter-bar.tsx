"use client"

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  padding: 1rem 0;

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    align-items: start;
    justify-content: space-between;
    flex-direction: row;
  }
`

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}