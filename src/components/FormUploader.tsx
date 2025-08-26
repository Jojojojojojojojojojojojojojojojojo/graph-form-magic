import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Link2, FileText, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const FormUploader = () => {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileUpload = (type: string) => {
    setIsProcessing(true)
    // Simulate upload process
    setTimeout(() => {
      setUploadedFile(`${type} Survey Data`)
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">
          Upload Your Survey Data
        </h1>
        <p className="text-lg text-muted-foreground">
          Connect your Google Forms or Microsoft Forms to automatically generate insights and visualizations
        </p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-primary" />
            Import Survey Forms
          </CardTitle>
          <CardDescription>
            Choose how you'd like to import your survey data for analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="google" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="google" className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                Google Forms
              </TabsTrigger>
              <TabsTrigger value="microsoft" className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full" />
                Microsoft Forms
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="google" className="space-y-4">
              <div className="p-6 border-2 border-dashed border-primary/30 rounded-lg gradient-primary/5">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto shadow-elegant">
                    <FileText className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Google Forms Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Connect directly to your Google Forms or upload exported data
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="google-url">Form URL or Share Link</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="google-url"
                          placeholder="https://docs.google.com/forms/d/..."
                          className="flex-1"
                        />
                        <Button 
                          onClick={() => handleFileUpload('Google Forms')}
                          disabled={isProcessing}
                          className="gradient-primary border-0 shadow-elegant"
                        >
                          {isProcessing ? "Processing..." : "Connect"}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full" onClick={() => handleFileUpload('Google Forms CSV')}>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload CSV/Excel File
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="microsoft" className="space-y-4">
              <div className="p-6 border-2 border-dashed border-secondary/30 rounded-lg bg-secondary/5">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto shadow-green">
                    <FileText className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Microsoft Forms Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Connect to your Microsoft Forms or upload response data
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="microsoft-url">Form URL or Share Link</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="microsoft-url"
                          placeholder="https://forms.office.com/pages/..."
                          className="flex-1"
                        />
                        <Button 
                          onClick={() => handleFileUpload('Microsoft Forms')}
                          disabled={isProcessing}
                          className="gradient-secondary border-0 shadow-green"
                        >
                          {isProcessing ? "Processing..." : "Connect"}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full" onClick={() => handleFileUpload('Microsoft Forms Excel')}>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Excel/CSV File
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {uploadedFile && (
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <p className="font-medium text-green-800">Upload Successful!</p>
                <p className="text-sm text-green-600">
                  {uploadedFile} has been processed. You can now view your analytics dashboard.
                </p>
              </div>
              <Button 
                className="gradient-primary border-0"
                onClick={() => window.location.href = '/dashboard'}
              >
                View Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-elegant">
            <FileText className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-semibold">Auto-Detection</h3>
          <p className="text-sm text-muted-foreground">
            Automatically identifies question types and categories from your form
          </p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto shadow-green">
            <CheckCircle2 className="w-6 h-6 text-secondary-foreground" />
          </div>
          <h3 className="font-semibold">Smart Analysis</h3>
          <p className="text-sm text-muted-foreground">
            Finds correlations between GPA, stress, sleep, and wellness factors
          </p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-elegant">
            <Link2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-semibold">Multiple Charts</h3>
          <p className="text-sm text-muted-foreground">
            Generate bar charts, histograms, and pie charts from your data
          </p>
        </div>
      </div>
    </div>
  )
}