"use client"

import * as React from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { VRSchoolLogo } from "./TranscriptLogos"

const academics = [
  {
    title: "Virtual Classrooms",
    href: "https://cvc.edu/",
    description: "Experience immersive learning environments with world-class instructors.",
  },
  {
    title: "AI Tutoring",
    href: "https://cvc.edu/",
    description: "Get personalized support from our advanced AI tutoring system.",
  },
  {
    title: "Course Catalog",
    href: "/",
    description: "Explore our comprehensive selection of courses and programs.",
  },
  {
    title: "Global Collaborations",
    href: "https://cvc.edu/",
    description: "Engage in real-time projects with students worldwide.",
  },
  {
    title: "Academic Calendar",
    href: "/",
    description: "View important dates and deadlines for the academic year.",
  },
]

const research = [
  {
    title: "Research Areas",
    href: "/",
    description: "Discover our innovative research initiatives and breakthroughs.",
  },
  {
    title: "Virtual Labs",
    href: "https://cvc.edu/",
    description: "Access state-of-the-art virtual laboratory facilities.",
  },
  {
    title: "Publications",
    href: "/",
    description: "Read about our latest research findings and publications.",
  },
]

const campusLife = [
  {
    title: "Student Organizations",
    href: "/",
    description: "Join virtual clubs and organizations.",
  },
  {
    title: "Events",
    href: "/",
    description: "Stay updated with virtual events and activities.",
  },
  {
    title: "Support Services",
    href: "/",
    description: "Access student support and wellness resources.",
  },
]

export function MainNav() {
  return (
    <div className="w-full bg-black sticky top-0 z-50 shadow-md">
      {/* Top utility navigation */}
      <div className="border-b border-vrGold/30">
        <div className="container flex h-10 items-center justify-between">
          <Link href="/" className="text-sm font-medium text-vrGold hover:text-vrOrange transition-colors">
            The VR School
          </Link>
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-sm text-white hover:text-vrGold transition-colors">
                Students
              </Link>
              <Link href="/" className="text-sm text-white hover:text-vrGold transition-colors">
                Faculty & Staff
              </Link>
              <Link href="/" className="text-sm text-white hover:text-vrGold transition-colors">
                Parents
              </Link>
              <Link href="/" className="text-sm text-white hover:text-vrGold transition-colors">
                Alumni
              </Link>
              <Link
                href="https://www.parchment.com/u/registration/76724515/institution"
                className="text-sm text-white hover:text-vrGold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parchment
              </Link>
            </nav>
            <button className="flex items-center text-white hover:text-vrGold transition-colors">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <VRSchoolLogo width={40} height={40} className="text-vrGold" />
          <span className="text-xl font-bold text-vrGold">The VR School</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-white hover:bg-vrOrange transition-colors bg-black">
                Academics
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black rounded-md border border-vrGold/30">
                  {academics.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-white hover:bg-vrOrange transition-colors bg-black">
                Research
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black rounded-md border border-vrGold/30">
                  {research.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-white hover:bg-vrOrange transition-colors bg-black">
                Campus Life
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black rounded-md border border-vrGold/30">
                  {campusLife.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white hover:text-vrGold hover:bg-vrGold/10 transition-colors">
                  Admission
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white hover:text-vrGold hover:bg-vrGold/10 transition-colors">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white hover:text-vrGold hover:bg-vrGold/10 transition-colors">
                  College Board
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-vrOrange hover:text-white focus:bg-vrOrange focus:text-white",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-vrGold">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-white/70">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

