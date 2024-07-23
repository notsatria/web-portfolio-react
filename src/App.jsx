import styles from "./App.module.css";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
