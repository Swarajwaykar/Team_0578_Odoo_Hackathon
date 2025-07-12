// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Coins, Leaf, Recycle, Package, Heart, Eye, MessageSquare, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  const user = {
    name: "EcoWarrior Jane",
    ecoPoints: 1250,
    level: 5,
    nextLevelPoints: 2000,
    itemsListed: 15,
    itemsExchanged: 10,
    carbonSaved: "12.5kg CO2",
    waterSaved: "2500L",
    wasteReduced: "8kg",
  }

  const recentActivity = [
    {
      id: 1,
      type: "exchange",
      description: "Exchanged 'Vintage Denim Jacket' for 250 Eco Points.",
      date: "2024-07-10",
      icon: <Recycle className="h-5 w-5 text-green-600" />,
    },
    {
      id: 2,
      type: "purchase",
      description: "Acquired 'Organic Cotton Dress' using 180 Eco Points.",
      date: "2024-07-08",
      icon: <Package className="h-5 w-5 text-emerald-600" />,
    },
    {
      id: 3,
      type: "achievement",
      description: "Unlocked 'Green Contributor' achievement.",
      date: "2024-07-05",
      icon: <Award className="h-5 w-5 text-yellow-500" />,
    },
    {
      id: 4,
      type: "listing",
      description: "Listed 'Bamboo Fiber Sweater' for 160 Eco Points.",
      date: "2024-07-03",
      icon: <Package className="h-5 w-5 text-blue-600" />,
    },
  ]

  const popularItems = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      image: "/placeholder.svg?height=100&width=100",
      likes: 24,
      views: 156,
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      image: "/placeholder.svg?height=100&width=100",
      likes: 18,
      views: 89,
    },
    {
      id: 3,
      title: "Recycled Material Boots",
      image: "/placeholder.svg?height=100&width=100",
      likes: 31,
      views: 203,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Welcome, {user.name}!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Your Eco Points</CardTitle>
              <Coins className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.ecoPoints}</div>
              <p className="text-xs text-gray-500">Points available for exchange</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Carbon Saved</CardTitle>
              <Leaf className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.carbonSaved}</div>
              <p className="text-xs text-gray-500">Through your exchanges</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Items Exchanged</CardTitle>
              <Recycle className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.itemsExchanged}</div>
              <p className="text-xs text-gray-500">Total items you've exchanged</p>
            </CardContent>
          </Card>
        </div>

        {/* Eco Level & Progress */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Your Eco Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Level {user.level}</span>
              <span className="text-gray-600">
                {user.ecoPoints} / {user.nextLevelPoints} Eco Points
              </span>
            </div>
            <Progress
              value={(user.ecoPoints / user.nextLevelPoints) * 100}
              className="h-3 bg-green-200"
              indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500"
            />
            <p className="text-sm text-gray-500 mt-2">
              Keep exchanging to reach Level {user.level + 1} and unlock new rewards!
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-green-100">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.description}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-4 px-0 text-green-600 hover:text-green-700">
                View All Activity <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Your Listings */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Your Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 space-x-2">
                        <Eye className="h-4 w-4" /> <span>{item.views} Views</span>
                        <Heart className="h-4 w-4" /> <span>{item.likes} Likes</span>
                      </div>
                    </div>
                    <Link href={`/item/${item.id}`} passHref>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-4 px-0 text-green-600 hover:text-green-700">
                Manage All Listings <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/sell" passHref>
              <Button className="w-full h-24 flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg">
                <Package className="h-6 w-6 mb-2" />
                List New Item
              </Button>
            </Link>
            <Link href="/products" passHref>
              <Button className="w-full h-24 flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg">
                <Recycle className="h-6 w-6 mb-2" />
                Find Items to Exchange
              </Button>
            </Link>
            <Link href="/messages" passHref>
              <Button className="w-full h-24 flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg">
                <MessageSquare className="h-6 w-6 mb-2" />
                Messages
              </Button>
            </Link>
            <Link href="/settings" passHref>
              <Button className="w-full h-24 flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg">
                <Award className="h-6 w-6 mb-2" />
                View Achievements
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
