import { useContext, createContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";


const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "0px",
    float:"right",
  },
  line: {
    height: "65px",
  },
  link: {
    textDecoration: "none",
  },
}));

const themes = {
  light: {
    background: "#885f43",
    color: "#201710",
  },
  dark: {
    background: "#201710",
    color: "#faf8f6",
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
        <Toolbar position="sticky" className={classes.bar}>
          <div >
            <Button className={classes.btn}>
              <Link
                to="/"
                className={classes.link}
                style={{color: valueTheme.color, fontWeight: "bold"}}
              >
                | HOME |
              </Link>
            </Button>

            <Button>
              <Link
                to="/food"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold"}}
              >
                | Food |
              </Link>
            </Button>

            <Button>
              <Link
                to="/drink"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold"}}
              >
                | Drink |
              </Link>
            </Button>
            
            <Button>
              <Link
                to="/kasir"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold"}}
              >
                | BUY |
              </Link>
            </Button>
            <Button 
              style={{ color: valueTheme.color, fontWeight: "bold"}}
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
