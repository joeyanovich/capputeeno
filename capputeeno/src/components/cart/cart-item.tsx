import { ProductInCart } from "@/types/product"
import { formatPrice } from "@/utils/format-price"
import { ChangeEvent } from "react"
import styled from "styled-components"
import { DeleteIcon } from "../icons/delete-icon"

interface CartItemProps {
  product: ProductInCart
  handleUpdateQuantity(id: string, quantity: number): void
  handleDelete(id: string): void
}

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 13.125rem;

  border-radius: 8px;

  background-color: white;

  button {
    position: absolute;
    top: 1rem;
    right: 1.5rem;

    border: none;
    cursor: pointer;

    background-color: transparent;
  }

  img {
    max-height: 100%;
    width: 16rem;

    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 1rem 1.5rem;

    line-height: 1.5;

    color: var(--text-dark-2);

    h4 {
      font-size: 1.25rem;
      font-weight: 300;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
      text-overflow: ellipsis;

      max-height: 50%;

      overflow: hidden;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      span {
        font-size: 1rem;
        font-weight: 600;

        color: var(--shapes-dark);
      }
    }
  }
`

const SelectQuantity = styled.select`
  padding: 0.5rem;

  font-size: 1rem;
  font-weight: 400;

  border: 1px solid var(--border-color);
  border-radius: 8px;

  background-color: var(--bg-secondary);
  color: var(--text-dark);
`

export function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar" >
        <DeleteIcon />
      </button>
      <img src={product.image_url} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}