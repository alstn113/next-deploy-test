import HeaderInfo from "../../components/HeaderInfo";
import ArticleList from "../../components/ArticleList";

function Articles({ articles }) {
  return (
    <>
      <HeaderInfo title="ARTICLES" />
      <div>Article</div>
      <ArticleList articles={articles} />
    </>
  );
}

export default Articles;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}
