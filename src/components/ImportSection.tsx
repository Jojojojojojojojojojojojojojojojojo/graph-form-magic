import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileSpreadsheet, Link2 } from "lucide-react"

export const ImportSection = () => {
  return (
    <Card className="gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Upload className="w-5 h-5 text-primary" />
          Import Survey Data
        </CardTitle>
        <CardDescription>
          Connect your Google Forms or Microsoft Forms to automatically analyze survey responses
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2 border-border/50 hover:border-primary/50 transition-smooth"
          >
            <FileSpreadsheet className="w-6 h-6 text-chart-1" />
            <span className="text-sm">Google Forms</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2 border-border/50 hover:border-primary/50 transition-smooth"
          >
            <FileSpreadsheet className="w-6 h-6 text-chart-2" />
            <span className="text-sm">Microsoft Forms</span>
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full h-12 gap-2 border-border/50 hover:border-primary/50 transition-smooth"
        >
          <Link2 className="w-4 h-4" />
          Connect via API URL
        </Button>
        
        <div className="mt-4 p-4 rounded-lg gradient-surface">
          <h4 className="text-sm font-semibold mb-2">What happens next?</h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Questions are automatically categorized by type</li>
            <li>• Relationships between variables are detected</li>
            <li>• Interactive visualizations are generated</li>
            <li>• Insights and recommendations are provided</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}