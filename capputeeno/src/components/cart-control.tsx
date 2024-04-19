import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
  margin-left: -0.625rem;
  padding: 0 5px;
  width: 1rem;
  height: 1rem;

  font-size: 0.625rem;
  
  border-radius: 50%;

  color: white;
  background-color: var(--delete-color);
`

const Container = styled.div`
  position: relative;

  cursor: pointer;
`

export function CartControl() {
  const { value } = useLocalStorage('cart-items', [])

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}