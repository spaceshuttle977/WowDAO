import Head from '@/components/Head'
import Layout from '@/components/layouts/Layout'
import './globals.css'

export const metadata = {
  title: 'JELLYSPACE 2',
  description: 'Jellyspace - Supply Chain Management',
  author: 'jellyspace'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>        
        <Layout>
        { children }
        </Layout>              
      </body>
    </html>    
  )
}

