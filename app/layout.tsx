



// import type { Metadata } from 'next'
// import './globals.css'
// import Header from './components/Header'
// import Footer from './components/Footer'

// export const metadata: Metadata = {
//   title: 'Daniel Portfolio',
//   description: 'Turning ideas into powerful digital experiences.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="font-sans bg-primary text-text-primary min-h-screen">
//         <Header />
//         <main className="pt-16">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   )
// }


import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Portfolio',
  description: 'Turning ideas into powerful digital experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
