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
  console.log(categories[1].node.posts.edges[1].node.title); // Aquí sacamos un título de un post.

  console.log(categories) // Aquí mostramos el objeto completo con 9 nodos.

  // Función para recoger los post de cada categoría en una lista. No funciona.

  function postsByCategories (categories) {
    
    let categoriesNumber = 0;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i] ) {
        categoriesNumber++;
      }
    }
    return categoriesNumber;
  }
  console.log(postsByCategories(categories))

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
                coverImage={node.featuredImage}
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
