import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
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

const problemList = [
  {
    id: 1,
    level: "LEVEL",
    num: "NUM",
    content: "NAME",
    algorithm: "ALGO",
    state: "STATE",
    type: "TYPE",
  },
  {
    id: 1,
    level: 4,
    num: 1001,
    content: "Test",
    algorithm: "recursion",
    state: "solved",
    type: "backjoon",
  },
  {
    id: 1,
    level: 3,
    num: 1211,
    content: "ABC",
    algorithm: "basic",
    state: "tring",
    type: "leetcode",
  },
]

export default function Page() {
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
      <ProblemList problemList={problemList} />
    </>
  );
}
