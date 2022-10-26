import React, { useEffect } from 'react';
import { headerLink } from 'src/utils/headerLink';
import { useRouter } from 'next/router';
import { IconPlus, IconX } from '@tabler/icons';
import { Accordion, ActionIcon } from '@mantine/core';
import { newsList, recordList } from 'src/utils/mainMenuCarouselList';
import Link from 'next/link';
import { BaseText } from '../Common/BaseText';

export const NavBarModal = () => {
  return (
    <div>
      <Accordion
        chevron={<IconPlus size={16} />}
        styles={{
          chevron: {
            color: 'white',
            '&[data-rotate]': {
              transform: 'rotate(45deg)',
            },
          },
          item: {
            border: 'none',
          },
        }}
      >
        <Accordion.Item value="RECORD">
          <Accordion.Control>
            <BaseText content="middle" color="white">
              RECORD
            </BaseText>
            <BaseText content="small" color="white">
              実績
            </BaseText>
          </Accordion.Control>
          {recordList.map((content) => (
            <Accordion.Panel key={content.label}>
              <Link href={content.link}>
                <a className="text-center">
                  <BaseText content="middle">{content.label}</BaseText>
                </a>
              </Link>
            </Accordion.Panel>
          ))}
        </Accordion.Item>
        <Accordion.Item value="NEWS">
          <Accordion.Control>
            <BaseText content="middle" color="white">
              NEWS
            </BaseText>
            <BaseText content="small" color="white">
              ニュース
            </BaseText>
          </Accordion.Control>
          {newsList.map((content) => (
            <Accordion.Panel key={content.label}>
              <Link href={content.link}>
                <a className="text-center">
                  <BaseText content="middle">{content.label}</BaseText>
                </a>
              </Link>
            </Accordion.Panel>
          ))}
        </Accordion.Item>
        <Link href="/charity">
          <a>
            <Accordion.Item value="CHARITY">
              <Accordion.Control>
                <BaseText content="middle" color="white">
                  CHARITY
                </BaseText>
                <BaseText content="small" color="white">
                  チャリティー
                </BaseText>
              </Accordion.Control>
            </Accordion.Item>
          </a>
        </Link>
        <Link href="/sponsor">
          <a>
            <Accordion.Item value="SPONSOR">
              <Accordion.Control>
                <BaseText content="middle" color="white">
                  SPONSOR
                </BaseText>
                <BaseText content="small" color="white">
                  スポンサー
                </BaseText>
              </Accordion.Control>
            </Accordion.Item>
          </a>
        </Link>
        <Link href="/support">
          <a>
            <Accordion.Item value="SUPPORT">
              <Accordion.Control>
                <BaseText content="middle" color="white">
                  SUPPORT
                </BaseText>
                <BaseText content="small" color="white">
                  サポート
                </BaseText>
              </Accordion.Control>
            </Accordion.Item>
          </a>
        </Link>
        <Link href="/member">
          <a>
            <Accordion.Item value="MEMBER">
              <Accordion.Control>
                <BaseText content="middle" color="white">
                  MEMBER
                </BaseText>
                <BaseText content="small" color="white">
                  メンバー
                </BaseText>
              </Accordion.Control>
            </Accordion.Item>
          </a>
        </Link>
      </Accordion>
    </div>
  );
};
