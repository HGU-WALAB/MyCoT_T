import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyCotService from 'src/utils/mycot-service';
// sections
import OneView from 'src/sections/one/view';
import ProblemSet from "./problemSet"
import Problem from "./problem"
import Dropdown from "./dropdown";
import SwitchView from "./toggle";
import DotMenu from "./dotMenu";

// ----------------------------------------------------------------------
const DropDownSet = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

const problemSet = [
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

const apiService = new MyCotService(process.env.REACT_APP_MYCOT_HOST_API);

export default function Page() {
  const [problems, setProblems] = useState([]); // 문제들의 정보를 저장할 state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiService.getProblems({});
        setProblems(response);
      } catch (error) {
        console.error('가져오기 실패', error);
      }
    }

    fetchData();
  }, []);

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
      <Problem problem={problems}/>
      <ProblemSet problemSet={problemSet}/>
      <a href="dashboard/two">이동</a>
    </>
  );
}
