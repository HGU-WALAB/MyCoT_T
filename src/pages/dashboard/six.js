import { Helmet } from 'react-helmet-async';
// sections
import SixView from 'src/sections/six/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>개인 연습용</title>
      </Helmet>

      <SixView />
    </>
  );
}
