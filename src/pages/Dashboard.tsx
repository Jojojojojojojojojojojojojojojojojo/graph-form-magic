import { DataCard } from "@/components/DataCard"
import { QuestionAnalyzer } from "@/components/QuestionAnalyzer"
import { InteractiveChart } from "@/components/InteractiveChart"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share } from "lucide-react"
import { Link } from "react-router-dom"

const gpaStressData = [
  { name: "1.0-2.0", value: 4.2 },
  { name: "2.1-2.5", value: 3.8 },
  { name: "2.6-3.0", value: 3.1 },
  { name: "3.1-3.5", value: 2.4 },
  { name: "3.6-4.0", value: 1.9 }
]

const sleepGpaData = [
  { name: "4 hrs", value: 2.1 },
  { name: "5 hrs", value: 2.6 },
  { name: "6 hrs", value: 3.2 },
  { name: "7 hrs", value: 3.7 },
  { name: "8 hrs", value: 3.8 },
  { name: "9+ hrs", value: 3.5 }
]

const therapyData = [
  { name: "Very Helpful", value: 45 },
  { name: "Somewhat Helpful", value: 32 },
  { name: "Neutral", value: 15 },
  { name: "Not Helpful", value: 8 }
]

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Upload
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Survey Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Analyzing 252 responses from "Student Wellness Survey"
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share Dashboard
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DataCard
            title="Average GPA"
            description="Current semester performance"
            value="3.24"
            change="+0.12 from baseline"
            trend="up"
            category="Academic"
          />
          <DataCard
            title="Avg Stress Level"
            description="Reported stress (1-5 scale)"
            value="3.1"
            change="-0.3 improvement"
            trend="down"
            category="Wellness"
          />
          <DataCard
            title="Sleep Hours"
            description="Average nightly sleep"
            value="6.8"
            change="+0.5 from baseline"
            trend="up"
            category="Health"
          />
          <DataCard
            title="Therapy Satisfaction"
            description="Positive response rate"
            value="78%"
            change="+5% improvement"
            trend="up"
            category="Treatment"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <InteractiveChart
              title="GPA Distribution by Stress Level"
              data={gpaStressData}
              xLabel="GPA Range"
              yLabel="Average Stress Level"
            />
            
            <InteractiveChart
              title="Sleep Duration vs Academic Performance"
              data={sleepGpaData}
              xLabel="Sleep Hours"
              yLabel="Average GPA"
            />
            
            <InteractiveChart
              title="Therapy Effectiveness Feedback"
              data={therapyData}
              xLabel="Response"
              yLabel="Number of Students"
            />
          </div>
          
          <div className="space-y-6">
            <QuestionAnalyzer />
            
            {/* Insights Card */}
            <div className="p-6 gradient-card rounded-lg shadow-card">
              <h3 className="font-semibold mb-4">Key Insights</h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-medium text-primary mb-1">Strong Negative Correlation</p>
                  <p className="text-muted-foreground">
                    Higher GPA students report significantly lower stress levels (-0.73 correlation)
                  </p>
                </div>
                
                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="font-medium text-secondary mb-1">Sleep Sweet Spot</p>
                  <p className="text-muted-foreground">
                    7-8 hours of sleep shows optimal GPA performance (3.7-3.8 average)
                  </p>
                </div>
                
                <div className="p-3 bg-chart-3/10 rounded-lg border border-chart-3/20">
                  <p className="font-medium mb-1" style={{ color: 'hsl(var(--chart-3))' }}>Therapy Impact</p>
                  <p className="text-muted-foreground">
                    77% find therapy helpful, with clear correlation to improved stress management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard