import GraficoVendas from "../Components/GraficoVendas"
import { useData } from "../Context/DataContext"

export function formatPrice(preco: number) {
  return Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(preco)
}

const Resumo = () => {
  const { data } = useData()

  if (data === null) return null
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {formatPrice(
              data.filter((item) => item.status !== "falha")
                .reduce((acc, produto) => acc += produto.preco, 0))}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {formatPrice(
              data.filter((item) => item.status === "pago")
                .reduce((acc, produto) => acc += produto.preco, 0))}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {formatPrice(
              data.filter((item) => item.status === "processando")
                .reduce((acc, produto) => acc += produto.preco, 0))}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraficoVendas data={data} />
      </div>
    </section>
  )
}

export default Resumo