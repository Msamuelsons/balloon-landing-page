import Logo from '../../assets/img/logo.png'
import './styles.css'
export default function Header() {
  return (
    <div className="navbar">
      <div>
        <img src={Logo} alt="Logo escrito DXB" />
      </div>
      <div>
        <ul className="navbar__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Book Your Ride</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
