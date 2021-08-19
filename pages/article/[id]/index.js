import HeaderInfo from "../../../components/HeaderInfo";

function Article({ article }) {
  return (
    <>
      <HeaderInfo title="ARTICLE" />
      <div>ARTICLE</div>
      <h3>{article.title}</h3>
      <br />
      <h4>{article.body}</h4>
    </>
  );
}

// 방법 1 서버에서 받아오는 것
// export async function getServerSideProps(context) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// }

// 방법 2 params 모두 받아오는 것
export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
    //없으면 404
  };
}

export default Article;
