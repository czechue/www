import type { ReactElement } from 'react'
import { Outlet } from 'remix'

import { Layout } from '~/components/layout/Layout'

export default function Projects(): ReactElement {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
