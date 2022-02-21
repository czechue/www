import type { ReactElement } from 'react'
import { Link, NavLink } from 'remix'

const getNavClassName = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'underline' : ''
}

export function Layout({
  children,
}: {
  children: ReactElement | ReactElement[]
}): ReactElement {
  return (
    <main className="container max-w-xl my-12">
      <div className="w-full flex justify-between items-baseline">
        <h1 className="text-3xl font-bold">
          <Link to="/">czechue</Link>
        </h1>
        <nav>
          <ul className="flex flex-row">
            <li className="ml-2">
              <NavLink to="/posts" className={getNavClassName}>
                posts
              </NavLink>{' '}
              |{' '}
            </li>
            <li className="ml-2">
              <NavLink to="/projects" className={getNavClassName}>
                projects
              </NavLink>{' '}
              |{' '}
            </li>
            <li className="ml-2">
              <NavLink to="/bio" className={getNavClassName}>
                bio
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-4">{children}</div>
    </main>
  )
}
