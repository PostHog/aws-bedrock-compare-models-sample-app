import "./globals.css";
import { PHProvider } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PHProvider>
      <body>{children}</body>
      </PHProvider>
    </html>
  );
}
