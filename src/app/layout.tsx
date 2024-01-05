import { Metadata } from 'next'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import './globals.css'
import AuthProvider from '../utils/AuthProvider'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'A World in My Lens',
  description:
    'Discover the vibrant stories and perspectives behind A World in My Lens. Explore our journey, mission, and passion for capturing the world through our unique lens.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()

  return (
    <>
      <html lang="en" className="!scroll-smooth">
        <body>
          <AuthProvider session={session}>
            <div>
              <Header />
              <main id="app-container">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </body>
      </html>
    </>
  )
}
