import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Subscribe from '../components/subscribe'
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllPostsForHome, getAllFeaturedPostsForHome, getPostAndMorePosts } from '../lib/api'
// import { getAllFeaturedPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, allFeaturedPosts: { edges: featuredEdges }, preview }) {
  // const heroPost = edges[0]?.node
  const heroFeaturedPost = featuredEdges[0]?.node
  let morePosts = edges
  const firstPostOfMorePosts = edges[0]?.node
  // const morePosts = edges.filter((item) => item !== featuredEdges[0]?.node)
  // Si última noticia es la misma que la de Portada, se elimina de morePosts.
  // console.log("El ID del heroFeaturedPost es: "+heroFeaturedPost.id)
  // console.log("El ID del firstPostOfMorePost es: "+firstPostOfMorePosts.id)

  if (firstPostOfMorePosts.id == heroFeaturedPost.id) {
    morePosts = edges.slice(1)
  }

  // if (featuredEdges[0]?.node.id !== heroFeaturedPost.id) {
  //   morePosts = edges.slice(1)
  // } else {
  //   morePosts
  // }




  return (
    <Layout preview={preview}>
      <Head>
        <title>Tots a una veu — La veu dels valencians</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
         {/* Global Site Tag (gtag.js) - Google Analytics */}
         <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      <Container>
        <Intro />
        {heroFeaturedPost && (
          <HeroPost
            title={heroFeaturedPost.title}
            coverImage={heroFeaturedPost.featuredImage}
            date={heroFeaturedPost.date}
            author={heroFeaturedPost.author}
            slug={heroFeaturedPost.slug}
            excerpt={heroFeaturedPost.excerpt}
            categories={heroFeaturedPost.categories}
            
          />
        )}
        <Subscribe />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  const allFeaturedPosts = await getAllFeaturedPostsForHome(preview)

  return {
    props: { allPosts, allFeaturedPosts, preview },
    revalidate: 10,
  }
}
