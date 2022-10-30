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
        <title>Camp de Túria — Tots a una veu</title>
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
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 tracking-tighter leading-tight">
          Comarca del Camp de Túria
        </h2>
        <p className="text-sm mb-4">
          Es una de las comarcas más pobladas del centro de la provincia de
          Valencia, con más de 155.000 habitantes y 16 municipios. De creación
          reciente, a principios de los 70, el Camp de Turia debe su nombre al
          canal del río Turia con mayor aprovechamiento para riego que riega las
          zonas de Lliria, Casinos y Bétera.
        </p>
        <p className="text-sm mb-4">
          Así pues, aquí encontraréis toda la información, eventos y el día a
          día de los municipios de Benaguasil, Benissanó, Bétera, Casinos,
          l’Eliana, Gátova, Llíria, Loriguilla, Marines, Nàquera, Olocau, la
          Pobla de Vallbona, Riba-roja del Túria, San Antonio de Benagéber,
          Serra i Vilamarxant.
        </p>
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
