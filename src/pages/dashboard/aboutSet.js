import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
// sections
import OneView from 'src/sections/one/view';
import ProblemSet from "./problemSet"
import Problem from "./problem"
import Dropdown from "./dropdown";
import SwitchView from "./toggle";
import DotMenu from "./dotMenu"
import ProblemList from "./problemList";

// ----------------------------------------------------------------------
const DropDownSet = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

export default function Page() {
  const location = useLocation();
  const { id, content } = location.state || {};

  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <DropDownSet>
        <Dropdown />
        <Dropdown />
        <SwitchView />
      </DropDownSet>
    
        <div>
          <p>ID: { id }</p>
          <p>content: { content }</p>
        </div>
      
    </>
  );
}
