import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { IVendas } from "../Context/DataContext"

type VendaDia = {
  data: string
  pago: number
  processando: number
  falha: number
}

function transformData(data: IVendas[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0]

    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0
      }
    }
    acc[dia][item.status] += item.preco
    return acc
  }, {})
  return Object.values(dias).map((dia) => ({ ...dia, data: dia.data.substring(5) }))
}

const GraficoVendas = ({ data }: { data: IVendas[] }) => {
  const tranformedData = transformData(data)
  return (

    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={tranformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#fbcb21" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraficoVendas