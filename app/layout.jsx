import { Courier_Prime } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/ui/theme-provider"

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: "400",
})

export const metadata = {
  title: 'Git Hub API',
  description: 'Get information about users from GitHub API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={courier.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
