import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react"
import { Context } from "./context/Context"

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/Blog-Website" element={<Home />} />
        <Route path="/Blog-Website/register" element={user? <Home /> : <Register />}/>
        <Route path="/Blog-Website/login" element={user ? <Home /> : <Login />}/>
        <Route path="/Blog-Website/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/Blog-Website/post/:postId" element={<Single />}/>
        <Route path="/Blog-Website/write" element={user ? <Write /> : <Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
