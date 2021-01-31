import { ArticleItem } from '.';
import articleStyles from '../styles/Article.module.css';

export const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};
