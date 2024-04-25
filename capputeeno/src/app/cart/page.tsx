"use client"

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
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
    display: flex;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;

    color: var(--text-dark-2);;

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1.5rem;
`

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0);
  }

  const cartTotal = formatPrice(calculateTotal(value))

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if (item.id !== id) return item
      return { ...item, quantity: quantity }
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if (item.id !== id) return item
    })
    updateLocalStorage(newValue)
  }

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
            {value.map(item =>
              <CartItem
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
                product={item}
              />)}
          </CartList>
        </CartListContainer>
      </Container>
    </DefaultPageLayout>
  )
}