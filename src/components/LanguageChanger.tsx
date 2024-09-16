'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';
import { useCallback, useEffect } from 'react';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const router = useRouter();
    const currentPathname = usePathname();
    const currentLocale = currentPathname.length ? currentPathname.split("/")[1]
        : i18n.language;

    useEffect(() => {
        // console.log("currentLocale currentLocale", currentLocale)
        // console.log("currentLocale currentLocale currentPathname.length", currentPathname.length)

        if (currentPathname.length) {
            // console.log("currentLocale", currentLocale)
            i18n.changeLanguage(currentLocale)
        }
    }, [currentLocale, currentPathname, i18n]);

    function removeLanguagePrefix(url: string) {
        return url.replace(/^\/(en|ar)/, '');
    }

    // console.log("currentPathname", currentPathname)
    const handleChange = useCallback((e: any) => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;


        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            const updatedUrl = removeLanguagePrefix(currentPathname);

            router.push('/' + newLocale + updatedUrl);

            // router.push(
            //     currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            // );
        }
        i18n.changeLanguage(newLocale)
        router.refresh();
    }, [currentLocale, currentPathname, i18n, router]);

    return (
        <div className="flex justify-center items-center">
            <select
                onChange={handleChange}
                value={currentLocale}
                className="appearance-none cursor-pointer bg-white border border-gray-300 text-gray-700 py-2 px-1 pr-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <option value="en" className="text-gray-700">English</option>
                <option value="ar" className="text-gray-700">Arabic</option>
            </select>
        </div>
    );
}