// Header.tsx
import React, { useState } from 'react';
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
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>About</li>
                    <li className={styles.navItem}>Skills</li>
                    <li className={styles.navItem}>Contact</li>
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
                            Contact
                        </button>
                        <button className={styles.headerBtn2}>
                            <img src={pricingButton} alt="Pricing icon" />
                            <span>Pricing</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;