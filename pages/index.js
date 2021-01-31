import { server } from '../config';
import { ArticleList } from '../components';

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

// inner api
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// outer api
// export const getStaticProps = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=6'
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
