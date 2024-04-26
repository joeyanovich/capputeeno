"use client"

import styled from "styled-components"

import { Saira_Stencil_One } from "next/font/google"
import { PrimaryInputSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ["latin"]
});

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    flex-direction: row;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 1.25rem 10rem;
  }
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;

  text-decoration: none;
  

  color: var(--logo);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 2.5rem;
  }
`



export function Header() {
  const { search, setSearch } = useFilter()

  return (
    <HeaderContainer>
      <Logo className={sairaStencil.className} href="/">
        Capputeeno
      </Logo>
      <div>
        <PrimaryInputSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </HeaderContainer>
  )
}