import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

interface TrendChartProps {
  title: string
  data: Array<{ name: string; value: number; category?: string }>
  type?: "line" | "bar"
}

const sleepData = [
  { name: "4 hrs", value: 2.1, category: "Poor" },
  { name: "5 hrs", value: 2.6, category: "Fair" },
  { name: "6 hrs", value: 3.2, category: "Good" },
  { name: "7 hrs", value: 3.7, category: "Great" },
  { name: "8 hrs", value: 3.8, category: "Great" },
  { name: "9+ hrs", value: 3.5, category: "Good" }
]

export const TrendChart = ({ 
  title = "Sleep vs GPA Performance", 
  data = sleepData,
  type = "bar"
}: Partial<TrendChartProps>) => {
  const Chart = type === "line" ? LineChart : BarChart

  return (
    <Card className="gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>
          Trend analysis showing performance patterns across different categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <Chart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 4]}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--popover-foreground))'
              }}
              labelFormatter={(label) => `Sleep Duration: ${label}`}
              formatter={(value: number) => [value.toFixed(2), "Average GPA"]}
            />
            {type === "line" ? (
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }}
              />
            ) : (
              <Bar 
                dataKey="value" 
                fill="hsl(var(--chart-2))"
                radius={[4, 4, 0, 0]}
              />
            )}
          </Chart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}