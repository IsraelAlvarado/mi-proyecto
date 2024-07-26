/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XjqDXWGLxm5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            Image Manager
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
              Update
            </Link>
            <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
              Search
            </Link>
            <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
              Extract Text
            </Link>
            <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
              Delete
            </Link>
          </nav>
        </div>
        <Button variant="outline" className="hidden md:flex">
          Chat
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
                Update
              </Link>
              <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
                Search
              </Link>
              <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
                Extract Text
              </Link>
              <Link href="#" className="hover:text-muted-foreground" prefetch={false}>
                Delete
              </Link>
              <Button variant="outline">Chat</Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Images</CardTitle>
              <CardDescription>View and manage your most recent images.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="aspect-video object-cover rounded-md"
                />
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="aspect-video object-cover rounded-md"
                />
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="aspect-video object-cover rounded-md"
                />
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="aspect-video object-cover rounded-md"
                />
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="aspect-video object-cover rounded-md"
                />
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Image"
                  className="aspect-video object-cover rounded-md"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Update Images</CardTitle>
              <CardDescription>Edit and update the details of your existing images.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="image-name">Image Name</Label>
                  <Input id="image-name" type="text" defaultValue="My Image" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image-description">Description</Label>
                  <Textarea
                    id="image-description"
                    defaultValue="This is a description of my image."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image-tags">Tags</Label>
                  <Input id="image-tags" type="text" defaultValue="tag1, tag2" />
                </div>
                <Button>Update Image</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Search Images</CardTitle>
              <CardDescription>Find specific images using search and filters.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="search-query">Search</Label>
                  <Input id="search-query" type="text" placeholder="Search..." />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="filter-by-tag">Filter by Tag</Label>
                  <Input id="filter-by-tag" type="text" placeholder="Enter tags" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="filter-by-date">Filter by Date</Label>
                  <div className="flex items-center gap-2">
                    <Input id="filter-by-date" type="date" />
                    <span>to</span>
                    <Input type="date" />
                  </div>
                </div>
                <Button>Search</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Extract Text</CardTitle>
              <CardDescription>
                Extract text from your images using optical character recognition (OCR).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="image-to-extract">Select Image</Label>
                  <Input id="image-to-extract" type="file" />
                </div>
                <Button>Extract Text</Button>
                <div className="grid gap-2">
                  <Label>Extracted Text</Label>
                  <Textarea className="min-h-[100px]" readOnly />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Delete Images</CardTitle>
              <CardDescription>Permanently delete images from your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="images-to-delete">Select Images</Label>
                  <Select id="images-to-delete" multiple>
                    <SelectTrigger>
                      <SelectValue placeholder="Select images" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="image1.jpg">Image 1</SelectItem>
                      <SelectItem value="image2.jpg">Image 2</SelectItem>
                      <SelectItem value="image3.jpg">Image 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="destructive">Delete Images</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <div className="border-t">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">Active now</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <PaperclipIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SmileIcon className="h-5 w-5" />
            </Button>
            <Input type="text" placeholder="Type your message..." className="bg-muted rounded-md px-3 py-2 text-sm" />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
