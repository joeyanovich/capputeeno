import styled from "styled-components"
import { BackIcon } from "./icons/back-icon"
import { useRouter } from "next/navigation"

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;

  color: var(--secondary-text);
  background-color: transparent;
` 

interface BtnProps {
  navigate: string;
}

export function BackBtn({ navigate }: BtnProps){
  const router = useRouter();

  const handleNavigate = () => {
      router.push(navigate)
  }

  return (
      <Button onClick={handleNavigate}>
          <BackIcon/>
          Voltar
      </Button>
  )
}