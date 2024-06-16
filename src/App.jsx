import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Main from "./components/Main";

export default function App () {
  return (
    <main id="layout" className="w-full min-h-screen grid grid-rows-[50px_1fr]">
      <Navbar />
      <div className="grid grid-cols-[8%_1fr] lg:grid-cols-[15%_1fr]">
        <Aside />
        <Main />
      </div>
    </main>
  )
}
