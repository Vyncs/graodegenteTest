import { memo } from "react"
import { Container, H1 } from "./style"

const component = () => {
  return (
    <Container>
     <H1>😍 Tudo em até <span>12x</span> | Envio em até <span>24h</span> | <span>5% de desconto</span> nas compras à vista</H1>
    </Container>
  )
}

export const DiscountMessage= memo(component)