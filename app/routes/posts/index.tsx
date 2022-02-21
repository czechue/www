import type { ReactElement } from 'react'
import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'

import type { Post } from '~/post'
import { getPosts } from '~/post'

export const loader: LoaderFunction = () => {
  return getPosts()
}

export default function Posts(): ReactElement {
  const posts = useLoaderData<Post[]>()

  return (
    <>
      <h2 className="text-xl underline">posts</h2>
      <ul className="mt-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link className="text-blue-500" to={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
