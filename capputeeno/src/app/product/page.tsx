"use client"

import { BackBtn } from "@/components/back-button"
import { DefaultPageLayout } from "@/components/default-page-layout"
import { ShopBagIcon } from "@/components/icons/shopping-bag-icon"
import { useProduct } from "@/hooks/useProducts"
import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    gap: 2rem;

    width: 100%;
    margin-top: 1.5rem;

    img {
      max-width: 40rem;
      width: 50%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        mix-blend-mode: multiply;
        padding: 0.625rem 0;

        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        border-radius: 4px;
        border: none;

        cursor: pointer;

        background-color: #115D8C;
        color: white;
      }
    }
  }
`

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    color: var(--text-dark-2);
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.5;

    margin-top: 0.75rem;

    color: var(--text-dark-2);
  }
  span:nth-of-type(2) {
    font-size: 1.25rem;
    font-weight: 600;

    margin-bottom: 1.5rem;

    color: var(--shapes-dark);
  }

  p {
    font-size: 0.75rem;
    font-weight: 400;

    color: var(--text-dark);
  }

  div {
    margin-top: 1.5rem;

    h3 {
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;

      margin-bottom: 0.5rem;

      color: var(--text-dark);
    }

    p {
      font-size: 0.875rem;
    }
  }
`

export default function Product({ searchParams }: { searchParams: { id: string }}) {
  const { data } = useProduct(searchParams.id)

  console.log(data)

  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <section>
          <img src={data?.image_url} alt="" />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button>
              <ShopBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}