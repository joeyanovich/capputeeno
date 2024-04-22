"use client"

import { useProducts } from "@/hooks/useProduct"
import { ProductCard } from "./product-card"
import styled from "styled-components"

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  gap: 2rem;

  margin-top: 2rem;
  max-width: 100%;
`

export function ProductsList() {
  const { data } = useProducts()
  return (
    <ListContainer>
      {data?.map(product =>
        <ProductCard
          key={product.id}
          image={product.image_url}
          title={product.name}
          price={product.price_in_cents}
        />
        )}
    </ListContainer>
  )
}