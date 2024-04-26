import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

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

const Container = styled.button`
  position: relative;

  cursor: pointer;
  border: none;

  background-color: transparent;
`

export function CartControl() {
  const router = useRouter()
  const { value } = useLocalStorage('cart-items', [])

  const handleNavigateToCart = () => {
    router.push("/cart")
  }

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}