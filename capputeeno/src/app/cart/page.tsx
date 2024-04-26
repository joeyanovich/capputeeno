"use client"

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    text-transform: uppercase;

    margin-top: 1.5rem;

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

const CartResultContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  min-width: 22rem;
  height: 100%;
  padding: 1rem 1.5rem;

  background-color: white;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;

    margin-bottom: 1.875rem;

    color: var(--text-dark-2);
  }
`

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 0.75rem;

  font-size: 1rem;
  font-weight: ${props => props.isBold ? '600' : '400'};
  line-height: 1.5;
`

const ShopBtn = styled.button`
  width: 100%;
  margin-top: 2.5rem;
  padding: 0.75rem;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;

  border: none;
  border-radius: 4px;
  cursor: pointer;

  color: white;
  background-color: var(--success-color);
`

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0);
  }

  const cartTotal = formatPrice(calculateTotal(value))
  const deliveryFee = 4000
  const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

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
        <CartListContainer>
          <BackBtn navigate="/" />
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
        <CartResultContainer>
              <h3>Resumo do pedido</h3>
              <TotalItem isBold={false}>
                <p>Subtotal de produtos</p>
                <p>{cartTotal}</p>
              </TotalItem>
              <TotalItem isBold={false}>
                <p>Total da entrega</p>
                <p>{formatPrice(deliveryFee)}</p>
              </TotalItem>
              <Divider />
              <TotalItem isBold>
                <p>Total</p>
                <p>{cartTotalWithDelivery}</p>
              </TotalItem>
              <ShopBtn>
                Finalizar compra
              </ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  )
}