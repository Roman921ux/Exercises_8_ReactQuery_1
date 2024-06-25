import { Route, Routes } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'
import EpisodePage from './pages/EpisodePage'
import CharacterPage from './pages/CharacterPage'

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/location' element={<LocationPage />} />
          <Route path='/episode' element={<EpisodePage />} />
          <Route path='/character' element={<CharacterPage />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div`
  
`
