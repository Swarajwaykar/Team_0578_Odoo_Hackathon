// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { UploadCloud, PlusCircle } from "lucide-react"
import Link from "next/link"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-900">Sell Your Clothes</CardTitle>
          <CardDescription className="text-gray-600">
            List your pre-loved items to exchange them for Eco Points.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-full">
              <Label htmlFor="title">Item Title</Label>
              <Input id="title" placeholder="e.g., Vintage Denim Jacket" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="tops">Tops</SelectItem>
                  <SelectItem value="bottoms">Bottoms</SelectItem>
                  <SelectItem value="outerwear">Outerwear</SelectItem>
                  <SelectItem value="shoes">Shoes</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Select>
                <SelectTrigger id="condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New with tags</SelectItem>
                  <SelectItem value="like-new">Like New</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <Input id="size" placeholder="e.g., M, US 8, EU 40" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand">Brand (Optional)</Label>
              <Input id="brand" placeholder="e.g., Patagonia, Zara" />
            </div>

            <div className="space-y-2 col-span-full">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your item, including any unique features or flaws."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2 col-span-full">
              <Label htmlFor="images">Upload Images</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-green-50 hover:bg-green-100 border-green-300"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-8 h-8 mb-3 text-green-500" />
                    <p className="mb-2 text-sm text-gray-600">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <Input id="dropzone-file" type="file" className="hidden" multiple />
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-2">Upload clear photos of your item from different angles.</p>
            </div>

            <div className="space-y-2 col-span-full">
              <Label htmlFor="eco-points">Suggested Eco Points</Label>
              <Input id="eco-points" type="number" placeholder="e.g., 150" min="0" required />
              <p className="text-sm text-gray-500">
                This is a suggested value. Our AI will help determine the final Eco Points.
              </p>
            </div>

            <div className="flex items-center space-x-2 col-span-full">
              <Checkbox id="ar-enabled" />
              <Label htmlFor="ar-enabled">Enable AR Try-On for this item</Label>
            </div>

            <Button
              type="submit"
              className="w-full col-span-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              List Item
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Need help? Visit our{" "}
            <Link href="/help" className="font-medium text-green-600 hover:underline">
              Help Center
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
