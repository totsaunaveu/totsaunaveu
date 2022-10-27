import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Subscribe from '../components/subscribe'
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllPostsForHome, getAllFeaturedPostsForHome } from '../lib/api'
// import { getAllFeaturedPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const heroFeaturedPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>DELS VALENCIANS — La veu dels valencians</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />
        {heroFeaturedPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            categories={heroPost.categories}
            
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
