import { Helmet } from 'react-helmet-async';
// sections
import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>아직 구현되지 않은 페이지입니다!</title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
