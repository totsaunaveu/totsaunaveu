import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import OpinionPosts from "../components/opinion-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllOpinionPosts } from "../lib/api";
import Colabora from "../components/colabora";

export default function Opinion({ AllOpinionPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const opinionPosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Opinión — DELS VALENCIANS</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />
        <h2 className="mt-12 mb-4 text-center text-5xl md:text-6xl font-semibold tracking-tighter leading-tight">
          Tribunas de Opinión
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
        <Colabora />
        {opinionPosts.length > 0 && <OpinionPosts posts={opinionPosts} />}
        <Subscribe />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const AllOpinionPosts = await getAllOpinionPosts(preview);

  return {
    props: { AllOpinionPosts, preview },
    revalidate: 10,
  };
};
