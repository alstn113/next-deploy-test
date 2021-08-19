import Link from "next/link";

const ArticleItem = ({ post }) => {
  return (
    <>
      <Link href={`/article/${post.id}`}>
        <div>
          {post.id} {post.title}
        </div>
      </Link>
      <hr />
    </>
  );
};

export default ArticleItem;
