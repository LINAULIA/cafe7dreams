import { useContext, createContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import "./header.css";

const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "0px",
    marginLeft: "60%",
  },
  line: {
    height: "5px",
    backgroundColor: "#483D8B",
  },
  link: {
    textDecoration: "none",
    float: "right",
  },
}));

const themes = {
  light: {
    background: "#8B008B",
    color: "#FFFAFA",
  },
  dark: {
    background: "#006400",
    color: "#FFFAFA",
  },
};

const ThemeContext = createContext();

export default function Footer() {
  const classes = styles();
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background}}>
        <Toolbar className={classes.bar}>
          <div >
            <Button className={classes.btn}>
              <Link
                to="/"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                | HOME |
              </Link>
            </Button>

            <Button>
              <Link
                to="/food"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                | Food |
              </Link>
            </Button>

            <Button>
              <Link
                to="/drink"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                | Drink |
              </Link>
            </Button>
            
            <Button>
              <Link
                to="/kasir"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                | BUY |
              </Link>
            </Button>
            <Button 
              style={{ color: valueTheme.color, fontWeight: "bold" }}
              className="Button"
              onClick={() =>
                setValueTheme(
                  valueTheme === themes.light ? themes.dark : themes.light
                )
              }
            >
              Change Color
            </Button>
          </div>
        </Toolbar>
        <div className={classes.line}></div>
      </div>
    </ThemeContext.Provider>
  );
}
