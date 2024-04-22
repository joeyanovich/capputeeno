import styled from "styled-components"

interface ProductCardProps {
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

    padding: 0.5rem 0;

    > div {
    width: 14.25rem;
    height: 1px;
    margin: 0.5rem 0;
    padding: 0px;

    background-color: var(--shapes);
  }
  }

  p {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;

    color: var(--shapes-dark);
  }
`

export function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <img src={props.image}/>
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{props.price}</p>
      </div>
    </Card>
  )
}