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

export default function Index({ allPosts: { edges }, allFeaturedPosts: { edges: featuredEdges }, preview }) {
  // const heroPost = edges[0]?.node
  const heroFeaturedPost = featuredEdges[0]?.node
  // const morePosts = edges.slice(heroFeaturedPost)
  const morePosts = edges.filter((item) => item !== featuredEdges[0]?.node)

  return (
    <Layout preview={preview}>
      <Head>
        <title>Tots a una veu — La veu dels valencians</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
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
