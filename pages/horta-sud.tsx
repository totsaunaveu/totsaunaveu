import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import OpinionPosts from "../components/opinion-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllHSPosts } from "../lib/api";

export default function HortaSud({ AllHSPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const hsPosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Horta Sud — DELS VALENCIANS</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />
        <h2 className="mt-12 mb-4 text-center text-5xl md:text-6xl font-semibold tracking-tighter leading-tight">
          Horta Sud
        </h2>
        {heroPost && (
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
        {hsPosts.length > 0 && <OpinionPosts posts={hsPosts} />}
        <Subscribe />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const AllHSPosts = await getAllHSPosts(preview);

  return {
    props: { AllHSPosts, preview },
    revalidate: 10,
  };
};
