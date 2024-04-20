"use client"

import { useProducts } from "@/hooks/useProduct"
import { ProductCard } from "./product-card"

export function ProductsList() {
  const { data } = useProducts()
  return (
    <div>
      {data?.map(product => <ProductCard
        key={product.id}
        image={product.image_url}
        title={product.name}
        price={product.price_in_cents}
        />
      )}
    </div>
  )
}