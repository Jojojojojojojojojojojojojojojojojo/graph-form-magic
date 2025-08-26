import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, PieChart, BarChart2 } from "lucide-react"

interface ChartSelectorProps {
  title: string
  children: React.ReactNode
  onChartTypeChange?: (type: 'bar' | 'histogram' | 'pie') => void
}

export const ChartSelector = ({ title, children, onChartTypeChange }: ChartSelectorProps) => {
  const [activeChart, setActiveChart] = useState<'bar' | 'histogram' | 'pie'>('bar')

  const handleChartChange = (type: 'bar' | 'histogram' | 'pie') => {
    setActiveChart(type)
    onChartTypeChange?.(type)
  }

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex gap-1">
            <Button
              variant={activeChart === 'bar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleChartChange('bar')}
              className={activeChart === 'bar' ? 'gradient-primary border-0' : ''}
            >
              <BarChart3 className="w-4 h-4" />
            </Button>
            <Button
              variant={activeChart === 'histogram' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleChartChange('histogram')}
              className={activeChart === 'histogram' ? 'gradient-secondary border-0' : ''}
            >
              <BarChart2 className="w-4 h-4" />
            </Button>
            <Button
              variant={activeChart === 'pie' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleChartChange('pie')}
              className={activeChart === 'pie' ? 'gradient-primary border-0' : ''}
            >
              <PieChart className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="text-xs">
            {activeChart === 'bar' ? 'Bar Chart' : activeChart === 'histogram' ? 'Histogram' : 'Pie Chart'}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Interactive
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}