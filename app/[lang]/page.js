import styles from "../page.module.css";
import { getLocale } from "../../helpers/getLocale";

export default function Home(props) {
  const data = getLocale(props?.params.lang);
  return (
    <main className={styles.main}>
      <div>
        <p>{data?.name}</p>
        <p>{data?.description}</p>
      </div>
    </main>
  );
}
