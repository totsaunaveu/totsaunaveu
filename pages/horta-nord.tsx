import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import OpinionPosts from "../components/opinion-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllHNPosts } from "../lib/api";
import Colabora from "../components/colabora";

export default function HortaNord({ AllHNPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const hnPosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Horta Nord — DELS VALENCIANS</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />
        <h2 className="mt-12 mb-4 text-center text-5xl md:text-6xl font-semibold tracking-tighter leading-tight">
          Horta Nord
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
        {hnPosts.length > 0 && <OpinionPosts posts={hnPosts} />}
        <Subscribe />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const AllHNPosts = await getAllHNPosts(preview);

  return {
    props: { AllHNPosts, preview },
    revalidate: 10,
  };
};
