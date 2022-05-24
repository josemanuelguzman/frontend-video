import BaseLayout from "../../../components/Layout/BaseLayout";
import React, { useState } from "react";
import styles from "../../../styles/Common.module.css";
import { GetServerSideProps } from "next";
import { VideoObject, VideoAttributes } from "../../../types/Video";
import { axiosGet, axiosPut } from "../../../utils/axios";

const VideoPage = ({ video }: { video: VideoObject }) => {
  const [formState, setFormState] = useState<VideoAttributes>({
    ...video.attributes,
  });

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await axiosPut<VideoObject>(`/videos/${video.id}`, {
        data: {
          ...formState,
        },
      });

      alert("Video updated!");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <label className={styles.label} htmlFor="title">
          Title
        </label>
        <input
          className={styles.input}
          type="text"
          id="title"
          name="title"
          onChange={onChange}
          value={formState.title}
        />
      </div>

      <div>
        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <input
          className={styles.input}
          type="text"
          name="description"
          id="description"
          onChange={onChange}
          value={formState.description}
        />
      </div>

      <div>
        <label className={styles.label} htmlFor="url">
          Url
        </label>
        <input
          className={styles.input}
          id="url"
          type="text"
          name="url"
          onChange={onChange}
          value={formState.url}
        />
      </div>

      <div>
        <label className={styles.label} htmlFor="poster">
          Poster
        </label>
        <input
          className={styles.input}
          type="text"
          id="poster"
          name="poster"
          onChange={onChange}
          value={formState.poster}
        />
      </div>

      <input type="submit" value="Submit" />
    </form>
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
