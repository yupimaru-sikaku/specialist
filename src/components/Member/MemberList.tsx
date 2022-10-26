import { Divider, Table } from '@mantine/core';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import Image from 'next/image';
import { miyazatoRecordLink } from 'src/utils/miyazatoRecordLink';
import { miyazatoCareerLink } from 'src/utils/miyazatoCareerLink';
import { memberList } from 'src/utils/memberList';

export const MemberList = () => {
  return (
    <div className="bg-ash-100 px-6">
      <div className="p-vw-10" />

      <BaseText content="large" align="center" color="dark">
        代表挨拶
      </BaseText>
      <div className="p-vw-10" />
      <Divider />
      <div className="p-vw-10" />
      <div className="md:flex">
        <div className="flex items-end md:w-1/2">
          <div className="w-1/3">
            <Image
              src="/career_miyazato.webp"
              width={100}
              height={130}
              layout="responsive"
              alt="miyazato_pic"
              className="rounded-sm"
            />
          </div>
          <div className="flex-grow bg-ash-900 p-3">
            <BaseText content="small" color="white">
              代表理事
            </BaseText>
            <BaseText content="middle" color="white">
              宮里　康和
            </BaseText>
          </div>
        </div>

        <div className="p-vw-10" />

        <div className="md:w-1/2">
          <BaseText content="middle" lineHeight="1.5" color="dark">
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
            スペシャリスト育成支援協会では、就労継続支援の事業所と連携し、障がいを持った方たちに誰もが自分らしく生活できるユニバーサルな社会の実現に取り組んでおります。
            これからも誰かのために寄り添い、快適な暮らしを実現できるよう、メンバー一丸となって走り続けていきます。どうぞご支援・ご指導のほどよろしくお願いいたします。
          </BaseText>
        </div>
      </div>
      <section className="text-center md:w-1/2">
        <BaseText content="large" align="center" weight={900} color="yellow">
          略歴
        </BaseText>
        <div className="p-vw-10" />

        <ul>
          {miyazatoCareerLink.map((career) => {
            return (
              <div key={career.content}>
                <li className="grid" style={{ gridTemplateColumns: '40% 1fr' }}>
                  <BaseText content="small">{career.date}</BaseText>
                  <BaseText content="small" align="start" color="dark">
                    {career.content}
                  </BaseText>
                </li>
                <div className="p-vw-4" />
              </div>
            );
          })}
        </ul>

        <div className="p-vw-10" />
        <BaseText content="large" align="center" color="yellow" weight={900}>
          実績
        </BaseText>
        <div className="p-vw-10" />

        <ul>
          {miyazatoRecordLink.map((career) => {
            return (
              <div key={career.content}>
                <li className="grid" style={{ gridTemplateColumns: '40% 1fr' }}>
                  <BaseText content="small">{career.date}</BaseText>
                  <BaseText content="small" align="start" color="dark">
                    {career.content}
                  </BaseText>
                </li>
                <div className="p-vw-4" />
              </div>
            );
          })}
        </ul>
      </section>

      <BaseText content="large" align="center" color="dark">
        理事紹介
      </BaseText>
      <div className="p-vw-10" />
      <Divider />
      <div className="p-vw-10" />

      <Table withBorder withColumnBorders captionSide="bottom">
        <caption>※五十音順</caption>
        <thead>
          <tr>
            <th>名前</th>
            <th>職種</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((content) => (
            <tr className="w-1/2">
              <td>{content.name}</td>
              <td>{content.post}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="p-vw-10" />
    </div>
  );
};
