import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-3xl bg-white px-3 py-2 rounded-3xl">

          <button onClick={() => setColor("red")} className="outline-none px-4 py-2 rounded-full text-white shadow-3xl" style={{ backgroundColor: "red" }}>red</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-2 rounded-full text-white shadow-3xl" style={{ backgroundColor: "green" }}>green</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-2 rounded-full text-white shadow-3xl" style={{ backgroundColor: "blue" }}>blue</button>

          <button onClick={() => setColor("violet")} className="outline-none px-4 py-2 rounded-full text-black shadow-3xl" style={{ backgroundColor: "violet" }}>violet</button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-2 rounded-full text-white shadow-3xl" style={{ backgroundColor: "olive" }}>olive</button>

          <button onClick={() => setColor("purple")} className="outline-none px-4 py-2 rounded-full text-white shadow-3xl" style={{ backgroundColor: "purple" }}>purple</button>

          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-2 rounded-full text-black shadow-3xl" style={{ backgroundColor: "yellow" }}>yellow</button>

          <button onClick={() => setColor("teal")} className="outline-none px-4 py-2 rounded-full text-white shadow-3xl" style={{ backgroundColor: "teal" }}>teal</button>
          
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-2 rounded-full text-black shadow-3xl" style={{ backgroundColor: "pink" }}>pink</button>
        </div>
        </div>
      </div>
  )
}

export default App
