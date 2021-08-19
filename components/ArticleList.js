import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((post) => (
        <div key={post.id}>
          <ArticleItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
