import React, { Fragment } from "react";

class Kasir extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      handphone: [
        ["Samsung", 3000000],
        ["Iphone", 8000000],
        ["Oppo", 20000000],
        ["Xiaomi", 1800000],
        ["Realme", 3000000],
        ["Huawei", 9000000],
        ["Vivo", 3000000],
        ["Lenovo", 2000000],
      ],
      laptop: [
        ["ROG", 50000000],
        ["Asus", 8000000],
        ["Lenovo", 4000000],
        ["LG", 5000000],
        ["Acer", 4500000],
        ["Apple", 10000000],
        ["HP", 4000000],
        ["Dell", 5000000],
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
    const { laptop, handphone, totalTagihan } = this.state;
    return (
      <div className="container">
        <marquee style={{ fontWeight: "bold" }} bgcolor="FFF300" align ="center" direction ="left" scrollamount="10"> SELAMAT DATANG DI L&W ELECTRONIC, PUSAT STORE HP DAN LAPTOP TERBESAR, DAN TERMURAH SEJAGAT RAYA </marquee>
        <div className="titleWrapper">
          <center>
            <p className="judul">Isi Data Pesanan</p>
            </center>
        </div>
          <div className="inputWrapper">
            <center>
            <label >Masukkan Nama:</label>
            </center>
            <div>
              <center>
              <input style={{
                  color: "#4B0082",
                  margin: "auto",
                  height: "20px",
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
                  color: "#4B0082",
                  margin: "auto",
                  height: "20px",
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
                color: "#4B0082",
                margin: "auto",
                height: "20px",
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
                <label >Pilih Handphone :    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer" }}
                >
                  <option value="0">Handphone</option>
                  <Fragment>
                    {handphone.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                <br />
                <center>
                <label >Pilih Laptop :      </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk2"
                  style={{ cursor: "pointer" }}
                >
                  <option value="0">Laptop</option>
                  <Fragment>
                    {laptop.map((makanan) => {
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
