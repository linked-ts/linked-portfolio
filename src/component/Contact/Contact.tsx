import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.overlay}>
        <h3 className={styles.request}>REQUEST NOW</h3>
        <h2 className={styles.title}>What are you waiting for?</h2>
        <p className={styles.description}>
          If you are interested in purchasing your own website, please visit
          the following link and email me by clicking the button below.
        </p>
        <button className={styles.button}>GET YOURS NOW</button>
      </div>
    </section>
  );
};

export default Contact;
