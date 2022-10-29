import {
  mainMenuCarouselLinkContentType,
  mainMenuCarouselLinkType,
} from 'src/types';

export const mainMenuCarouselList: mainMenuCarouselLinkType[] = [
  { label: 'RECORD', hiragana: '実績', link: '' },
  { label: 'NEWS', hiragana: 'ニュース', link: '' },
  { label: 'CHARITY', hiragana: 'チャリティー', link: '/charity' },
  { label: 'SPONSOR', hiragana: 'スポンサー', link: '/sponsor' },
  { label: 'SUPPORT', hiragana: 'サポート', link: '/support' },
  { label: 'MEMBER', hiragana: 'メンバー', link: '/member' },
];

export const recordList: mainMenuCarouselLinkContentType[] = [
  { label: 'record1', link: '/' },
  { label: 'record2', link: '/' },
  { label: 'record3', link: '/' },
  { label: 'record4', link: '/' },
  { label: 'record5', link: '/' },
];

export const newsList: mainMenuCarouselLinkContentType[] = [
  { label: 'ニュース一覧', link: '/news' },
  { label: 'news1', link: '/' },
  { label: 'news2', link: '/' },
  { label: 'news3', link: '/' },
  { label: 'news4', link: '/' },
];
