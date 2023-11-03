import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="gradient-bg-welcome">
        <div className="navBAR">
          <div className="main-content">
            <h2>BayzCrypt |</h2>

            <div className="content">
              <h1>Wallet</h1>
              <h1>Privacy</h1>
              <h1>Explorer</h1>
              <h1>Send</h1>
            </div>
          </div>

          <div className="myBtn">
            <button className="button">BAYZCRYPT</button>
            <Link to="Wallet">
              <button className="btn">GET STARTED</button>
            </Link>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-400 my-2" />

        <div className="section">
          <h1 className="section-one">Be early to the future of finance</h1>
          <h3>
            Send Bitcoin, Ethereum, and other leading cryptocurrencies on a{" "}
            <br />
            platform trusted by millions.
          </h3>

          <div className="input-field">
            <input type="text" placeholder="Your email address" />
            <button className="btn-submit">SUBMIT</button>
          </div>
        </div>
      </div>

      <div className="card-main">
        <div className="card">
            <div className="card-one">
                <img src="https://www.blockchain.com/static/img/prices/prices-btc.svg" alt="" />
                <p>Send</p>
                <p className="card1">Trade</p>
            </div>
            <h3 className="bitcoin">Bitcoin <span>BTC</span></h3>
            <h3 className="amount">$26,563.32 <span className="span">+0.18%</span></h3>
        </div>

        <div className="card">
            <div className="card-one">
                <img src="https://www.blockchain.com/static/img/prices/prices-eth.svg" alt="" />
                <p>Send</p>
                <p className="card1">Trade</p>
            </div>
            <h3 className="bitcoin">Ethereum <span>ETH</span></h3>
            <h3 className="amount">$16,875.65 <span className="spanB">+1.34%</span></h3>
        </div>

        <div className="card">
            <div className="card-one">
                <img src="https://www.blockchain.com/static/img/prices/prices-xlm.svg" alt="" />
                <p>Send</p>
                <p className="card1">Trade</p>
            </div>
            <h3 className="bitcoin">Stellar <span>XLM</span></h3>
            <h3 className="amount">$12,456.73 <span className="spanA">-0.00%</span></h3>
        </div>

        <div className="card">
            <div className="card-one solana">
                <img className="images" src="https://www.blockchain.com/static/img/prices/prices-sol.svg" alt="" />
                <p>Send</p>
                <p className="card1">Trade</p>
            </div>
            <h3 className="bitcoin">Solana <span>SOL</span></h3>
            <h3 className="amount">$14,752.81 <span className="span">+0.05%</span></h3>
        </div>
      </div>

     <div className="information">
        <div className="infoOne">
            <h1>
                The only crypto wallet <br /> you’ll ever need
            </h1>
            <h3>
                Send crytoCurrencies with ease.
            </h3>
            <h3>
                Earn rewards on your crypto.
            </h3>
            <h3>
                Self-custody your crypto.
            </h3>
            <h3>
                Sleep better at night knowing only you can access your funds.
            </h3>
            <Link to="Wallet">
                <button className="btn-start">GET STARTED 👈🏼</button>
            </Link>
        </div>
        <div className="infoImg">
            <img src="https://thenewscrypto.com/wp-content/uploads/2022/11/FTX-Exciting-Update-Users-Can-Now-Send-Cryptos-Through-Email-Phone-Number.jpg" alt="" />
        </div>
        <div className="circle"></div>
     </div>
     <div className="h-[3px] w-full bg-gray-900 my-3" />


     <footer className=" footer">
        <h1>From zero to crypto in minutes</h1>
     </footer>
    </div>
  );
};

export default HomePage;
