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
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
