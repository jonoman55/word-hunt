import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://jc-dev-portfolio-site.vercel.app/" target="__blank">
          John Chiappetta
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://github.com/jonoman55" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/john-chiappetta-ab4091143/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/johnchip1255" target="__blank">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/johnch1p/" target="__blank">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://twitter.com/johnch1p" target="__blank">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
