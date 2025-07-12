"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import Separator from "@/components/ui/separator" // Corrected import to default export
import { Bell, User, Lock, Shield, Coins, Palette, Info, LogOut } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
            <p className="text-gray-600">Update your personal information and profile details.</p>
            <Separator className="my-4 bg-green-200" />
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="johndoe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" defaultValue="Eco-conscious fashion enthusiast." rows={3} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="New York, USA" />
                </div>
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                Save Profile
              </Button>
            </form>
          </div>
        )
      case "notifications":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Notification Settings</h2>
            <p className="text-gray-600">Manage how you receive notifications from EcoWear.</p>
            <Separator className="my-4 bg-green-200" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
                <Switch id="sms-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="exchange-updates">Exchange Updates</Label>
                <Switch id="exchange-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="new-message-alerts">New Message Alerts</Label>
                <Switch id="new-message-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="promotional-offers">Promotional Offers</Label>
                <Switch id="promotional-offers" />
              </div>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              Save Notifications
            </Button>
          </div>
        )
      case "privacy":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Privacy Settings</h2>
            <p className="text-gray-600">Control your data and privacy on EcoWear.</p>
            <Separator className="my-4 bg-green-200" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="profile-visibility">Profile Visibility</Label>
                <Switch id="profile-visibility" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="data-sharing">Data Sharing with Third Parties</Label>
                <Switch id="data-sharing" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="ar-camera-access">AR Camera Access</Label>
                <Switch id="ar-camera-access" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="location-sharing">Location Sharing</Label>
                <Switch id="location-sharing" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="message-read-receipts">Message Read Receipts</Label>
                <Switch id="message-read-receipts" defaultChecked />
              </div>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              Save Privacy Settings
            </Button>
          </div>
        )
      case "security":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>
            <p className="text-gray-600">Manage your account security and password.</p>
            <Separator className="my-4 bg-green-200" />
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                <Input id="confirm-new-password" type="password" />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                Change Password
              </Button>
            </form>
            <div className="flex items-center justify-between pt-4">
              <Label htmlFor="two-factor-auth">Two-Factor Authentication</Label>
              <Switch id="two-factor-auth" />
            </div>
            <Button variant="destructive">Log out from all devices</Button>
          </div>
        )
      case "payment":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Payment & Eco Points</h2>
            <p className="text-gray-600">Manage your Eco Points balance and payment methods.</p>
            <Separator className="my-4 bg-green-200" />
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-md bg-green-50 border-green-200">
                <div className="flex items-center space-x-2">
                  <Coins className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-lg text-gray-900">Current Eco Points:</span>
                </div>
                <span className="text-2xl font-bold text-green-700">1250</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Top Up Eco Points
              </Button>
              <h3 className="text-xl font-semibold text-gray-900 pt-4">Payment Methods</h3>
              <p className="text-gray-600">No payment methods added yet.</p>
              <Button
                variant="outline"
                className="w-full border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Add Payment Method
              </Button>
            </div>
          </div>
        )
      case "appearance":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Appearance</h2>
            <p className="text-gray-600">Customize the look and feel of your EcoWear app.</p>
            <Separator className="my-4 bg-green-200" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="theme-color">Theme Color</Label>
                <Input id="theme-color" type="color" defaultValue="#34D399" className="w-24 h-10 p-1" />
              </div>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              Save Appearance
            </Button>
          </div>
        )
      case "about":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">About EcoWear</h2>
            <p className="text-gray-600">Information about the EcoWear application.</p>
            <Separator className="my-4 bg-green-200" />
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Version:</strong> 1.0.0
              </p>
              <p>
                <strong>Build Date:</strong> July 12, 2025
              </p>
              <p>
                EcoWear is dedicated to revolutionizing fashion through sustainable exchanges and AI technology for a
                greener planet.
              </p>
              <p>
                For support, please visit our{" "}
                <a href="/help" className="text-green-600 hover:underline">
                  Help Center
                </a>
                .
              </p>
            </div>
            <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent">
              View Terms of Service
            </Button>
            <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent">
              View Privacy Policy
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <Card className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 p-6">
        {/* Sidebar Navigation */}
        <aside className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Settings</h1>
          <Button
            variant={activeTab === "profile" ? "secondary" : "ghost"}
            className="w-full justify-start text-lg py-6 px-4"
            onClick={() => setActiveTab("profile")}
          >
            <User className="mr-3 h-5 w-5" />
            Profile
          </Button>
          <Button
            variant={activeTab === "notifications" ? "secondary" : "ghost"}
            className="w-full justify-start text-lg py-6 px-4"
            onClick={() => setActiveTab("notifications")}
          >
            <Bell className="mr-3 h-5 w-5" />
            Notifications
          </Button>
          <Button
            variant={activeTab === "privacy" ? "secondary" : "ghost"}
            className="w-full justify-start text-lg py-6 px-4"
            onClick={() => setActiveTab("privacy")}
          >
            <Shield className="mr-3 h-5 w-5" />
            Privacy
          </Button>
          <Button
            variant={activeTab === "security" ? "secondary" : "ghost"}
            className="w-full justify-start text-lg py-6 px-4"
            onClick={() => setActiveTab("security")}
          >
            <Lock className="mr-3 h-5 w-5" />
            Security
          </Button>
          <Button
            variant={activeTab === "payment" ? "secondary" : "ghost"}
            className="w-full justify-start text-lg py-6 px-4"
            onClick={() => setActiveTab("payment")}
          >
            <Coins className="mr-3 h-5 w-5" />
            Payment & Eco Points
          </Button>
          <Button
            variant={activeTab === "appearance" ? "secondary" : "ghost"}
            className="w-full justify-start text-lg py-6 px-4"
            onClick={() => setActiveTab("appearance")}
          >
            <Palette className="mr-3 h-5 w-5" />
            Appearance
          </Button>
          <Button
            variant={activeTab === "about" ? "secondary" : "ghost"}
            className="w-full justify-start text-lg py-6 px-4"
            onClick={() => setActiveTab("about")}
          >
            <Info className="mr-3 h-5 w-5" />
            About
          </Button>
          <Separator className="my-4 bg-green-200" />
          <Button variant="ghost" className="w-full justify-start text-lg py-6 px-4 text-red-600 hover:text-red-700">
            <LogOut className="mr-3 h-5 w-5" />
            Log Out
          </Button>
        </aside>

        {/* Main Content Area */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">{renderContent()}</div>
      </Card>
    </div>
  )
}
