import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import headerLogo from '../../assets/headerLogo.svg';
import pricingButton from '../../assets/pricingButton.svg';
import styles from './Header.module.scss';

const TypewriterText = ({ text }: { text: string }) => {
  return <span className={styles.typewriter}>{text}</span>;
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            {/* NavBar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <h1 className={styles.navbarTitle}>Linked</h1>
                    <img src={headerLogo} alt="Logo" className={styles.navbarImg} />
                </div>

                {/* Desktop Menu */}
                <ul className={`${styles.nav} ${isMenuOpen ? styles.openMenu : ''}`}>
                    <ScrollLink 
                        className={styles.navItem} 
                        to="home" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-70} // отступ для корректного позиционирования
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink 
                        className={styles.navItem} 
                        to="about" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-70}
                    >
                        About
                    </ScrollLink>
                    <ScrollLink 
                        className={styles.navItem} 
                        to="skills" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-70}
                    >
                        Skills
                    </ScrollLink>
                    <ScrollLink 
                        className={styles.navItem} 
                        to="contact" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-70}
                    >
                        Contact
                    </ScrollLink>
                </ul>

                {/* Hamburger Menu Icon */}
                <button 
                    className={styles.hamburger} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </nav>

            {/* Header Content */}
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    <h2 className={styles.headerTitle}>
                        <TypewriterText text="Hello World!" />
                        <br />
                        <TypewriterText text="I'm A Front-end Developer" />
                    </h2>
                    <p className={styles.headerSubtitle}>
                        Transform your ideas into seamless <br />
                        user interfaces
                    </p>
                    <div className={styles.headerBtns}>
                        <button className={styles.headerBtn1}>
                            <a href="https://t.me/lov_vy">Contact</a>
                        </button>
                    <button className="aboutBtn2 flex px-5 py-3 items-center text-purple-500 font-semibold space-x-2 transition duration-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50">
                        <img src={pricingButton} alt="Pricing icon" className="w-5 h-5" />
                        <span><a href="https://t.me/lov_vy">Pricing</a></span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
