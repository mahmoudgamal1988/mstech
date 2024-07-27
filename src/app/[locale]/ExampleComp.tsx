'use client';

import { useTranslation } from 'react-i18next';


export default function ExampleComp() {

  const { t } = useTranslation();

  return (
    <h3>
      {t('PAGE_TITLE')}
    </h3>
  )
}
