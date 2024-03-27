import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import '@/styles/globals.css';
export const metadata: Metadata = {
  title: '전국 보건소 위치 안내',
  description: '전국 보건소 위치 안내 서비스 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="dc40437fcdfd9169876fdc74e00e1e7be61335a6"
        />
        <link
          rel="canonical"
          href="https://health-center-47fe.vercel.app"
        ></link>
        <meta
          name="google-site-verification"
          content="sDXYzEQ88wOYsBWLe4mpWKfz034pytzYyJpUAymbrxk"
        />
        <GoogleAnalytics gaId="G-6FSPLKSHL5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
