import { motion } from "framer-motion";
import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Milestones from './components/Milestones'
import Blog from './components/Blog'
import Video from './components/Video'
// import Testimonials from './components/Testimonials'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <motion.div>
      <ScrollToTop />
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      {/* <Testimonials /> */}
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
