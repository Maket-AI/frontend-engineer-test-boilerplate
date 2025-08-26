import '../index.css'

import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => {
    return (
      <div className='w-[100dvw] h-[100dvh] bg-white text-black'>
        <Outlet />
      </div>
    )
  },
})
