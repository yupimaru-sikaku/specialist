import { Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { getPath } from 'src/libs/const';
import { IDEAL_WORD } from 'src/utils/idealWord';

const Ideal = () => {
  return (
    <Layout title="理念 | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <main>
        <h2 className="flex h-14 items-center justify-center bg-navy-900">
          <BaseText content="large" color="white">
            理念
          </BaseText>
        </h2>
        <ul className="text-center">
          <div className="p-vw-20" />
          {IDEAL_WORD.map((word) => (
            <li key={word.ja}>
              <BaseText content="large" fontFamily="Courgette" color="dark">
                {word.ja}
              </BaseText>
              <BaseText content="large" fontFamily="Courgette" color="dimmed">
                {word.en}
              </BaseText>
              <div className="p-vw-10" />
            </li>
          ))}
          <div className="p-vw-10" />
        </ul>
        <div className="px-6">
          <BaseText color="dimmed" lineHeight={2}>
            足下に、一本の「線」が引かれている。
            <br />
            断りもなく引かれたその線を、越えるかどうか悩む人がいる。越えられない、と引き返す人がある。
            <br />
            スペシャリストとは、線に気づかず線を超えてしまった者、あるいは自分で線を引き直した者だ。
            <br />
            <br />
            普通になろうとしたけど、なれなかった。
            <br />
            混ざろうとしたけど、混ざれなかった。
            <br />
            同じでいたいのに、いられなかった。
            <br />
            <br />
            叩かれ、こすられ、削られ、どうしようもなく尖ってしまった自分をぶら下げて、誰が見ていなくても「仕事」してる。
            <br />
            俺にしか引けない線を引く。私にしか出せない色を塗る。
            <br />
            あなたを驚かせ、喜ばせたいから。
            <br />
            <br />
            もしも、気にくわない「枠」の中にいるなら、スペシャリストに触れてほしい。
            <br />
            もしも、自分に出来ることを探しているなら、スペシャリストと話してみればいい。
            <br />
            もしも、何者かになろうと志を立てたなら、私たちと世界を一歩前進させよう。
            <br />
            <br />
            あなたは、線を越えられる。
          </BaseText>
        </div>
        <div className="p-vw-20" />
        <Link href={getPath('INDEX')}>
          <a className='block text-center'>
            <Button
              variant="default"
              color="dark"
              leftIcon={<IconChevronRight />}
            >
              トップに戻る
            </Button>
          </a>
        </Link>
      </main>
      <div className="p-vw-20" />
    </Layout>
  );
};

export default Ideal;
