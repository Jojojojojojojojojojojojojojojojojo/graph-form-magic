import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Question {
  id: number
  text: string
  type: "numerical" | "scale" | "categorical" | "text"
  category: string
  responses: number
}

const mockQuestions: Question[] = [
  {
    id: 1,
    text: "What is your GPA?",
    type: "numerical",
    category: "Academic Performance",
    responses: 247
  },
  {
    id: 2,
    text: "How is your stress level from 1 to 5?",
    type: "scale",
    category: "Mental Health",
    responses: 251
  },
  {
    id: 3,
    text: "Is sage therapy helping you?",
    type: "categorical",
    category: "Treatment Effectiveness",
    responses: 189
  },
  {
    id: 4,
    text: "What can we do to help more?",
    type: "text",
    category: "Feedback & Suggestions",
    responses: 156
  },
  {
    id: 5,
    text: "How much sleep are you getting?",
    type: "numerical",
    category: "Health & Wellness",
    responses: 243
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "numerical": return "bg-chart-1"
    case "scale": return "bg-chart-2"
    case "categorical": return "bg-chart-3"
    case "text": return "bg-chart-4"
    default: return "bg-chart-5"
  }
}

export const QuestionAnalyzer = () => {
  const totalResponses = 252

  return (
    <Card className="gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Question Analysis & Auto-Categorization</CardTitle>
        <CardDescription>
          AI-powered analysis of form questions with automatic sorting and relationship detection
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockQuestions.map((question) => (
          <div key={question.id} className="flex items-start space-x-4 p-3 rounded-lg bg-background/20">
            <div className={`w-3 h-3 rounded-full ${getTypeColor(question.type)} mt-2 flex-shrink-0`} />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium leading-none mb-1">
                  {question.text}
                </p>
                <Badge variant="outline" className="text-xs flex-shrink-0">
                  {question.type}
                </Badge>
              </div>
              
              <p className="text-xs text-muted-foreground mb-2">
                {question.category}
              </p>
              
              <div className="flex items-center gap-2">
                <Progress 
                  value={(question.responses / totalResponses) * 100} 
                  className="flex-1 h-1"
                />
                <span className="text-xs text-muted-foreground">
                  {question.responses}/{totalResponses}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 p-4 rounded-lg gradient-surface">
          <h4 className="text-sm font-semibold mb-2">Detected Relationships</h4>
          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="flex justify-between">
              <span>GPA ↔ Stress Level</span>
              <Badge variant="secondary" className="text-xs">Strong correlation</Badge>
            </div>
            <div className="flex justify-between">
              <span>Sleep ↔ Stress Level</span>
              <Badge variant="secondary" className="text-xs">Moderate correlation</Badge>
            </div>
            <div className="flex justify-between">
              <span>GPA ↔ Sleep</span>
              <Badge variant="secondary" className="text-xs">Weak correlation</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}