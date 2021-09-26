import { useEffect, useState } from "react";
import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Definitions from "./components/Definitions/Definitions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import axios from "axios";

const ThemeSwitch = withStyles({
  switchBase: {
    color: grey[50],
    "&$checked": {
      color: grey[900],
    },
    "&$checked + $track": {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [theme, setTheme] = useState(false);

  const dictionaryApi = async () => {
    try {
      const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeanings(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    if (word && category) {
      dictionaryApi();
    }
    return () => {
      console.log('api unmounted');
    }
    // eslint-disable-next-line
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: theme ? "#fff" : "#282c34",
        color: theme ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 15,
            paddingTop: 10
          }}
        >
          <span>{theme ? "Dark" : "Light"} Mode</span>
          <ThemeSwitch
            checked={theme}
            onChange={() => setTheme(!theme)}
          />
        </div>
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          setMeanings={setMeanings}
          theme={theme}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            theme={theme}
            category={category}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;