import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import OpinionPosts from "../components/opinion-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllCTPosts } from "../lib/api";


export default function CampDeTuria({ AllCTPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const ctPosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Camp de Túria — DELS VALENCIANS</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />
        <h2 className="mt-12 mb-4 text-center text-5xl md:text-6xl font-semibold tracking-tighter leading-tight">
          Camp de Túria
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
        {ctPosts.length > 0 && <OpinionPosts posts={ctPosts} />}
        <Subscribe />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const AllCTPosts = await getAllCTPosts(preview);

  return {
    props: { AllCTPosts, preview },
    revalidate: 10,
  };
};
