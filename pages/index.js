import Link from 'next/link';
import { getSortedPostsData } from '../lib/markdown';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-academia-dark text-academia-light">
      <div className="bg-academia-medium bg-opacity-90 p-8 rounded-lg shadow-lg max-w-3xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Markdown Notes</h1>
        <ul className="space-y-4">
          {allPostsData.map(({ id, title }) => (
            <li key={id} className="text-center">
              <Link href={`/posts/${id}`}>
                <p className="text-2xl text-academia-light hover:text-academia-blue transition duration-200">{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
