import logo from './../logo.svg';
import styles from './HeaderComponent.module.css'

export default function Header() {
  return (
    <div>
      <img src={logo} className={styles.App_logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={styles.App_link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn to code, lmao
      </a>
    </div>
  );
};

