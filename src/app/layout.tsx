import { Metadata } from 'next'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import './globals.css'
import AuthProvider from '../utils/AuthProvider'
import { getServerSession } from 'next-auth'


export const metadata: Metadata = {
  title: 'A World in My Lens',
  description:
    'This is unique platform created for those who appreciate relaxation, travel, and the beauty around them.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
const session = await getServerSession();
// console.log('Global session',session);
  return (
    <>
      <html lang="en"
        className="!scroll-smooth">
        <body>
          <AuthProvider session={session}>
            <div className="wraper">
              <Header />

              <main>{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </body>
      </html>
    </>
  )
}
