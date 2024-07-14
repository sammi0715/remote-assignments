import React from "react";
import "./styles1.css";
import { useState } from "react";

//let menuIcon = document.querySelector("#menu-icon");
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <>
      <h1>
        <a href="https://developers.google.com/?hl=zh-tw" className="logo">
          for Developers
        </a>
      </h1>
      <ul className="navbar">
        <li>
          <a href="https://developers.google.com/products?hl=zh-tw">產品</a>
        </li>
        <li>
          <a href="https://developers.google.com/solutions/catalog?hl=zh-tw">
            解決方案
          </a>
        </li>
        <li>
          <a href="https://developers.google.com/events?hl=zh-tw">事件</a>
        </li>
        <li>
          <a href="https://developers.google.com/learn?hl=zh-tw">暸解詳情</a>
        </li>
      </ul>
      <div className="menu-icon">
        <i
          className="bx bx-menu"
          onClick={showSidebar}
          style={{ color: "#5f6368" }}
        ></i>
      </div>

      <div className={sidebar ? "side-navbar active" : "side-navbar"}>
        <ul>
          <li>
            <a href="https://developers.google.com/products?hl=zh-tw">產品</a>
          </li>
          <li>
            <a href="https://developers.google.com/solutions/catalog?hl=zh-tw">
              解決方案
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/events?hl=zh-tw">事件</a>
          </li>
          <li>
            <a href="https://developers.google.com/learn?hl=zh-tw">暸解詳情</a>
          </li>
        </ul>
        <i className="bx bx-x" id="close-sidebar" onClick={hideSidebar}></i>
      </div>
    </>
  );
};

const Banner = () => {
  return (
    <div id="banner">
      <span id="banner-text">
        Build with Gemini, our largest and most capable AI model.
        <a href="https://aistudio.google.com/app/prompts/new_chat/?utm_source=gfd&amp;utm_medium=referral&amp;utm_campaign=top_bar&amp;hl=zh-tw">
          Get an API key.
        </a>
      </span>
    </div>
  );
};

const Welcome = () => {
  const [click, IsClicked] = useState(false);
  const onclickedSection = () => {
    IsClicked(true);
  };
  return (
    <section id="welcome-section">
      {!click ? (
        <div id="first-describe" onClick={onclickedSection}>
          <h2>重溫 2024 年 Google I/O 大會</h2>
          <p>
            倒轉並重溫 2024 年 Google I/O 大會。主題演講和講座現已推出隨選影片。
          </p>
          <a
            className="video-btn"
            href="https://io.google/2024/?utm_source=devsite-hpp&amp;utm_medium=embedded_marketing&amp;utm_campaign=dgc-io-24&amp;hl=zh-tw"
          >
            觀看隨選影片
          </a>
        </div>
      ) : (
        <div id="clicked-describe">
          <h2>Have a Good Time!</h2>
        </div>
      )}
    </section>
  );
};

