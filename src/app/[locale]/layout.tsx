'use client'

import { type Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
// import '../styles/base.css';

import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import { createInstance } from 'i18next'
import { useRouter, usePathname } from 'next/navigation';

// export const metadata: Metadata = {
//   title: {
//     template: '%s - Meshkati',
//     default: 'Meshkati - Meshkati Solutions',
//   },
// }

export default async function Layout({ children }: { children: React.ReactNode, locale: any }) {

  // const router = useRouter()
  // console.log("i18n.language router, ", router)

  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // Assuming the language code is the first part of the path

  locale.length
  const i18nNamespaces = ['home'];
  const i18n_ = createInstance();
  const { i18n, resources } = await initTranslations(locale.length > 2 ? "en" : locale, i18nNamespaces, i18n_);
  // const router = useRouter();
  // const { locale } = router; // Extracting the locale from the URL


  // Function to get the language from the URL
  console.log("i18n.language, ", locale)


  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <body className="flex min-h-full flex-col" style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}>
          <RootLayout>{children}</RootLayout>

        </body>
      </TranslationsProvider>

    </html>
  )
}
