import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyCotService from 'src/utils/mycot-service';
// sections
import OneView from 'src/sections/one/view';

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
      <ProblemSet />
      <a href="dashboard/two">이동</a>
    </>
  );
}
