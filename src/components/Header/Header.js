import { createMuiTheme, TextField, ThemeProvider, MenuItem, debounce } from "@material-ui/core";
import countries from "../../data/category";
// import { debounce } from '../../hooks/debounce';
// import { debounce } from "lodash";
import "./Header.css";

const Header = ({ word, setWord, category, setCategory, setMeanings, theme }) => {
  const activeTheme = createMuiTheme({
    palette: {
      primary: {
        main: theme ? "#000" : "#fff",
      },
      type: theme ? "light" : "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

  const handleText = debounce((text) => {
    setWord(text);
  }, 750);

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={activeTheme}>
          <TextField
            className="search"
            variant="outlined"
            id="outlined-basic"
            label="Search a Word"
            type="text"
            // value={word}
            onChange={(e) => handleText(e.target.value)}
            autoComplete='off'
          />
          <TextField
            variant="outlined"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            className="select"
          >
            {countries.map(({ label, value }, index) => (
              <MenuItem key={index} value={label}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;