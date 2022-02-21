import type { ReactElement } from 'react'
import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'

import { Layout } from '~/components/layout/Layout'
import type { Post } from '~/post'
import { getPosts } from '~/post'

export const loader: LoaderFunction = () => {
  return getPosts()
}

export default function Index(): ReactElement {
  const posts = useLoaderData<Post[]>()

  return (
    <Layout>
      <h2 className="text-xl underline">
        <Link to="posts">posts</Link>
      </h2>
      <ul className="mt-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link className="text-blue-500" to={`posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
