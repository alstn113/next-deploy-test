import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ul>
        <ol>
          <Link href="/">HOME</Link>
        </ol>
        <ol>
          <Link href="/article">ARTICLE</Link>
        </ol>
      </ul>
    </nav>
  );
}

export default Nav;
