import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full h-full flex flex-col gap-8 items-center justify-center font-black text-6xl">
      <p>👇</p>
      <p>Grid background screen here</p>
    </div>
  )
}

export default App
