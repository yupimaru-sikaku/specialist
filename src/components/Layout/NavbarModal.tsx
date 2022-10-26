import React, { useEffect } from 'react';
import { headerLink } from 'src/utils/headerLink';
import { useRouter } from 'next/router';
import { IconPlus, IconX } from '@tabler/icons';
import { Accordion, ActionIcon } from '@mantine/core';
import { newsList } from 'src/utils/mainMenuCarouselList';
import Link from 'next/link';
import { BaseText } from '../Common/BaseText';

type Props = {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavBarModal = ({ setIsModal }: Props) => {
  const router = useRouter();
  useEffect(() => {
    () => setIsModal(false);
  }, []);
  return (
    <div className="h-modal z-100 fixed top-0 right-0 left-0 flex w-full items-center justify-center overflow-scroll overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div className="relative h-full w-full max-w-md p-4 md:h-auto overflow-scroll">
        <div className="relative rounded-l shadow">
          <ActionIcon
            onClick={() => setIsModal(false)}
            className="absolute top-3 right-2.5 p-1.5 hover:bg-gray-200 hover:text-gray-900"
            size="lg"
          >
            <IconX color="white" />
          </ActionIcon>
          <div className="rounded-t py-4 px-6">
            <h3 className="text-base font-semibold text-gray-100 lg:text-xl">
              メニュー
            </h3>
          </div>
          <div className="p-6">
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
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
