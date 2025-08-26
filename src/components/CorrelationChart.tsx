import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface CorrelationChartProps {
  title: string
  xLabel: string
  yLabel: string
  data: Array<{ x: number; y: number; name?: string }>
}

const gpaStressData = [
  { x: 3.8, y: 2, name: "Student 1" },
  { x: 3.2, y: 4, name: "Student 2" },
  { x: 3.9, y: 1, name: "Student 3" },
  { x: 2.8, y: 5, name: "Student 4" },
  { x: 3.5, y: 3, name: "Student 5" },
  { x: 3.1, y: 4, name: "Student 6" },
  { x: 3.7, y: 2, name: "Student 7" },
  { x: 2.9, y: 4, name: "Student 8" },
  { x: 3.6, y: 2, name: "Student 9" },
  { x: 3.3, y: 3, name: "Student 10" },
  { x: 2.7, y: 5, name: "Student 11" },
  { x: 3.4, y: 3, name: "Student 12" },
  { x: 3.0, y: 4, name: "Student 13" },
  { x: 3.8, y: 1, name: "Student 14" },
  { x: 2.6, y: 5, name: "Student 15" }
]

export const CorrelationChart = ({ 
  title = "GPA vs Stress Level Correlation", 
  xLabel = "GPA", 
  yLabel = "Stress Level (1-5)",
  data = gpaStressData 
}: Partial<CorrelationChartProps>) => {
  return (
    <Card className="gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>
          Relationship analysis showing correlation patterns between variables
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name={xLabel}
              domain={['dataMin - 0.1', 'dataMax + 0.1']}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name={yLabel}
              domain={[0, 6]}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--popover-foreground))'
              }}
              labelFormatter={(label, payload) => {
                if (payload && payload[0]) {
                  return `${xLabel}: ${payload[0].payload.x}, ${yLabel}: ${payload[0].payload.y}`
                }
                return label
              }}
            />
            <Scatter 
              name={title} 
              dataKey="y" 
              fill="hsl(var(--chart-1))"
              fillOpacity={0.8}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}