// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Leaf, Recycle, Camera, MessageCircle, Share2 } from "lucide-react"
import Image from "next/image"

export default function ItemDetailPage() {
  const item = {
    id: 1,
    title: "Eco-Friendly Denim Jacket",
    brand: "Sustainable Co.",
    points: 250,
    originalPoints: 400,
    image: "/placeholder.svg?height=600&width=600",
    condition: "Like New",
    size: "M",
    likes: 24,
    views: 156,
    category: "Outerwear",
    ecoScore: 95,
    carbonSaved: "2.5kg CO2",
    description:
      "This stylish denim jacket is made from 100% recycled cotton, offering a sustainable choice without compromising on style. It features a classic fit, button-front closure, and two chest pockets. Perfect for layering in any season.",
    material: "100% Recycled Cotton",
    color: "Indigo",
    seller: {
      name: "EcoChic Finds",
      rating: 4.8,
      itemsListed: 12,
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <Card className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <Badge className="absolute top-4 left-4 bg-green-500 text-white text-base px-3 py-1">{item.condition}</Badge>
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <Badge className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1">
              <Leaf className="h-4 w-4 mr-1" />
              {item.ecoScore}% Eco
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Eye className="h-4 w-4 mr-1" />
              {item.views}
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Heart className="h-4 w-4 mr-1" />
              {item.likes}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-green-600 text-white text-sm px-3 py-1">Saved {item.carbonSaved}</Badge>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{item.title}</h1>
          <p className="text-xl text-gray-600">{item.brand}</p>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-green-600">{item.points} Eco Points</span>
            <span className="text-lg text-gray-500 line-through">{item.originalPoints} Points</span>
            <Badge variant="outline" className="text-base px-3 py-1">
              {Math.round(((item.originalPoints - item.points) / item.originalPoints) * 100)}% OFF
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold">Category:</p>
              <p>{item.category}</p>
            </div>
            <div>
              <p className="font-semibold">Size:</p>
              <p>{item.size}</p>
            </div>
            <div>
              <p className="font-semibold">Material:</p>
              <p>{item.material}</p>
            </div>
            <div>
              <p className="font-semibold">Color:</p>
              <p>{item.color}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">Description</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">Seller Information</h2>
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="font-semibold">{item.seller.name}</span>
              <Badge variant="secondary">{item.seller.rating} ⭐</Badge>
              <span>({item.seller.itemsListed} items listed)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg py-3">
              Exchange Now
              <Recycle className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-green-200 text-green-600 hover:bg-green-50 text-lg py-3 bg-transparent"
            >
              <Camera className="mr-2 h-5 w-5" />
              AR Try-On
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="flex-1 text-gray-600 hover:text-green-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              Message Seller
            </Button>
            <Button variant="ghost" className="flex-1 text-gray-600 hover:text-green-600">
              <Share2 className="mr-2 h-5 w-5" />
              Share Item
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
