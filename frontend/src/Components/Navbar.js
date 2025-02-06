import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-section ${isSticky ? "navbar-sticky" : ""}`}
    style={{ 
      background:"#E4F2F3" 
    }}>
      <div className='navbar-top'>
        <div className='container'>
          <div className="row">
            <div className="col-6 navbar-contact">
              <a href="tel:+902166062800">
                <FontAwesomeIcon icon={faPhone} /> +90 216 606 28 00
              </a>
              <a className='mail' href="mailto:info@npowergenerator.com">
                <FontAwesomeIcon icon={faEnvelope} /> info@npowergenerator.com
              </a>
            </div>
            <div className="col-6 navbar-button">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <img src="/Assets/image/eng.svg" alt="English" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar-bottom'>
        <div className='container'>
          <div className="row align-items-end nav-grid">
            <div className="col-4">
              <Link to="/">
                <img src="/Assets/image/n-power_logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="col-8 nav-area">
              <button className="hamburger-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
              </button>
              <ul className={`npower-navbar ${isMenuOpen ? 'open' : ''}`}>
                <li>
                  <Link to="/about">HAKKIMIZDA</Link>
                </li>
                <li className="dropdown-link" >
                  <Link to="#" style={{ cursor: 'default' }} onClick={(e) => e.preventDefault()}>ÜRÜNLER</Link>
                  <ul className='dropdown'>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/ses-izolasyonlu-konteynir.svg' alt='' />
                      </div>
                      <Link to="/ses-yalitimi">
                        Ses İzolasyonlu Konteynırlar
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/voltaj.svg' alt='' />
                      </div>
                      <Link to="/dusuk-voltaj">
                        Düşük Voltajlı Paneller
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/voltaj.svg' alt='' />
                      </div>
                      <Link to="/orta-voltaj">
                        Orta Voltajlı Paneller
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/kurulum.svg' alt='' />
                      </div>
                      <Link to="/kurulum-montaj">
                        Kurulum İşleri
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/sismik_titresim.svg' alt='' />
                      </div>
                      <Link to="/sismik-titresim">
                        Sismik Titreşim Pedleri
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/dıs_yakit.svg' alt='' />
                      </div>
                      <Link to="/dis-yakit">
                        Dış Yakıt Tankları
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/yakit-tanki">
                        Yakıt Tank Otomasyonu
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-link">
                  <Link to="#" style={{ cursor: 'default' }} onClick={(e) => e.preventDefault()}>JENERATÖRLER</Link>
                  <ul className='dropdown'>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/diesel-generator">
                        Dizel Jeneratörler
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/gas-generator">
                        Gaz Jeneratörler
                      </Link>
                    </li>
                    <li className='dropdown-item'>
                      <div className='dropdown-icon'>
                        <img src='/Assets/image/icon/generator_icon.svg' alt='' />
                      </div>
                      <Link to="/portable-generator">
                        Portatif Jeneratörler
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/catalog">KATALOGLAR</Link>
                </li>
                <li>
                  <Link to="/contact">İLETİŞİM</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
