import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export const BarChart = () => {

    const data = [
        { label: "Janeiro", x: 120, y:80},
        { label: "Fevereiro", x: 120, y:80},
        { label: "Março", x: 120, y:80},
        { label: "Abril", x: 120, y:80},
        { label: "Maio", x: 120, y:80},
        { label: "Junho", x: 120, y:80},
    ]

    return(
        <BarChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
            >
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar dataKey="x" radius={[10, 10, 0, 0]} fill='#ff9900'/>
            <Bar dataKey="y" radius={[10, 10, 0, 0]} fill='#0059ff'/>
            </BarChart>
    )
}