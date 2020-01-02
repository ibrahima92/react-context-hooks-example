import React, { useContext } from "react";

import { ArticleContext } from "../context/articleContext";
import Article from "../components/Article/Article";

const Articles = () => {
  const { articles } = useContext(ArticleContext);
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
