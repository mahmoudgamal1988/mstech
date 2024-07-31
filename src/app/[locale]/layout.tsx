'use client'

import {
  Suspense,
  useEffect,
  useState,
} from 'react'
import RootLayout from '@/components/RootLayout'
import '@/styles/tailwind.css'
import i18nextPromise from '@/app/i18n'
import i18next from 'i18next';
import { I18nextProvider, withTranslation } from 'react-i18next'
import Loader from '@/components/Loader'


export default function Layout({ children }: { children: React.ReactNode, locale: any }) {
  // const pathname = usePathname();
  // const locale = pathname.split('/')[1]; // Assuming the language code is the first part of the path

  const [isInitialized, setIsInitialized] = useState(false);

  console.log("wrapppper")

  useEffect(() => {
    i18nextPromise
      .then(() => {
        console.log("doneee")
        setIsInitialized(true);
      })
      .catch((error: string) => {
        console.error('Error initializing i18next:', error);
        setIsInitialized(false);
      });
  }, []);

  if (!isInitialized) {
    return <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col" style={{ direction: "ltr" }}>
        {/* <div>Loading translations...</div>; */}
        <Loader />
      </body>
    </html >
  }


  return (
    <I18nextProvider i18n={i18next}>
      <Suspense fallback={<div>Loading...</div>}>
        <html lang={i18next.language} className="h-full bg-neutral-950 text-base antialiased">
          <body className="flex min-h-full flex-col" style={{ direction: i18next.language === "en" ? "ltr" : "rtl" }}>
            <RootLayout>{children}</RootLayout>
          </body>
        </html >
      </Suspense>
    </I18nextProvider >

  )
}
