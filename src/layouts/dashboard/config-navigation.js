import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
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
  // 문제집 목록 위한 리스트 아이콘
  plist: icon('plist'),
  // 유저 메인 화면
  home: icon('home'),
  // 유저 메인 화면
  book: icon('book'),
  // 유저 메인 화면
  search: icon('search'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: '이동하기',
        items: [
          { title: '홈', path: paths.dashboard.root, icon: ICONS.home },
          { title: '탐색', path: paths.dashboard.two, icon: ICONS.search },
          {
            title: '내 문제집',
            path: paths.dashboard.three,
            icon: ICONS.book,
          },
        ],
      },

      // 문제 리스트
      // ----------------------------------------------------------------------
      {
        subheader: 'My ProblemList',
        items: [
          {
            title: '문제집 목록',
            path: paths.dashboard.group.root,
            icon: ICONS.plist,
            children: [
              { title: '1학년이라면 필수!', path: paths.dashboard.group.root },
              { title: '23-1 PPS', path: paths.dashboard.group.five },
              { title: '개인 연습용', path: paths.dashboard.group.six },
            ],
          },
        ],
      },
    ],
    []
  );

  return data;
}
