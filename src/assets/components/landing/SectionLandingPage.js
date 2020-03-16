import React, { Component } from "react";
import "./SectionLandingPage.scss";

class SectionLandingPage extends Component {
  render() {
    return (
      <div className="container-section">
        <div className="text-container">
          <div className="text-section">
            <h1>
              Crowdfunding Platform <br />
              to help Villagers With <br /> Health & Medical Needs
            </h1>
            <p>
              Desasehat adalah platform untuk membuat kampanye,dan menyalurkan
              <br />
              donasi secara peer to peer bagi warga desa yang membutuhkan
              bantuan
              <br />
              dan pembiayaan medis dari pada #Dermawan dari seluruh indonesia
            </p>
            <img
              className="google"
              src="https://connect-prd-cdn.unity.com/20190708/p/images/240287ba-a082-4173-835f-bfda57a52df8_Download_orange_button.png"
              alt="/"
            />
          </div>
          <div className="image-section">
            <img
              src="https://mudanews.com/wp-content/uploads/2020/02/WhatsApp-Image-2020-02-22-at-19.14.41.jpeg"
              alt=""
            />
          </div>
        </div>

        <div className="grid-row">
          <div className="item1">
            <div className="inside-grid1">
              <h1>Desasehat App</h1>
              <p>
                Dengan fitur "Health Campaign",sekarang anda tidak perlu <br />{" "}
                bingung lagi untuk mendapatkan bantuan dan pembiayaan <br />
                medis dari ribuan #Dermawan Desasehat
              </p>
              <img
                src="https://lh3.googleusercontent.com/proxy/G41RMh_tSg4OEMpXQuBTluvsRxioFGpkjd3aLgPNpWRQ9jF2gulFeMkUIKX2w8VlhYF1n0ZU81AlUQUyEcjKV-IqYiWTgdS2PGxzJ9PS4IvwLl1WTT8JJtjGGPirGTHprtnkv53fanInucs8ny81uJIG0pOrwvurPbZRDEUvjTfiaA"
                alt=""
              />
            </div>
          </div>
          <div className="item2">
            <div className="inside-grid2">
              <h1>About Us</h1>
              <p>
                Aplikasi Desasehat dikelola oleh Yayasan Desasehat. <br /> Kami
                bertekad untuk menghubungkan warga <br /> yang membutuhkan
                bantuan dan pembiayaan <br /> medis,kepada para #Dermawan
                melalui teknologi
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mars_Hubble.jpg/240px-Mars_Hubble.jpg"
                alt=""
              />
            </div>
            <div className="footer-setion">
              <h3>Powered by</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionLandingPage;
