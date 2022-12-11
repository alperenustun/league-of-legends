import Link from "next/link"
import styles from "./Navbar.module.scss"

function Navbar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.linkList}>
        <h3>Menu</h3>
        <li>
          <Link href="/"><img className={styles.image} src="/assets/nav-home-white.png" /></Link>
        </li>
        <li>
          <Link href="/champions"><img className={styles.image} src="/assets/nav-champions-white.png" /></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar