interface Props {
  medicos?: number[]
  total?: number
  disponiveis?: number
  indisponiveis?: number
  ativos?: number
  inativos?: number
}
function ComponentsIcons({
  total,
  disponiveis,
  indisponiveis,
  ativos,
  inativos
}: Props) {
  return (
    <div>
      <span>
        <h1>{total}</h1>
      </span>
      <div>
        <div />
        {}
      </div>
    </div>
  )
}
export default ComponentsIcons
