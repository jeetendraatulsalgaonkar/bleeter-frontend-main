import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.tsx';
import Explore from './pages/Explore/Explore.tsx';
import Notifications from "./pages/Notifications/Notifications.tsx";
import NavigationDrawer from "./components/NavigationDrawer/NavigationDrawer.tsx";
import Communities from "./pages/Communities/Communities.tsx";
import Lists from "./pages/Lists/Lists.tsx";
import Messages from "./pages/Messages/Messages.tsx";
import Bookmarks from "./pages/Bookmarks/Bookmarks.tsx";

const App = (): JSX.Element => {

  return (
    <>
      <NavigationDrawer key='NavigationDrawer' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  )
}

export default App