const products = {
  show: [
    {
      src: "https://img.icons8.com/?size=100&id=P2AnGyiJxMpp&format=png&color=000000",
      title: "Android",
      description:
        "這些新型工具可協助您在各種 Android裝置上打造深受使用者喜愛的體驗。",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000",
      title: "Google Cloud",
      description:
        "新客戶可獲得價值 $300 美元的免費抵免額，方便客戶部署動態網站、啟動VM 和建構三層式網頁應用程式等。",
    },
    {
      src: "https://img.icons8.com/?size=100&id=ejub91zEY6Sl&format=png&color=000000",
      title: "Chrome",
      description: "可協助您打造優質網路體驗的新型工具和功能。",
    },
    {
      src: "https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000",
      title: "Google Play",
      description: "拓展業務、提升應用程式品質、吸引目標對象並賺取收益。",
    },
  ],
  hide: [
    {
      src: "https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000",
      title: "Google Play",
      description: "拓展業務、提升應用程式品質、吸引目標對象並賺取收益。",
    },
    {
      src: require("../img/firebase-icon.svg").default,
      title: "Firebase",
      description:
        "透過應用程式開發平台，您可以建構及拓展使用者喜愛的應用程式和遊戲。",
    },
    {
      src: require("../img/keras.png"),
      title: "Keras",
      description: "在 TensorFlow、JAX 和 PyTorch 中完美整合深度學習。",
    },
    {
      src: require("../img/tensorflow-icon.png"),
      title: "TensorFlow",
      description:
        "這個端對端平台可讓您在任何環境中輕鬆建構及部署機器學習模型。",
    },
    {
      src: require("../img/flutter-icon.png"),
      title: "Flutter",
      description:
        "只需一個程式碼集，就能建構、測試及部署精美的網路、行動裝置、電腦和嵌入應用程式。",
    },
    {
      src: "https://img.icons8.com/?size=100&id=ui4CTPMMDCFh&format=png&color=000000 ",
      title: "Google Ads",
      description:
        "運用 Google Ads 向合適的使用者宣傳您的網站、產品和應用程式。",
    },
    {
      src: "https://img.icons8.com/?size=100&id=Omk4fWoSmCHm&format=png&color=000000",
      title: "Kaggle",
      description: "提供機器學習資料集、探索及建立模型，以及競賽競賽的平台。",
    },
    {
      src: require("../img/angular-icon.png"),
      title: "Angular",
      description: "用於開創未來的網路開發架構。",
    },
  ],
};
const Main = () => {
  const viewMoreBtn = () => {
    let hideGrid = document.querySelectorAll(".hide");
    hideGrid.forEach((item) => {
      item.classList.remove("hide");
    });
  };
  return (
    <section id="main-section">
      <h1 id="main-title">立即開始建構</h1>
      <div className="main-contentbox">
        {products.show.map((product, index) => (
          <div className="grid" key={index}>
            <img className="main-icon" src={product.src} alt="icon" />
            <span className="main-text">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </span>
          </div>
        ))}
        {products.hide.map((product, index) => (
          <div className="grid hide" key={index}>
            <img className="main-icon" src={product.src} alt="icon" />
            <span className="main-text">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </span>
          </div>
        ))}
      </div>
      <a className="view-more" onClick={viewMoreBtn} id="view-more-btn">
        查看所有開發人員產品
      </a>
    </section>
  );
};

const ConnectList = {
  Connect: [
    {
      href: "#",
      title: "網誌",
    },
    {
      href: "#",
      title: "Instagram",
    },
    {
      href: "#",
      title: "Linkedin",
    },
    {
      href: "#",
      title: "X (Twitter)",
    },
    {
      href: "#",
      title: "YouTube",
    },
  ],
  Program: [
    {
      href: "#",
      title: "Women Techmakers",
    },
    {
      href: "#",
      title: "Google Developer Group",
    },
    {
      href: "#",
      title: "Google Developer Experts",
    },
    {
      href: "#",
      title: "Accelerators",
    },
    {
      href: "#",
      title: "Google Developer Student Clubs",
    },
  ],
};

const Footer = () => {
  return (
    <section id="footer">
      <nav className="footer-linkbox-nocontent">
        <ul className="footer-linkboxes-list">
          <li className="footer-linkbox">
            <h3>Connect</h3>
            <ul className="footer-linkbox-list">
              {ConnectList.Connect.map((connect, index) => (
                <li className="footer-linkbox-item" key={index}>
                  <a href={connect.href}>{connect.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li className="footer-linkbox">
            <h3>Program</h3>
            <ul className="footer-linkbox-list">
              {ConnectList.Program.map((program, index) => (
                <li className="footer-linkbox-item" key={index}>
                  <a href={program.href}>{program.title}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
};

const PageComponenet = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Banner />
      <Welcome />
      <Main />
      <Footer />
    </div>
  );
};
export default PageComponenet;
