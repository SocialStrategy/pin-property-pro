import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Something went wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <div className="space-y-2">
                <Button 
                  onClick={() => window.location.reload()} 
                  className="w-full"
                >
                  Refresh Page
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/'}
                  className="w-full"
                >
                  Go to Home
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                If the problem persists, please contact Pin Hemmawan directly.
              </p>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

