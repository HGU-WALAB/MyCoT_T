import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
// sections
import OneView from 'src/sections/one/view';
import ProblemList from "./problemList"
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

const problemList = [
    {
        id: 1,
        author: "kkim",
        content: "미리미리 C캠프",
        emotion: 1,
    },
    {
        id: 2,
        author: "jerry1004",
        content: "웹 서비스 캠프",
        emotion: 2,
    },
    {
        id: 3,
        author: "user1",
        content: "JAVA",
        emotion: 3,
    },
    {
        id: 4,
        author: "user2",
        content: "JAVA",
        emotion: 3,
    },
    {
        id: 5,
        author: "user3",
        content: "JAVA",
        emotion: 3,
    },
    {
        id: 6,
        author: "user4",
        content: "JAVA",
        emotion: 3,
    },
    {
        id: 7,
        author: "user5",
        content: "JAVA",
        emotion: 3,
    },
    {
        id: 8,
        author: "user6",
        content: "JAVA",
        emotion: 3,
    },
]
const problem = [
    {
        id: 1,
        content: "Hanoi's tower",
        algorithm: "recursion",
    },
    {
        id: 2,
        content: "Baseball Game",
        algorithm: "sorting",
    },
    {
        id: 3,
        content: "ABC",
        algorithm: "basic",
    },
    {
        id: 4,
        content: "ABC",
        algorithm: "basic",
    },
    {
        id: 5,
        content: "ABC",
        algorithm: "basic",
    },
    {
        id: 6,
        content: "ABC",
        algorithm: "basic",
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
            <ProblemList problemList={problemList}/>
        </>
    );
}
