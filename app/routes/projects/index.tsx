import type { ReactElement } from 'react'
import type { LoaderFunction } from 'remix'

import { getPosts } from '~/post'

export const loader: LoaderFunction = () => {
  return getPosts()
}

export default function Projects(): ReactElement {
  return (
    <>
      <h2 className="text-xl underline">projects</h2>
      <ul>
        <li>Project1</li>
        <li>Project2</li>
        <li>Project3</li>
      </ul>
    </>
  )
}
