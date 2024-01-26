import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch"
import { IVendas } from "../Context/DataContext"
import { formatPrice } from "./Resumo"
import Loading from "../Components/Loading"

type VendaSemData = Omit<IVendas, 'data'>

const Venda = () => {
  const { id } = useParams()
  const { data, loading } = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`)

  if (loading === true) return <Loading />

  if (data === null) return null
  return (
    <div>

      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">Preço: {formatPrice(data.preco)}</div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>

    </div>
  )
}

export default Venda