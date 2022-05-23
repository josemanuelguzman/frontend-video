import { axiosGet } from "../utils/axios";
import { GetServerSideProps } from "next";
import styles from "../styles/Common.module.css";
import Video from "../components/Video";
import BaseLayout from "../components/Layout/BaseLayout";
import { VideoObject } from "../types/Video";

const Home = ({ videos }: { videos: Array<VideoObject> }) => {
  return (
    <>
      <h1 className={styles.title}>Your daily video summary 😍</h1>

      <section className={styles.section}>
        {videos.map((video) => (
          <article key={video.attributes.slug} className={styles.article}>
            <Video
              poster={video.attributes.poster}
              src={video.attributes.url}
              autoPlay
              loop
              muted
            />
          </article>
        ))}
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosGet<{
    data: Array<VideoObject>;
  }>("/videos");
  return {
    props: {
      videos: response.data,
    },
  };
};

export default Home;
