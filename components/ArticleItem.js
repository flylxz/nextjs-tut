import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

export const ArticleItem = ({ article }) => {
  return (
    // <Link key={article.id} href='/article/[id]' as={`/article/${article.id}`}>
    <Link key={article.id} href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};
