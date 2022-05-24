import BaseLayout from "../../../components/Layout/BaseLayout";
import React from "react";
import Video from "../../../components/Video";
import styles from "../../../styles/Common.module.css";
import { GetServerSideProps } from "next";
import { VideoObject } from "../../../types/Video";
import { axiosGet } from "../../../utils/axios";

const VideoPage = ({ video }: { video: VideoObject }) => {
  return (
    <article>
      <h1 className={styles.title}>{video.attributes.title}</h1>

      {video.attributes.description && <p>{video.attributes.description}</p>}

      <Video
        controls
        poster={video.attributes.poster}
        src={video.attributes.url}
      />
    </article>
  );
};

VideoPage.getLayout = function getLayout(page: React.ReactNode) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getServerSideProps: GetServerSideProps<{
  video: VideoObject;
}> = async (context) => {
  const { slug } = context.params!;

  const response = await axiosGet<{
    data: Array<VideoObject>;
  }>(`/videos?filters[slug]=${slug}`);

  const [video] = response.data;

  if (!video) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      video,
    },
  };
};

export default VideoPage;
