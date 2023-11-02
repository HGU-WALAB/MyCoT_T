import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { useSettingsContext } from 'src/components/settings';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
// sections
import ProblemSet from "./problemSet"
import Problem from "./problem"
import Dropdown from "./dropdown";
import SwitchView from "./toggle";
import DotMenu from "./dotMenu"
import ProblemList from "./problemList";
import MyProblemSet from './myProblemSet';



// ----------------------------------------------------------------------
const DropDownSet = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

export default function Page() {
  const settings = useSettingsContext();
  const location = useLocation();
  const { id } = location.state || {};

  const sampleProblems = [
    {
      difficulty: 1,
      problemNumber: 1001,
      problemName: '하노이탑',
      problemType: '재귀',
      status: '해결',
      site: '백준',
    },
    {
      difficulty: 2,
      problemNumber: 1002,
      problemName: '피보나치 수열',
      problemType: '동적 프로그래밍',
      status: '미해결',
      site: 'LeetCode',
    },
  ];

  return (
    <>
      <Helmet>
        <title>문제집 보기</title>
      </Helmet>
      <DropDownSet>
        <Dropdown />
        <Dropdown />
        <SwitchView />
      </DropDownSet>
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        {/* <Typography variant="h4"></Typography> */}

        <Box
          sx={{
            mt: 5,
            width: 1,
            height: 800,
            borderRadius: 2,
            bgcolor: (theme) => '#D9D9D9',
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
            paddingTop: 4,
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <MyProblemSet problemList={sampleProblems}/>
        </Box>
      </Container>
    </>
  );
}