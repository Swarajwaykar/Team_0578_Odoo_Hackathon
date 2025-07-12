"use client"

import React from "react"
import Image from "next/image" // Added Image import

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Separator from "@/components/ui/separator" // Corrected import to default
import { Checkbox } from "@/components/ui/checkbox"
import { Coins, Truck, Package, MapPin } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const cartItems = [
    {
      id: 1,
      title: "Eco-Friendly Denim Jacket",
      brand: "Sustainable Co.",
      points: 250,
      image: "/placeholder.svg?height=80&width=80",
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      brand: "Green Fashion",
      points: 180,
      image: "/placeholder.svg?height=80&width=80",
      size: "S",
      quantity: 1,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.points * item.quantity, 0)
  const shippingOptions = [
    { id: "standard", name: "Standard Shipping", points: 50, delivery: "5-7 business days" },
    { id: "express", name: "Express Shipping", points: 100, delivery: "2-3 business days" },
  ]
  const [selectedShipping, setSelectedShipping] = React.useState(shippingOptions[0])
  const total = subtotal + selectedShipping.points

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-900">Complete Your Exchange</CardTitle>
          <CardDescription className="text-gray-600">
            Provide your shipping details and confirm your Eco Points exchange.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-green-600" /> Shipping Information
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Eco Street" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                <Input id="apartment" placeholder="Apt 4B" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Greenville" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" placeholder="CA" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" placeholder="90210" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
              </div>
            </form>

            <Separator className="my-6 bg-green-200" />

            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Truck className="h-6 w-6 text-green-600" /> Shipping Method
            </h2>
            <RadioGroup
              defaultValue={selectedShipping.id}
              onValueChange={(value) =>
                setSelectedShipping(shippingOptions.find((opt) => opt.id === value) || shippingOptions[0])
              }
              className="grid gap-4"
            >
              {shippingOptions.map((option) => (
                <Label
                  key={option.id}
                  htmlFor={option.id}
                  className="flex flex-col items-start space-y-1 rounded-md border-2 border-green-200 p-4 cursor-pointer hover:bg-green-50"
                >
                  <div className="flex w-full justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.id} />
                      <span className="font-medium">{option.name}</span>
                    </div>
                    <span>{option.points} Eco Points</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">{option.delivery}</p>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Package className="h-6 w-6 text-green-600" /> Order Summary
            </h2>
            <Card className="bg-green-50 border-green-200 shadow-md">
              <CardContent className="p-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.brand} • Size: {item.size}
                      </p>
                    </div>
                    <span className="font-bold text-green-600">{item.points} Eco Points</span>
                  </div>
                ))}
                <Separator className="my-4 bg-green-200" />
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>{subtotal} Eco Points</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping ({selectedShipping.name})</span>
                  <span>{selectedShipping.points} Eco Points</span>
                </div>
                <Separator className="my-4 bg-green-200" />
                <div className="flex justify-between font-bold text-xl text-gray-900">
                  <span>Total</span>
                  <span>{total} Eco Points</span>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Coins className="h-6 w-6 text-green-600" /> Your Eco Points Balance
            </h2>
            <Card className="bg-green-50 border-green-200 shadow-md">
              <CardContent className="p-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Current Balance:</span>
                <span className="text-2xl font-bold text-green-700">1250 Eco Points</span> {/* Placeholder */}
              </CardContent>
            </Card>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms">
                I agree to the{" "}
                <Link href="/terms" className="text-green-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-green-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>

            <Link href="/order-success" passHref>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg py-3">
                Confirm Exchange
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
