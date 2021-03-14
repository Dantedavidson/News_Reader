import logo from "./logo.svg";
import "./App.css";
import Guardian from "guardian-js";
import { useEffect } from "react";

function App() {
  const guardian = new Guardian("75ec14d8-7fc1-4d52-83fc-5d3aff32f523", false);

  async function getNewsGuardian() {
    try {
      const resp = await guardian.content.search("politics", {
        showReferences: "author",
      });
      const data = JSON.parse(resp.body);
      console.log(data.response.results);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getNewsGuardian();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
