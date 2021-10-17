import Link from "next/link";

const App = () => {
  return (
    <Link href={{
        pathname: '/blogs/[slug]',
        query: { slug: 22 },
      }}>
          post
    </Link>
  );
};
export default App;
