import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { type Article, type MDXEntry, loadArticles } from '@/lib/mdx'
import { PageIntro } from '@/components/PageIntro'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
}) {
  let allArticles = await loadArticles()
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

    console.log("article", )
  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="" title={article.title} centered extraTitleClass='text-white' extraChildrenClass='text-white'>
            <p>{article.description}</p>
          </PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-72">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40 mb-8"
          title="More articles"
          pages={moreArticles}
        />
      )}

      {/* <ContactSection /> */}
    </>
  )
}
