export const metadata = {
  title: 'love2watch - YouTube Channel Logo',
  description: 'Custom logo for love2watch YouTube channel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
