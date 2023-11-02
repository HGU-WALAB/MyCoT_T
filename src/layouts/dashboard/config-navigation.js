import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  plist: icon('plist'),
  home: icon('home'),
  book: icon('book'),
  search: icon('search'),
};

const props = [
  "1학년이라면 필수!",
  "23-2 PPS",
  "개인 연습용",
];

export function useNavData() {
  const data = useMemo(
    () => [
      {
        subheader: '이동하기',
        items: [
          { title: '홈', path: paths.dashboard.root, icon: ICONS.home },
          { title: '탐색', path: paths.dashboard.search, icon: ICONS.search },
          { title: '내 문제집', path: paths.dashboard.myList, icon: ICONS.book, },
          { title: '문제 추가', path: paths.dashboard.addProblem, icon: ICONS.book, },
        ],
      },
      {
        subheader: 'My ProblemList',
        items: [
          {
            title: '문제집 목록',
            path: paths.dashboard.group.root,
            icon: ICONS.plist,
            children: props.map((prop, index) => ({ title: prop, path: `${paths.dashboard.group.root}/${index + 1}` })),
          },
        ],
      },
    ],
    []
  );

  return data;
}
