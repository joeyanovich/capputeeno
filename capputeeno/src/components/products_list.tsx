"use client"

import { useProducts } from "@/hooks/useProduct"

export function ProductsList() {
  const { data } = useProducts()
  console.log(data)
  return (
    <>

    </>
  )
}