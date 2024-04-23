"use client"

import { BackBtn } from "@/components/back-button"
import { DefaultPageLayout } from "@/components/default-page-layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export default function Product() {
  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <section>Informações do produto</section>
      </Container>
    </DefaultPageLayout>
  )
}