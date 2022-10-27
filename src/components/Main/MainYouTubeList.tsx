import Link from 'next/link';
import React, { useState } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import YouTube from 'react-youtube';
import { AspectRatio } from '@mantine/core';

export const MainYouTubeList = () => {
  const opts = {
    width: '100%',
    height: '100%',
  };
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-navy-900">
        <BaseText content="large" color="white">
          メディア
        </BaseText>
      </h2>
      <AspectRatio ratio={16 / 9}>
        <YouTube videoId="dD3tJSjwV08" opts={opts} />
      </AspectRatio>
      <div className="p-vw-8" />
      <AspectRatio ratio={16 / 9}>
        <YouTube videoId="rgxlMPffwms" opts={opts} />
      </AspectRatio>
      <div className="p-vw-8" />
      <AspectRatio ratio={16 / 9}>
        <YouTube videoId="jknrkxLmeOQ" opts={opts} />
      </AspectRatio>
      <div className="p-vw-8" />
      <AspectRatio ratio={16 / 9}>
        <YouTube videoId="G6rtTs7WGBw" opts={opts} />
      </AspectRatio>

      <Link href="/media">
        <a className="flex h-10 items-center justify-center bg-ash-100">
          <BaseText content="middle">他の動画はこちら</BaseText>
        </a>
      </Link>
    </div>
  );
};
