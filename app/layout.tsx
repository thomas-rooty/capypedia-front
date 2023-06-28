import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Capypedia - The Capybara Encyclopedia',
  description: 'The Capybara Encyclopedia, a wiki for all things capybara.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}
