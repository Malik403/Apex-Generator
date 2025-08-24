import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bg from './Background'
import "./CSS/main.css"
import Nav from './Navigation'
import Home from './Home'
import EditNames from './EditNames'
import LegWea from './LegendsWeapons'
import { PlayerProvider } from './PlayerContext'
import Settings from './Settings'
import Generator from './Generator'
import BugReport from './BugReport'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerProvider>
    < Bg />
    < Nav />
    < Home />
    < LegWea />
    < EditNames />
    <Settings />
    < Generator />
    < BugReport />
    </PlayerProvider>
  </StrictMode>
)