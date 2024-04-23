"use client"

import { BackButton } from "@/components/back-button"
import { DefaultPageLayout } from "@/components/default-page-layout"
import { BackIcon } from "@/components/icons/back-icon"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const BackButtopn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;

  color: var(--secondary-text);
` 

export default function Product() {
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton />
        <section>Informações do produto</section>
      </Container>
    </DefaultPageLayout>
  )
}