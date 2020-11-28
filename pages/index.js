import AppLayout from "../components/AppLayout";
import { LinkCustom } from "../components/LinkCustom"; // para SPA
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <AppLayout>
      <h1 className={styles.title}>
        <a href="/">devter</a>
      </h1>
      <nav className={styles.nav}>
        <LinkCustom path="/timeline">
          <a>timeline</a>
        </LinkCustom>
      </nav>
    </AppLayout>
  );
}
