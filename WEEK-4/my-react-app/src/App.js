import "./styles.css";
import { Navbar, Banner, Welcome, Main, Footer } from "./components/page";

function App() {
  return (
    <div className="App">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <header className="App-header">
        <Navbar />
      </header>
      <Banner />
      <Welcome />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
