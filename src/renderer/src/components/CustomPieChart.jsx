import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'

const COLORS = ['#16C60C', '#0078D7', '#FFF100', '#E81224']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            className="fw-bold"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}
function CustomPieChart({ data, title }) {
    return (
        <>
            <div className="container my-3">
                <h4 className="text-center mb-0 fw-bold">{title}</h4>
                <div className="" style={{ height: '300px' }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        stroke="#000000"
                                        strokeWidth={2}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default CustomPieChart
