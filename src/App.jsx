import { BackToTop } from "./components/BackToTop/BackToTop";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Proyects } from "./components/Proyects/Proyects";
import { Skills } from "./components/Skills/Skills";
import ReactGA from "react-ga";
import { Chat } from "./components/Chat/Chat";
import { useState } from "react";
function App() {
  ReactGA.initialize("UA-255544623-1");
  const [toggle, setToggle] = useState(false)
  return (
    <div className="container-fluid">
      <Header />
      <Presentation />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
      <BackToTop />
      <Chat setToggle={setToggle} toggle={toggle} />
    </div>
  );
}

export default App;
