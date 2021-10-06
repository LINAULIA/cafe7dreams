import React, { Fragment } from "react";

class Kasir extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      food: [
        ["Gimbap", 35.000],
        ["Tteokbokki", 25.000],
        ["Jajangmyeon", 27.000],
        ["Japchae", 31.000],
        ["Maeundakbal", 32.000],
        ["Raboki", 21.000],
        ["Kimchi Pancake", 35.000],
        ["Tokebi", 23.000],
        ["Patbingsoo", 32.000],
        ["Kimchi Sujebi", 35.000],
        ["Jajangmyeon", 25.000],
      ],
      drink: [
        ["Orange Smoothie", 20.000],
        ["Strawberry Latte", 30.000],
        ["Strawberry Matcha Latte", 40.000],
        ["Strawberry Cheese Cake Latte", 45.000],
        ["Ice Americano", 20.000],
        ["Tiramisu Latte", 35.000],
        ["Cherry Coke", 20.000],
        ["Orange Matcha Latte", 30.000],
        ["Sweet Bean Green Tea Latte", 25.000],
        ["Orange Ade", 20.000],
        ["Mango Smoothie", 20.000],
        ["Mineral Water", 5.000],
      ],
      produk: {
        produk1: 0,
        produk2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { produk1, produk2} = this.state.produk;
    var total = produk1 + produk2;
    this.setState({
      ...this.state.produk,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { produk } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        produk: {
          ...produk,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const { food, drink, totalTagihan } = this.state;
    return (
      <div className="container">
        <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10"> Annyeong Chingu ^_^  Selamat datang di Cafe 7 Dream </marquee>
        <div className="titleWrapper">
          <center>
            <p className="judul" style={{ color:"#722ed1", fontFamily:"Arial", fontWeight: "bold" }}>Isi Data Pesanan</p>
            </center>
        </div>
          <div className="inputWrapper">
            <center>
            <label >Masukkan Nama:</label>
            </center>
            <div>
              <center>
              <input style={{
                  background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px"
                }}
                placeholder="Nama"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
            <center>
            <label >Masukkan Alamat:</label>
            </center>
            <div>
              <center>
              <input style={{
                  background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px"
                }}
                placeholder="Alamat"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
            <center>
            <label >Masukkan No Hp:</label>
            </center>
            <div>
              <center>
              <input
              style={{
                background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px"
              }}
                placeholder="No Hp"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
          </div>
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="sarapan">
                <br />
                <center>
                <label >Pilih Makanan :    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer", background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0">Makanan</option>
                  <Fragment>
                    {food.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                <br />
                <center>
                <label >Pilih Minuman :      </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk2"
                  style={{ cursor: "pointer", background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0">Minuman</option>
                  <Fragment>
                    {drink.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                <br />
              </div>
              <h2
                style={{
                  color: "#FF7F50",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                  fontFamily:"sans-serif",
                  fontStyle:"italic"
                }}
              >
                Total Harga {totalTagihan} 
              </h2>
            </div>
          </div>
        </div>
        </>
        </div>
    );
  }
}

export default Kasir;
