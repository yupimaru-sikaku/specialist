import { ActionIcon } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import Image from 'next/image';
import { useState } from 'react';
import { NavBarModal } from './NavbarModal';

export const Navbar = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  if (isModal) {
    return (
      <div className="fixed top-0 z-50 h-screen w-screen bg-navy-900">
        <NavBarModal setIsModal={setIsModal} />
      </div>
    );
  }

  return (
    <header className="flex h-14 items-center justify-between bg-navy-900">
      <div className="ml-3 flex items-center">
        <Image
          src="/specialist_logo_2.webp"
          priority={true}
          alt="hero_logo"
          width={45}
          height={45}
        />
        <p className="ml-2 text-gray-100">Specialist</p>
      </div>
      <ActionIcon onClick={() => setIsModal(true)} className="mr-3">
        <IconMenu2 color="white" />
      </ActionIcon>
    </header>
  );
};

// import { ActionIcon } from '@mantine/core';
// import { IconMenu2 } from '@tabler/icons';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
// import { headerLink } from 'src/utils/headerLink';
// import { BaseText } from 'src/components/Common/BaseText';
// import { useState } from 'react';
// import { NavBarModal } from 'src/components/Layout/NavbarModal';
// import { UpScreenTransition } from 'src/components/Common/UpScreenTransition';

// export const Navbar = () => {
//   const [isModal, setIsModal] = useState<boolean>(false);
//   const largerThanSm = useMediaQuery('sm');

//   if (isModal) {
//     return (
//       <div className="fixed top-0 z-50 h-screen w-screen bg-gray-100">
//         <NavBarModal setIsModal={setIsModal} />
//       </div>
//     );
//   }

//   return (
//     <header className="relative flex h-screen items-start justify-between">
//       <Image
//         src="/specialist_hero.png"
//         layout="fill"
//         priority={true}
//         alt="hero_logo"
//       />

//       <div className="absolute top-1/2 left-10 -translate-y-1/2 transform text-3xl font-bold leading-loose tracking-widest text-white sm:text-4xl">
//         <UpScreenTransition duration={1}>Sports</UpScreenTransition>
//         <UpScreenTransition duration={1.2}>Has</UpScreenTransition>
//         <UpScreenTransition duration={1.4}>NoBorder</UpScreenTransition>
//       </div>
//       <div className="texts-sm absolute top-3/4 left-10 font-bold leading-loose tracking-widest text-white sm:text-xl">
//         <UpScreenTransition duration={1.6}>走ってみよう。</UpScreenTransition>
//         <UpScreenTransition duration={1.8}>
//           新しい世界が君を歓迎してくれる。
//         </UpScreenTransition>
//       </div>
//       <div className="z-10 ml-4 mt-4">
//         <Link href="/" scroll={false}>
//           <a>
//             <BaseText content="middle" weight={900} color="white">
//               Specialist
//             </BaseText>
//           </a>
//         </Link>
//       </div>
//       <div className="absolute top-1 left-1/2 -translate-x-1/2 transform">
//         <Image
//           src="/specialist_logo_2.webp"
//           width={60}
//           height={50}
//           alt="hero_logo"
//         />
//       </div>
//       <nav className="mr-6 mt-4">
//         {largerThanSm ? (
//           <ul className="flex gap-5">
//             {headerLink.map((content) => {
//               return (
//                 <li key={content.label} className="p-2">
//                   <Link href="/blog" scroll={false}>
//                     <a>
//                       <ActionIcon
//                         sx={{
//                           color: 'white',
//                           padding: '4px',
//                           border: '1px solid',
//                         }}
//                       >
//                         {<content.logo />}
//                       </ActionIcon>
//                     </a>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         ) : (
//           <ActionIcon sx={{ color: 'white' }} onClick={() => setIsModal(true)}>
//             <IconMenu2 />
//           </ActionIcon>
//         )}
//       </nav>
//     </header>
//   );
// };
