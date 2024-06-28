import { getAllPostIds, getPostData } from '../../lib/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-academia-dark text-academia-light">
      <div className="bg-academia-medium bg-opacity-90 p-8 rounded-lg shadow-lg max-w-3xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">{postData.title}</h1>
        <article className="prose prose-invert prose-lg mx-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
