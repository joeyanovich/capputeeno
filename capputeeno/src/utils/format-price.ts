export function formaPrice(valueInCents: number) {
  const valueInReais = valueInCents / 100
  return valueInReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})
}