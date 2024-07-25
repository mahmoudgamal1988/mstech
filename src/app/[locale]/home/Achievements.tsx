'use client';
import { Container } from '@/components/Container'
import { FooterContainer } from '@/components/FooterContainer'
import { PageIntro } from '@/components/PageIntro'
import { StatList, CustomStatList } from '@/components/StatList'

//values Images
import TRANSPARENCY from '@/images/values/TRANSPARENCY.png';
import { useTranslation } from 'react-i18next'

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <FooterContainer className="bg-grayBg max-w-full pb-40 pt-14 mt-20">
      <PageIntro eyebrow="" title="Our Achievements" extraTitleClass='mt-0 text-lightBg' mainClass='lg:mt-16' >
        <></>
      </PageIntro>
      <Container className="mt-20">
        <StatList>
          <CustomStatList value="10k" label="Users" extraClass='text-secondary' icon={TRANSPARENCY} />
          <CustomStatList value="12k" label="Connected devices" extraClass='text-secondary' icon={TRANSPARENCY} />
          <CustomStatList value="3k" label="Managed Units" extraClass='text-secondary' icon={TRANSPARENCY} />
          <CustomStatList value="115" label="Projects" extraClass='text-secondary' icon={TRANSPARENCY} />
        </StatList>
      </Container>
    </FooterContainer>
  )
}
