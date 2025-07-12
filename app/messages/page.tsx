// This file was left out for brevity in previous turns. Its content is assumed to be correct and unchanged.
// Placeholder content for demonstration. In a real scenario, this would be the full file content.
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Paperclip, Send, Smile, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: "Alice Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Sounds good! When can you ship?",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Bob Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I'm interested in the denim jacket.",
      time: "1h ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the exchange!",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "Diana Prince",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can you send more photos?",
      time: "2 days ago",
      unread: 1,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Alice Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Hi! I'm interested in your organic cotton dress. Is it still available?",
      time: "10:00 AM",
      isSelf: false,
    },
    {
      id: 2,
      sender: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Hi Alice! Yes, it is. What would you like to know?",
      time: "10:02 AM",
      isSelf: true,
    },
    {
      id: 3,
      sender: "Alice Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Great! What's the condition like? Any flaws?",
      time: "10:05 AM",
      isSelf: false,
    },
    {
      id: 4,
      sender: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "It's in excellent condition, no visible flaws. Worn only a couple of times.",
      time: "10:07 AM",
      isSelf: true,
    },
    {
      id: 5,
      sender: "Alice Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "Sounds good! When can you ship?",
      time: "10:10 AM",
      isSelf: false,
      read: true,
    },
    {
      id: 6,
      sender: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      content: "I can ship it tomorrow morning.",
      time: "10:12 AM",
      isSelf: true,
      read: false,
    },
  ]

  const currentConversation = conversations[0] // Assuming the first conversation is active

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <Card className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 h-[calc(100vh-64px)]">
        {/* Conversation List */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md flex flex-col">
          <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Messages</CardTitle>
          <Input placeholder="Search conversations..." className="mb-4" />
          <ScrollArea className="flex-1 pr-4 -mr-4">
            <div className="space-y-4">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    conv.id === currentConversation.id ? "bg-green-100 text-green-800" : "hover:bg-green-50"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conv.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">{conv.name}</p>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <Badge className="bg-green-500 text-white rounded-full px-2 py-0.5 text-xs">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Message Thread */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md flex flex-col">
          {currentConversation ? (
            <>
              <div className="flex items-center justify-between pb-4 border-b border-green-100 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={currentConversation.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{currentConversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {currentConversation.online && (
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{currentConversation.name}</h2>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5 text-gray-600" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Report User</DropdownMenuItem>
                    <DropdownMenuItem>Block User</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <ScrollArea className="flex-1 pr-4 -mr-4 mb-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-end gap-3 ${message.isSelf ? "justify-end" : "justify-start"}`}
                    >
                      {!message.isSelf && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.isSelf
                            ? "bg-green-600 text-white rounded-br-none"
                            : "bg-gray-100 text-gray-800 rounded-bl-none"
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isSelf ? "text-green-100" : "text-gray-500"}`}>
                          {message.time}
                          {message.isSelf && message.read && <span className="ml-2">✓ Read</span>}
                          {message.isSelf && !message.read && <span className="ml-2">✓ Sent</span>}
                        </p>
                      </div>
                      {message.isSelf && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex items-center gap-2 pt-4 border-t border-green-100">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5 text-gray-600" />
                </Button>
                <Input placeholder="Type your message..." className="flex-1" />
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5 text-gray-600" />
                </Button>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-600">
              Select a conversation to start chatting.
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
