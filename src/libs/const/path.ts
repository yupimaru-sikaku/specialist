const PATH = {
  INDEX: '/',
  IDEAL: '/ideal',
  BLOG: '/blog',
  CHARITY: '/charity',
  CHARITY_CREATE: '/charity/create',
  CHARITY_STOCK: '/charity/stock',
  MEMBER: '/member',
  NEWS: '/news',
  MEDIA: '/media',
  SUPPORT: '/support',
  SPONSOR: '/sponsor',
  ADMIN_REGISTER: '/admin/register',
  ADMIN_LOGIN: '/admin/login',
} as const;

export const getPath = (pathKey: keyof typeof PATH, ...args: string[]) => {
  const val = PATH[pathKey];

  if (!args) {
    return val;
  }

  const dirs = val.slice(1).split('/');

  const newPath = dirs.map((dir) => {
    if (dir.startsWith('[')) {
      const replaceDir = args[0];
      args.shift();
      return replaceDir;
    }
    return dir;
  });

  return '/' + newPath.join('/');
};

