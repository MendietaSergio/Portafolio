import { Contact } from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import { Presentation } from './components/Presentation/Presentation'
import { Proyects } from './components/Proyects/Proyects'
import { Skills } from './components/Skills/Skills'

function App() {

  return (
    <div className="container">
        <Header />
        <Presentation/>
        <Skills/>
        <Proyects/>
        <Contact/>
    </div>
  )
}

export default App
