// import { useRouter } from 'next/router';
import { server } from '../../../config';
import Link from 'next/link';
import { Meta } from '../../../components';

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>&larr; Go Back</Link>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.API_URL}/api/articles/${params.id}`);
  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {
      id: `${id}`,
      // id: id.toString(),
    },
  }));

  return { paths, fallback: false };
};

// outer api
// // if ssr
// // export const getServerSideProps = async (context) => {

// // if ssg with getStaticPaths
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: { article },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({
//     params: {
//       //   id: `${id}`,
//       id: id.toString(),
//     },
//   }));

//   return { paths, fallback: false };
// };

export default article;
