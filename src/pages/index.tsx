import BaseLayout from "../components/Layout/BaseLayout";
import styles from "../styles/Common.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Your daily video summary 😍</h1>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <BaseLayout>{page}</BaseLayout>;
};
