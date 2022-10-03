import { Divider } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { BaseText } from '../Common/BaseText';

export const GreetingSecion = () => {
  return (
    <div>
      <BaseText
        content="large"
        variant="gradient"
        gradient={{ from: 'grape', to: 'yellow', deg: 45 }}
        letterSpacing="0.4rem"
        weight={900}
        align="center"
      >
        GREETINGS
      </BaseText>
      <BaseText content="middle" align="center">
        代表挨拶
      </BaseText>
      <div className="p-vw-10" />
      <Divider />

      <div className="p-vw-10" />

      <div className="md:flex">
        <div className="md:w-1/2">
          <Image
            src="/greeting_miyazato.webp"
            width={800}
            height={600}
            alt="miyazato_pic"
            className="rounded-xl"
          />
        </div>

        <div className="p-vw-10" />

        <div className="md:w-1/2">
          <BaseText content="middle" lineHeight="1.5">
            はじめまして、宮里 康和です。
            <br />
            <br />
            2021年はオリンピック、パラリンピックの開催もあり、私もパーソナルコーチとして関わらせていただきました。
            コロナ禍においてオリンピック、パラリンピックを開催していただけたのは本当に感謝しております。
            <br />
            <br />
            しかし新型コロナウイルスによる影響が懸念され、予断を許さない状況が続いております。
            <br />
            <br />
            スペシャリスト教会では、就労継続支援の事業所と連携し、障がいを持った方たちに誰もが自分らしく生活できるユニバーサルな社会の実現に取り組んでおります。
            これからも誰かのために寄り添い、快適な暮らしを実現できるよう、メンバー一丸となって走り続けていきます。どうぞご支援・ご指導のほどよろしくお願いいたします。
          </BaseText>
        </div>
      </div>
    </div>
  );
};
