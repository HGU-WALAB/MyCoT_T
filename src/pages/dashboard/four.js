import { Helmet } from 'react-helmet-async';
// sections
import FourView from 'src/sections/four/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>1학년이라면 필수!</title>
      </Helmet>

      <FourView />
    </>
  );
}
