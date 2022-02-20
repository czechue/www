/* eslint-disable react/no-danger */
import type { ReactElement } from 'react'
import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'

import { getPost } from '~/post'
import type { Post } from '~/post'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')

  return getPost(params.slug)
}

export default function PostSlug(): ReactElement {
  const post = useLoaderData<Post>()

  return (
    <article
      className="prose prose-neutral"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  )
}
