import { Suspense } from 'react'

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  )
}

export default Loadable
