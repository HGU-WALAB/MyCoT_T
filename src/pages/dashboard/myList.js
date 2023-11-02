import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
// sections
import ThreeView from 'src/sections/three/view';
import Dropdown from "./dropdown";
import SwitchView from "./toggle";

// ----------------------------------------------------------------------
const DropDownSet = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

export default function Page() {
  return (
    <>
      <Helmet>
        <title>My List</title>
      </Helmet>
      <DropDownSet>
          <Dropdown />
          <Dropdown />
          <SwitchView />
      </DropDownSet>
      <ThreeView />
    </>
  );
}
