import { AspectRatio, Divider, Pagination } from '@mantine/core';
import React, { useState } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import YouTube from 'react-youtube';
import mediaList from 'src/utils/mediaList.json';

export const MediaList = () => {
  const [activePage, setPage] = useState(1);
  const mediaCountPerPage = 5;
  const totalPage = Math.ceil(mediaList.length / mediaCountPerPage);

  const indexOfLastMedia = activePage * mediaCountPerPage;
  const indexOfFirstMedia = indexOfLastMedia - mediaCountPerPage;
  const currentMediaList = mediaList.slice(indexOfFirstMedia, indexOfLastMedia);

  const opts = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className="bg-ash-500 p-3">
      <div className="rounded-md bg-white px-3">
        <div className="p-vw-10" />
        <BaseText content="large" align="center" color="dark">
          メディア一覧
        </BaseText>
        <div className="p-vw-10" />
        <Divider />
        <div className="p-vw-10" />
        <ul>
          {currentMediaList.map((content) => (
            <>
              <AspectRatio ratio={16 / 9}>
                <YouTube videoId={content.name} opts={opts} />
              </AspectRatio>
              <p>{content.order}</p>
              <div className="p-vw-10" />
            </>
          ))}
        </ul>
        <div className="p-vw-10" />
        <Pagination
          position="center"
          page={activePage}
          initialPage={1}
          total={totalPage}
          onChange={setPage}
        />
        <div className="p-vw-10" />
      </div>
    </div>
  );
};
