import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <form action="" className="footer-form">
          <h1 className="foo">Login</h1>
          <p className="footer-subtitle">to get started</p>
          <div className="footer-inputs">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </div>
          <button className="footer-btn">Yuborish </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
