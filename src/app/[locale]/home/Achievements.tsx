'use client';
import { Container } from '@/components/Container'
import { FooterContainer } from '@/components/FooterContainer'
import { PageIntro } from '@/components/PageIntro'
import { StatList, CustomStatList } from '@/components/StatList'

//values Images
import TRANSPARENCY from '@/images/values/TRANSPARENCY.png';
import { useTranslation } from 'react-i18next'
import { commaMethod } from '@/components/RootLayout';

export default function Achievements() {
  const { t, i18n } = useTranslation();

  return (
    <FooterContainer className="bg-grayBg max-w-full pb-20 pt-3 mt-20">
      <PageIntro eyebrow="" title={t("OUR_ACHIEVEMENTS")} extraTitleClass='mt-0 text-lightBg' mainClass='lg:mt-16' >
        <></>
      </PageIntro>
      <Container className="mt-20">
        <StatList>
          <CustomStatList
            value={t("OUR_ACHIEVEMENTS_USERS").split(commaMethod(i18n.language))[0]}
            label={t("OUR_ACHIEVEMENTS_USERS").split(commaMethod(i18n.language))[1]}
            extraClass='text-secondary'
            icon={TRANSPARENCY}
          />
          <CustomStatList
            value={t("OUR_ACHIEVEMENTS_UNITS").split(commaMethod(i18n.language))[0]}
            label={t("OUR_ACHIEVEMENTS_UNITS").split(commaMethod(i18n.language))[1]}
            extraClass='text-secondary'
            icon={TRANSPARENCY}
          />
          <CustomStatList
            value={t("OUR_ACHIEVEMENTS_CONNECTED").split(commaMethod(i18n.language))[0]}
            label={t("OUR_ACHIEVEMENTS_CONNECTED").split(commaMethod(i18n.language))[1]}
            extraClass='text-secondary'
            icon={TRANSPARENCY}
          />
          <CustomStatList
            value={t("OUR_ACHIEVEMENTS_PROJECTS").split(commaMethod(i18n.language))[0]}
            label={t("OUR_ACHIEVEMENTS_PROJECTS").split(commaMethod(i18n.language))[1]}
            extraClass='text-secondary'
            icon={TRANSPARENCY}
          />
        </StatList>
      </Container>
    </FooterContainer>
  )
}
