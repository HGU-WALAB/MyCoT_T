import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
// sections
import OneView from 'src/sections/one/view';
import ProblemSet from "./problemSet"
import Problem from "./problem"
import Dropdown from "./dropdown";
import SwitchView from "./toggle";
import DotMenu from "./dotMenu"

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
                <title>HOME</title>
            </Helmet>
            <DropDownSet>
                <Dropdown />
                <Dropdown />
                <SwitchView />
            </DropDownSet>
            <ProblemSet />
        </>
    );
}
