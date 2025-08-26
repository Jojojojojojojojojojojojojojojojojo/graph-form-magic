import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DataCardProps {
  title: string
  description: string
  value: string
  change?: string
  trend?: "up" | "down" | "neutral"
  category: string
}

export const DataCard = ({ title, description, value, change, trend, category }: DataCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-chart-2"
      case "down": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  return (
    <Card className="gradient-card border-border/50 shadow-card transition-smooth hover:shadow-elegant">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${getTrendColor()}`}>
            {trend === "up" && "↗"} {trend === "down" && "↘"} {change}
          </p>
        )}
      </CardContent>
    </Card>
  )
}