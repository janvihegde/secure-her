import { useState } from "react"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"

function App() {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  )

  return (

    <div>

      {!user ?
        <Register setUser={setUser} />
        :
        <Dashboard />
      }

    </div>

  )

}

export default App