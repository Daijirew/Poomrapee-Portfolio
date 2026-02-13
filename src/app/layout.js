import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata = {
  title: 'Poomrapee Patum | Software Engineer & Full-Stack Developer',
  description: 'Portfolio of Poomrapee Patum — Software Engineer specializing in Golang, React, DevOps, and Automated Systems. Building scalable, production-ready applications.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Golang', 'React', 'DevOps', 'Portfolio'],
  authors: [{ name: 'Poomrapee Patum' }],
  openGraph: {
    title: 'Poomrapee Patum | Software Engineer',
    description: 'Bridging the gap between high-quality code and robust infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
