import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import OpinionPosts from "../components/opinion-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllHortaPosts } from "../lib/api";
import Colabora from "../components/colabora";

export default function HortaNord({ AllHortaPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const hnPosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>L'Horta — DELS VALENCIANS</title>
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
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 tracking-tighter leading-tight">
          Comarca de l'Horta Nord
        </h2>
        <p className="text-sm mb-4">
          En esta sección englobamos toda la actualidad de las comarcas de l’
          Horta Nord, l’ Horta Sud y l’ Horta Oest. Aunque originariamente estas
          tres, junto con Valencia ciudad, conformaban una única comarca,
          llamada l’Horta de València, por el crecimiento de todas sus
          poblaciones, tuvo que dividirse en cuatro a finales de los años 80.
        </p>
        <p className="text-sm mb-4">
          En la actualidad l’Horta Nord cuenta con 221.000 habitantes, l’Horta
          Sud con 80.000 y l’Horta Oest con 360.000. Su etimología tiene que
          ver, lógicamente, con la orientación geográfica de estas comarcas
          respecto a la ciudad de Valencia y su modelo económico tradicional, la
          huerta valenciana.
        </p>
        <p className="text-sm mb-4">
          Así pues, aquí encontraréis toda la información, eventos y el día a
          día de los municipios de Albalat dels Sorells, Alboraia, Albuixech,
          Alfara del Patriarca, Almàssera, Alaquàs, Albal, Alcàsser, Aldaia,
          Alfafar, Benetússer, Beniparrell, Burjassot, Bonrepòs i Mirambell,
          Catarroja, El Puig, Emperador, Foios, Godella, La Pobla de Farnals,
          Lloc Nou de la Corona, Massalfassar, Massamagrell, Manises,
          Massanassa, Mislata, Meliana, Moncada, Museros, Paterna, Paiporta,
          Picanya, Picassent, Puçol, Rafelbunyol, Rocafort, Quart de Poblet,
          Sedaví, Silla, Tavernes Blanques, Torrent, Vinalesa y Xirivella.
        </p>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const AllHortaPosts = await getAllHortaPosts(preview);

  return {
    props: { AllHortaPosts, preview },
    revalidate: 10,
  };
};
