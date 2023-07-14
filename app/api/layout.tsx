import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbarbar />
        <main> 
          {children}
        </main>
        <Footerer />
        </body>
    </html>
  )
}
