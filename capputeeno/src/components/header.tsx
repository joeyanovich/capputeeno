"use client"

import styled from "styled-components"

import { Saira_Stencil_One } from "next/font/google"
import { PrimaryInputSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ["latin"]
});

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 10rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`

const Logo = styled.a`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.5;
  

  color: var(--logo);
`



export function Header() {
  return (
    <HeaderContainer>
      <Logo className={sairaStencil.className}>
        Capputeeno
      </Logo>
      <div>
        <PrimaryInputSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </HeaderContainer>
  )
}