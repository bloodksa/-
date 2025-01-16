import './globals.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'بوت صانع البوتات',
  description: 'أنشئ بوتات تلجرام خاصة بك بسهولة وسرعة!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}

