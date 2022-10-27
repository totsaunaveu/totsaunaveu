import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import OpinionPosts from "../components/opinion-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllCMPosts } from "../lib/api";

export default function CampDeMorvedre({ AllCMPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const cmPosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Camp de Morvedre — DELS VALENCIANS</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />
        <h2 className="mt-12 mb-4 text-center text-5xl md:text-6xl font-semibold tracking-tighter leading-tight">
          Camp de Morvedre
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
        {cmPosts.length > 0 && <OpinionPosts posts={cmPosts} />}
        <Subscribe />
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 tracking-tighter leading-tight">
          Comarca del Camp de Morvedre
        </h2>
        <p className="text-sm mb-4">
          Esta comarca nace como tal a finales de los años 90 y posee una
          reducida extensión, siendo la más pequeña de toda Valencia. A pesar de
          ello es una comarca con una alta densidad de población con 90.063
          habitantes en su totalidad, debido en su gran parte a la población de
          Sagunto. ¿Por qué se llama Camp de Morvedre? La etimología apunta a la
          antigua denominación de Murviedro, nombre que recibió Sagunto hasta el
          siglo XIX.
        </p>
        <p className="text-sm mb-4">
          Así pues, aquí encontraréis toda la información, eventos y el día a
          día de los municipios de Sagunto, Canet de Berenguer, Faura, Gilet,
          Benifairó de los Valles, Cuartell, Estivella, Albalat de Taronchers,
          Algimia de Alfara, Petrés, Quart de les Valls, Torres Torres,
          Benavites, Alfara de la Baronía, Algar de Palancia y Segart.
        </p>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const AllCMPosts = await getAllCMPosts(preview);

  return {
    props: { AllCMPosts, preview },
    revalidate: 10,
  };
};
