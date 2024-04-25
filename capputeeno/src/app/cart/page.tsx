"use client"

import { BackBtn } from "@/components/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const CartListContainer = styled.div`
  margin-top: 1.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    text-transform: uppercase;

    color: var(--text-dark-2);
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;

    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default function CartPage() {
  const { value } = useLocalStorage<ProductInCart[]>("cart-items", [])

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0);
  }

  const cartTotal = formatPrice(calculateTotal(value))

  console.log(value)

  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <CartListContainer>
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{cartTotal}</span>
          </p>

          <CartList>
            {value.map(item => item.name)}
          </CartList>
        </CartListContainer>
      </Container>
    </DefaultPageLayout>
  )
}