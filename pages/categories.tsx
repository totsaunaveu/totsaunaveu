import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import { getAllCategories } from "../lib/api";
import CategoryPreview from "../components/category-preview";

export default function Index({ allCategories: { edges }, preview }) {
  const categories = edges;


  return (
    <Layout preview={preview}>
      <Head>
        <title>DELS VALENCIANS — La veu dels valencians</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <Intro />

        <section>
          <div>
            {categories.map(({ node }) => (
              <CategoryPreview
                key={node.slug}
                name={node.name}
                slug={node.slug}
                description={node.description}
              />
            ))}
          </div>
        </section>

        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <Subscribe />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </Layout>
  );
}



export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allCategories = await getAllCategories(preview);

  return {
    props: { allCategories, preview },
    revalidate: 10,
  };
};
