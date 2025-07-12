// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Users, Package, BarChart, CheckCircle, XCircle, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminDashboard() {
  const users = [
    { id: 1, name: "Alice Smith", email: "alice@example.com", role: "User", status: "Active", items: 5, exchanges: 3 },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Active", items: 8, exchanges: 5 },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Admin",
      status: "Active",
      items: 0,
      exchanges: 0,
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      role: "User",
      status: "Inactive",
      items: 2,
      exchanges: 1,
    },
  ]

  const items = [
    {
      id: 101,
      name: "Denim Jacket",
      category: "Outerwear",
      status: "Pending Review",
      ecoScore: 90,
      listedBy: "Alice Smith",
    },
    { id: 102, name: "Organic Dress", category: "Dresses", status: "Active", ecoScore: 95, listedBy: "Bob Johnson" },
    { id: 103, name: "Recycled Boots", category: "Shoes", status: "Active", ecoScore: 88, listedBy: "Diana Prince" },
    { id: 104, name: "Hemp T-Shirt", category: "Tops", status: "Rejected", ecoScore: 70, listedBy: "Alice Smith" },
  ]

  const exchanges = [
    { id: 1001, item1: "Denim Jacket", item2: "Organic Dress", status: "Completed", date: "2024-07-01" },
    { id: 1002, item1: "Recycled Boots", item2: "Hemp T-Shirt", status: "Pending", date: "2024-07-05" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-gray-500">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Items Listed</CardTitle>
              <Package className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{items.length}</div>
              <p className="text-xs text-gray-500">+15.5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Eco Points Exchanged</CardTitle>
              <BarChart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,450</div>
              <p className="text-xs text-gray-500">+30.2% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Items Listed</TableHead>
                  <TableHead>Exchanges</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === "Active" ? "default" : "destructive"}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>{user.items}</TableCell>
                    <TableCell>{user.exchanges}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View User</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Item Moderation */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Item Moderation</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Listed By</TableHead>
                  <TableHead>Eco Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.listedBy}</TableCell>
                    <TableCell>{item.ecoScore}%</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === "Active"
                            ? "default"
                            : item.status === "Pending Review"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Item</DropdownMenuItem>
                          {item.status === "Pending Review" && (
                            <>
                              <DropdownMenuItem className="text-green-600">
                                <CheckCircle className="mr-2 h-4 w-4" /> Approve
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <XCircle className="mr-2 h-4 w-4" /> Reject
                              </DropdownMenuItem>
                            </>
                          )}
                          {item.status === "Active" && (
                            <DropdownMenuItem className="text-red-600">
                              <XCircle className="mr-2 h-4 w-4" /> Deactivate
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Exchange History */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Exchange History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Exchange ID</TableHead>
                  <TableHead>Item 1</TableHead>
                  <TableHead>Item 2</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exchanges.map((exchange) => (
                  <TableRow key={exchange.id}>
                    <TableCell className="font-medium">{exchange.id}</TableCell>
                    <TableCell>{exchange.item1}</TableCell>
                    <TableCell>{exchange.item2}</TableCell>
                    <TableCell>
                      <Badge variant={exchange.status === "Completed" ? "default" : "secondary"}>
                        {exchange.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{exchange.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
