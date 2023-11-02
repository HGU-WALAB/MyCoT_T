import { Helmet } from 'react-helmet-async';
// sections
import FiveView from 'src/sections/five/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>23-1 PPS</title>
      </Helmet>

      <FiveView />
    </>
  );
}
