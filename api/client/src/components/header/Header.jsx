import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img src="assets/headerImg.jpg" className="headerImg" alt="" />
    </div>
  );
};

export default Header;
