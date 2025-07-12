// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-1">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-3xl font-bold text-gray-900">Exchange Successful!</CardTitle>
          <CardDescription className="text-gray-600">
            Your Eco Points exchange has been successfully processed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-700">
            Thank you for contributing to sustainable fashion! You'll receive a confirmation email shortly with details
            about your exchange.
          </p>
          <div className="flex flex-col gap-4">
            <Link href="/dashboard" passHref>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Go to Dashboard
              </Button>
            </Link>
            <Link href="/products" passHref>
              <Button
                variant="outline"
                className="w-full border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
