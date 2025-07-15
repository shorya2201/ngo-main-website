"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface NavigationItem {
  title: string
  href: string
  isSubheading?: boolean
  parent?: string
}

interface NavigationSection {
  title: string
  items: NavigationItem[]
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems: NavigationSection[] = [
    {
      title: "About Us",
      items: [
        { title: "Our History", href: "#" },
        { title: "Chairman & Managing Trustee", href: "#" },
        { title: "Advisory Board", href: "#" },
        { title: "Board Members", href: "#" },
        { title: "Core Team", href: "#" },
        { title: "Founding Supporters", href: "#" },
        { title: "Young Change Makers", href: "#" },
        { title: "Partners & Collaborations", href: "#" },
        { title: "Reach & Presence", href: "#" },
        { title: "Privacy Policy", href: "#" },
        { title: "Terms & Conditions", href: "#" },
      ],
    },
    {
      title: "Interventions",
      items: [
        { title: "SWIS Institute", href: "#", isSubheading: true },
        { title: "Centre for Social Impact & Innovation", href: "#", parent: "SWIS Institute" },
        { title: "Centre for Social Awareness & Action", href: "#", parent: "SWIS Institute" },
        { title: "Centre for Civil Administration & Engagement", href: "#", parent: "SWIS Institute" },
        { title: "SWIS Foundation", href: "#", isSubheading: true },
        { title: "Education", href: "#", parent: "SWIS Foundation" },
        { title: "Skill Development", href: "#", parent: "SWIS Foundation" },
        { title: "Nutrition", href: "#", parent: "SWIS Foundation" },
        { title: "Healthcare", href: "#", parent: "SWIS Foundation" },
        { title: "Relief of Poor", href: "#", parent: "SWIS Foundation" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { title: "Volunteering & Internships", href: "#" },
        { title: "Corporate Partners", href: "#" },
        { title: "Non - Profits", href: "#" },
      ],
    },
    {
      title: "Careers",
      items: [
        { title: "Careers", href: "#" },
        { title: "Search & Apply", href: "#" },
        { title: "Working at SWIS Ventures", href: "#" },
        { title: "Code of Conduct", href: "#" },
      ],
    },
    {
      title: "News & Media",
      items: [
        { title: "Press Releases", href: "#" },
        { title: "Media Coverage", href: "#" },
        { title: "Photo Gallery", href: "#" },
        { title: "Video Gallery", href: "#" },
      ],
    },
  ]

  const renderInterventionsDropdown = (items: NavigationItem[]) => {
    const swisInstitute = items.filter((item) => item.parent === "SWIS Institute" || item.title === "SWIS Institute")
    const swisFoundation = items.filter((item) => item.parent === "SWIS Foundation" || item.title === "SWIS Foundation")

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SWIS Institute Column */}
        <div>
          {swisInstitute.map((subItem, index) => {
            if (subItem.isSubheading) {
              return (
                <h3 key={index} className="font-bold text-lg mb-3 text-black border-b border-gray-300 pb-2">
                  {subItem.title}
                </h3>
              )
            } else {
              return (
                <a
                  key={index}
                  href={subItem.href}
                  className="block text-black hover:text-gray-600 transition-colors py-2 text-sm mb-1"
                >
                  {subItem.title}
                </a>
              )
            }
          })}
        </div>

        {/* SWIS Foundation Column */}
        <div>
          {swisFoundation.map((subItem, index) => {
            if (subItem.isSubheading) {
              return (
                <h3 key={index} className="font-bold text-lg mb-3 text-black border-b border-gray-300 pb-2">
                  {subItem.title}
                </h3>
              )
            } else {
              return (
                <a
                  key={index}
                  href={subItem.href}
                  className="block text-black hover:text-gray-600 transition-colors py-2 text-sm mb-1"
                >
                  {subItem.title}
                </a>
              )
            }
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Dropdown Menus */}
      {activeDropdown && (
        <div
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-40"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {activeDropdown === "Interventions" ? (
              renderInterventionsDropdown(navigationItems.find((item) => item.title === activeDropdown)?.items || [])
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {navigationItems
                  .find((item) => item.title === activeDropdown)
                  ?.items.map((subItem, index) => (
                    <a
                      key={index}
                      href={subItem.href}
                      className="block text-black hover:text-gray-600 transition-colors py-2 text-sm"
                    >
                      {subItem.title}
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation Items with Hover */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Home Link */}
        <a href="#" className="text-white hover:text-orange-400 transition-colors py-2 font-medium">
          Home
        </a>

        {navigationItems.map((item) => (
          <div key={item.title} className="relative" onMouseEnter={() => setActiveDropdown(item.title)}>
            <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors py-2 font-medium">
              <span>{item.title}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === item.title && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200 -mt-1.5"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
