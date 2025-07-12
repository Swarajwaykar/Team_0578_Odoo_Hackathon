// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      brand: "Sustainable Co.",
      points: 250,
      image: "/placeholder.svg?height=100&width=100",
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      brand: "Green Fashion",
      points: 180,
      image: "/placeholder.svg?height=100&width=100",
      size: "S",
      quantity: 1,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.points * item.quantity, 0)
  const shipping = 50 // Example fixed shipping points
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-900">Your Exchange Cart</CardTitle>
          <CardDescription className="text-gray-600">
            Review your selected items before proceeding to exchange.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
              <Link href="/products" passHref>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1 grid gap-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.brand} • Size: {item.size}
                      </p>
                      <p className="text-lg font-bold text-green-600">{item.points} Eco Points</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input type="number" value={item.quantity} className="w-14 text-center" readOnly />
                      <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>

              <Card className="lg:col-span-1 bg-green-50 border-green-200 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>{subtotal} Eco Points</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span>{shipping} Eco Points</span>
                  </div>
                  <Separator className="my-4 bg-green-200" />
                  <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>{total} Eco Points</span>
                  </div>
                  <Link href="/checkout" passHref>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 mt-6">
                      Proceed to Exchange
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
