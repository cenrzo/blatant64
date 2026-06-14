"use client"

import Link from "next/link"
import Image from "next/image"

export function ListYourSpace({ className, variant = "light" }: { className?: string, variant?: "dark" | "light" }) {
  const isDark = variant === "dark"

  return (
    <div className={`w-full max-w-[1280px] mx-auto px-6 ${className || ''}`} style={{ marginTop: "32px", marginBottom: "48px" }}>
      <div className={`${isDark ? 'bg-black rounded-[14px] border-none' : 'bg-white border border-[#cecbf6] rounded-[14px]'} flex overflow-hidden min-h-[320px] group`}>

        <div className={`flex-1 p-8 md:p-12 flex flex-col justify-center ${isDark ? 'bg-transparent' : 'bg-white'}`}>

          <h2 className={`text-[40px] md:text-[44px] font-bold ${isDark ? 'text-white' : 'text-[#26215c]'} mb-5 tracking-[-0.02em] leading-[1.05]`}>
            List your space <br />with Festivo
          </h2>

          <p className={`text-[17px] ${isDark ? 'text-white/65' : 'text-[#afa9ec]'} mb-8 leading-[1.65] max-w-[400px]`}>
            Reach thousands of guests looking for the perfect venue. Start earning today with our simple and secure platform.
          </p>

          <div>
            <Link
              href="/list-your-space"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,


                background: isDark ? "#FFFFFF" : "#26215c",
                color: isDark ? "#26215c" : "#FFFFFF",


                borderRadius: 10,
                padding: "12px 24px",

                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 200ms ease, color 200ms ease",
              }}


              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#7f77dd"
                e.currentTarget.style.color = "#FFFFFF"
              }}

              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? "#FFFFFF" : "#26215c"
                e.currentTarget.style.color = isDark ? "#26215c" : "#FFFFFF"
              }}
            >
              <span style={{ transition: "transform 200ms ease", display: "inline-block" }}>
                List your space
              </span>
            </Link>
          </div>

        </div>

        <div className="w-1/2 relative min-h-full hidden md:block overflow-hidden">
          <Image
            src="/images/1.png"
            alt="List your space"
            fill
            className="object-cover object-center"
          />
          {/* Subtle overlay for contrast */}
          <div className={`absolute inset-0 ${isDark ? 'bg-black/10' : 'bg-white/5'} pointer-events-none`} />
        </div>

      </div>
    </div>
  )
}