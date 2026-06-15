"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { 
  Home, 
  Heart, 
  CalendarCheck, 
  UploadCloud, 
  Settings, 
  Activity,
  User
} from "lucide-react"

export function ProfileSidebar() {
  const pathname = usePathname()
  const { user } = useAuth()

  if (!user) return null

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Public Profile", href: `/profile/${user.uid}`, icon: User },
    { name: "Edit Profile", href: "/profile/edit", icon: Settings },
    { name: "Saved Venues", href: "/profile/saved", icon: Heart },
    { name: "Booking Requests", href: "/profile/requests", icon: CalendarCheck },
    { name: "Upload Requests", href: "/profile/venue-upload-requests", icon: UploadCloud },
  ]

  return (
    <aside className="w-full flex flex-col gap-2 sticky top-32">
      <div className="p-6 rounded-[14px] bg-white border border-[#E7ECF3] shadow-sm mb-4">
        <h2 className="text-xl font-black text-[#111111] mb-1">Dashboard</h2>
        <p className="text-sm font-medium text-[#6B7A90]">Manage your account</p>
      </div>
      
      <nav className="flex flex-col gap-1 bg-white p-3 rounded-[14px] border border-[#E7ECF3] shadow-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link 
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all duration-200 font-bold text-[14px] ${
                isActive 
                  ? "bg-[#111111] text-white shadow-md" 
                  : "text-[#6B7A90] hover:bg-[#F8FAFC] hover:text-[#111111]"
              }`}
            >
              <Icon className={`w-[18px] h-[18px] ${isActive ? "text-white" : "text-[#6B7A90]"}`} />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
