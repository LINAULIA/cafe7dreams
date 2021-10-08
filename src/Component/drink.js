import { useContext, createContext, useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./drink.css";

const styles = makeStyles((theme) => ({
  slider: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(2),
    justifyContent: "flex-end",
    textAlign: "center",
    paddingBottom: theme.spacing(2),
    backgroundColor: "rgba(0,0,0,.1)",
    ["@media (max-width:600px)"]: {
      flexDirection: "column",
    },
  },
  label: {
    textTransform: "none",
  },
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    direction: "row",
    margin: "auto",
    marginBottom: theme.spacing(2),
    ["@media (max-width:600px)"]: {
      flexDirection: "column",
    },
  },
  button: {
    padding: "5%",
    "&:hover": {
      color: "#4f25c8",
    },
  },
}));
export default function Drink() {
  const classes = styles();
  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("  http://localhost:3333/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{background:"#E8DFD8"}}>
      <marquee style={{ height:"30px",fontWeight: "bold", color:"#FFFAFA" }} bgcolor="#523A28" align ="center" direction ="left" scrollamount="10"> Annyeong Chingu ^_^  Selamat datang di Cafe 7 Dream </marquee>
      <div style={{ marginTop: 20 }}>
      <center>
      <input className="search"
              onChange={(event) => handleIdPembelian(event, "name")}
              name="idPembelian"
              value={valueInput.name}
              style={{ color: "#6e0234"}}
              placeholder="Masukkan Nama Minuman"
            />
      <button type="submit" class="searchButton">
      <FontAwesomeIcon icon={faSearch} />
     </button>
            </center>
            <div className="marquee" >
            <center>
              <h3> ... Mencari data {valueInput.name} ...</h3>
        </center>
        </div>
        <Grid container md={11} spacing={4} className={classes.grid}>
          {data.map((value) => (
            <Grid item key={value.name} md={3}>
              <Card className={classes.paper} style={{borderRadius: "0.5rem",
                      boxShadow:"var(--box-shadow)", overflow:"hidden"}}>
                <CardActionArea>
                  <CardMedia
                    style={{
                      height: "200px",
                      margin: "auto",
                      //paddingTop: "5%",
                    }}
                    component="img"
                    className={classes.media}
                    image={value.durl}
                  />
                  <CardContent>
                  <Typography style={{fontWeight:"bold"}}>{value.drink}</Typography>
                    <Typography>Harga : {value.dprice} </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
