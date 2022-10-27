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
          L'Horta Nord es la tercera comarca más poblada de la Provincia de
          València, justo detrás de l'Horta Oest, con poco más de 221.000
          habitantes y dónde encontramos como principales cascos urbanos
          Burjassot, Alboraya, Moncada, Puçol, Massamagrell y Godella.
        </p>
        <p className="text-sm mb-4">
          Los pueblos y ciudades que integran la comarca son: Albalat dels
          Sorells, Alboraya, Albuixech, Alfara del Patriarca, Almàssera,
          Burjassot, Bonrepòs i Mirambell, El Puig, Emperador, Foios, Godella,
          La Pobla de Farnals, Massalfassar, Massamagrell, Meliana, Moncada,
          Museros, Puçol, Rafelbunyol, Rocafort, Tavernes Blanques, Vinalesa.
        </p>
        <p className="text-sm mb-4">
          L'Horta Norte estaba integrada anteriormente en la comarca de l'Horta
          de València, así como l'Horta Oeste, l'Horta Sur y València Ciudad.
          Aun así, a causa del crecimiento de todas estas comarcas, se tuvo que
          dividir en las cuatro que conocemos actualmente. L'Horta Norte, en
          particular, fue creada en 1989, y ya formaba parte del mapa de
          comarcas de Emili Beüt publicado en 1934.
        </p>
        <p className="text-sm mb-4">
          Por otro lado, en El Puig encontramos el monasterio de Santa Maria.
          Allí, en esa localidad y en 1237, fue donde se libró la batalla final
          de la conquista de València por Jaime I, la llamada Batalla del Puig.
          Con motivo de agradecimiento, el rey lo hizo construir.
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
