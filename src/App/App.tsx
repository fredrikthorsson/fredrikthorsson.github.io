import Counter from "../Components/Counter";
import Footer from "../Components/Footer";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Counter sinceDate="2025-04-01" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
