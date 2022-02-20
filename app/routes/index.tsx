import type { ReactElement } from 'react'
import { Link } from 'remix'

export default function Index(): ReactElement {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1 className="text-3xl font-bold underline">Hello tailwind</h1>
      <Link to="/posts">Posts</Link>
    </div>
  )
}
