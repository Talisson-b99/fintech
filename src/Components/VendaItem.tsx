import { NavLink } from "react-router-dom"
import { IVendas } from "../Context/DataContext"
import { formatPrice } from "../Pages/Resumo"

const VendaItem = ({ venda }: { venda: IVendas }) => {
  return (
    <div className="venda box">
      <NavLink to={`/venda/${venda.id}`} style={{ fontFamily: "monospace" }}>{venda.id}</NavLink>
      <div>{venda.nome}</div>
      <div>{formatPrice(venda.preco)}</div>
    </div>
  )
}

export default VendaItem