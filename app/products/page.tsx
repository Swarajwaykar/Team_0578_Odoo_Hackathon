// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Heart, Eye, Leaf, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const categories = [
    { id: "all", name: "All Items", icon: "✨" },
    { id: "dresses", name: "Dresses", icon: "👗" },
    { id: "tops", name: "Tops", icon: "👕" },
    { id: "bottoms", name: "Bottoms", icon: "👖" },
    { id: "outerwear", name: "Outerwear", icon: "🧥" },
    { id: "shoes", name: "Shoes", icon: "👠" },
    { id: "accessories", name: "Accessories", icon: "👜" },
  ]

  const products = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      brand: "Sustainable Co.",
      points: 250,
      originalPoints: 400,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Like New",
      size: "M",
      likes: 24,
      views: 156,
      category: "Outerwear",
      ecoScore: 95,
      carbonSaved: "2.5kg CO2",
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      brand: "Green Fashion",
      points: 180,
      originalPoints: 300,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Excellent",
      size: "S",
      likes: 18,
      views: 89,
      category: "Dresses",
      ecoScore: 92,
      carbonSaved: "1.8kg CO2",
    },
    {
      id: 3,
      title: "Recycled Material Boots",
      brand: "EcoStep",
      points: 320,
      originalPoints: 500,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Good",
      size: "9",
      likes: 31,
      views: 203,
      category: "Shoes",
      ecoScore: 88,
      carbonSaved: "3.2kg CO2",
    },
    {
      id: 4,
      title: "Bamboo Fiber Sweater",
      brand: "Natural Wear",
      points: 160,
      originalPoints: 280,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Like New",
      size: "L",
      likes: 15,
      views: 67,
      category: "Tops",
      ecoScore: 96,
      carbonSaved: "2.1kg CO2",
    },
    {
      id: 5,
      title: "Upcycled Tote Bag",
      brand: "ReCraft",
      points: 100,
      originalPoints: 150,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Excellent",
      size: "One Size",
      likes: 10,
      views: 45,
      category: "Accessories",
      ecoScore: 85,
      carbonSaved: "0.5kg CO2",
    },
    {
      id: 6,
      title: "Vintage Silk Scarf",
      brand: "Timeless Threads",
      points: 90,
      originalPoints: 120,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Good",
      size: "One Size",
      likes: 7,
      views: 30,
      category: "Accessories",
      ecoScore: 78,
      carbonSaved: "0.3kg CO2",
    },
    {
      id: 7,
      title: "Hemp Blend T-Shirt",
      brand: "EarthWear",
      points: 120,
      originalPoints: 200,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Like New",
      size: "M",
      likes: 12,
      views: 55,
      category: "Tops",
      ecoScore: 90,
      carbonSaved: "1.0kg CO2",
    },
    {
      id: 8,
      title: "Recycled Polyester Leggings",
      brand: "Active Eco",
      points: 170,
      originalPoints: 250,
      image: "/placeholder.svg?height=300&width=300",
      condition: "Excellent",
      size: "S",
      likes: 14,
      views: 70,
      category: "Bottoms",
      ecoScore: 89,
      carbonSaved: "1.5kg CO2",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation (simplified for this page) */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoWear
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-green-600">
                  Dashboard
                </Button>
              </Link>
              <Link href="/sell">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Sell
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Explore Sustainable Fashion</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Filters */}
          <aside className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md h-fit sticky top-20">
            <div className="space-y-6">
              {/* Search */}
              <div>
                <Label htmlFor="search">Search Items</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input id="search" placeholder="Search by title or brand" className="pl-9" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox id={`category-${category.id}`} />
                      <Label htmlFor={`category-${category.id}`} className="ml-2 text-gray-700">
                        {category.icon} {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eco Points Range */}
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Eco Points</h3>
                <Slider defaultValue={[100, 500]} max={1000} step={10} className="w-full" />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>0 Points</span>
                  <span>1000+ Points</span>
                </div>
              </div>

              {/* Condition */}
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Condition</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="condition-new" />
                    <Label htmlFor="condition-new" className="ml-2 text-gray-700">
                      New with tags
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="condition-like-new" />
                    <Label htmlFor="condition-like-new" className="ml-2 text-gray-700">
                      Like New
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="condition-excellent" />
                    <Label htmlFor="condition-excellent" className="ml-2 text-gray-700">
                      Excellent
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="condition-good" />
                    <Label htmlFor="condition-good" className="ml-2 text-gray-700">
                      Good
                    </Label>
                  </div>
                </div>
              </div>

              {/* AR Enabled */}
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ar-filter" />
                  <Label htmlFor="ar-filter" className="text-gray-700">
                    Show AR Try-On Enabled Items
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {products.length} items</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    Sort by <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="newest">
                    <DropdownMenuRadioItem value="newest">Newest Arrivals</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="points-asc">Eco Points: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="points-desc">Eco Points: High to Low</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="eco-score">Eco Score</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-t-lg relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 left-2 bg-green-500 text-white">{item.condition}</Badge>
                      <div className="absolute top-2 right-2 flex flex-col space-y-1">
                        <Badge className="bg-emerald-100 text-emerald-800 text-xs">
                          <Leaf className="h-3 w-3 mr-1" />
                          {item.ecoScore}% Eco
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          {item.views}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Heart className="h-3 w-3 mr-1" />
                          {item.likes}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-green-600 text-white text-xs">-{item.carbonSaved}</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.brand} • Size {item.size}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-green-600">{item.points} Points</span>
                          <span className="text-sm text-gray-500 line-through">{item.originalPoints} Points</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {Math.round(((item.originalPoints - item.points) / item.originalPoints) * 100)}% OFF
                        </Badge>
                      </div>
                      <Link href={`/item/${item.id}`}>
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
