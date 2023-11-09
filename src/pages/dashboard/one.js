import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
// sections
import OneView from 'src/sections/one/view';

import MyCotService from 'src/utils/mycot-service';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from "./dropdown";
import SwitchView from "./toggle";
import DotMenu from "./dotMenu"
import Problem from "./problem"
import ProblemSet from "./problemSet"

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

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiService = new MyCotService(process.env.REACT_APP_MYCOT_HOST_API);
    axios.get(apiService.getProblemSet(10))
      .then(response => {
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
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
      <h1>{JSON.stringify(data, null, 2)}</h1>
      <Problem problem={problem} />
      <ProblemSet problemSet={problemSet} />
    </>
  );
}
