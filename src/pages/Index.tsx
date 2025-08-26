import { DataCard } from "@/components/DataCard"
import { QuestionAnalyzer } from "@/components/QuestionAnalyzer"
import { CorrelationChart } from "@/components/CorrelationChart"
import { TrendChart } from "@/components/TrendChart"
import { ImportSection } from "@/components/ImportSection"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Brain } from "lucide-react"
import heroImage from "@/assets/hero-dashboard.jpg"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-surface opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-primary text-primary-foreground border-0 shadow-elegant">
                  AI-Powered Analytics
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Survey Data into
                  <span className="gradient-primary bg-clip-text text-transparent"> Actionable Insights</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Automatically analyze Google Forms and Microsoft Forms responses. 
                  Discover hidden relationships between variables like GPA, stress levels, 
                  and wellness factors to drive positive change.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary border-0 shadow-elegant transition-smooth hover:shadow-lg">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="border-border/50 hover:border-primary/50 transition-smooth">
                  View Demo
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Forms Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Responses Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Data visualization dashboard interface" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Real-Time Analytics Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our AI automatically categorizes questions and reveals meaningful patterns 
            in your survey data to help you make informed decisions.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DataCard
            title="Average GPA"
            description="Current semester performance"
            value="3.24"
            change="+0.12 from last month"
            trend="up"
            category="Academic"
          />
          <DataCard
            title="Stress Level"
            description="Average reported stress (1-5)"
            value="3.1"
            change="-0.3 from last month"
            trend="down"
            category="Wellness"
          />
          <DataCard
            title="Sleep Hours"
            description="Average nightly sleep"
            value="6.8"
            change="+0.5 from last month"
            trend="up"
            category="Health"
          />
          <DataCard
            title="Therapy Effectiveness"
            description="Positive response rate"
            value="78%"
            change="+5% from last month"
            trend="up"
            category="Treatment"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <CorrelationChart 
              title="GPA vs Stress Level Correlation"
              xLabel="GPA"
              yLabel="Stress Level (1-5)"
              data={[]}
            />
            <TrendChart 
              title="Sleep vs GPA Performance" 
              data={[]}
            />
          </div>
          
          <div className="space-y-6">
            <ImportSection />
            <QuestionAnalyzer />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-elegant">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">Auto-Categorization</h3>
            <p className="text-sm text-muted-foreground">
              AI automatically sorts questions by type and category for instant insights.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-elegant">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">Correlation Detection</h3>
            <p className="text-sm text-muted-foreground">
              Discover hidden relationships between variables like GPA and stress levels.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-elegant">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">Real-Time Updates</h3>
            <p className="text-sm text-muted-foreground">
              Live dashboard updates as new survey responses come in.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-elegant">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">Smart Insights</h3>
            <p className="text-sm text-muted-foreground">
              Get actionable recommendations to improve student outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
