import { formatPrice } from "@/utils/format-price"
import { useRouter } from "next/navigation"
import styled from "styled-components"
import { Divider } from "./divider"

interface ProductCardProps {
  id: string,
  image: string,
  title: string,
  price: number,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 16rem;

  cursor: pointer;
  border-radius: 0 0 4px 4px;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);

  img {
    width: 16rem;
    height: 18.75rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;

    color: var(--text-dark-2);
  }
  
  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    padding: 0.5rem 0.75rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;

    color: var(--shapes-dark);
  }
`

export function ProductCard(props: ProductCardProps) {
  const router = useRouter()
  const price = formatPrice(props.price)

  const handleNavigate = () => {
    router.push("/product?id=" + props.id)
  }

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image}/>
      <div>
        <h3>{props.title}</h3>
          <Divider />
        <p>{price}</p>
      </div>
    </Card>
  )
}