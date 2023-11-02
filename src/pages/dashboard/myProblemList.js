import React from 'react';
import { Box } from '@mui/material';
import { useStyles } from './myProblemListStyles';

const Problems = ({ problems }) => {
  const classes = useStyles();
  const getDifficultyImage = (difficulty) => {
    switch (difficulty) {
      case 1:
        return 'star1.png';
      case 2:
        return 'star2.png';
      case 3:
        return 'star3.png';
      default:
        return 'default.png';
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: '95%',
          display: 'flex',
          padding: '10px',
          margin: '10px',
        }}>
        <div className={classes.difficulty}>난이도</div>
        <div className={classes.problemNumber}>문제번호</div>
        <div className={classes.problemName}>문제이름</div>
        <div className={classes.problemType}>문제유형</div>
        <div className={classes.status}>상태</div>
        <div className={classes.site}>사이트</div>
        <div className={classes.link}>문제풀기</div>
        <div className={classes.delete}>삭제</div>
      </Box>
      {problems.map((problem) => (
        <Box
          sx={{
            width: '95%',
            height: 25,
            left: 25,
            top: 65,
            backgroundColor: '#FAF9F9',
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            margin: '10px',
          }} key={problem.problemNumber}>
          <div className={classes.difficulty}>
            <img src={require(`./assets/${getDifficultyImage(problem.difficulty)}`)} style={{ width: '30px' }} alt={`Difficulty ${problem.difficulty}`} />
          </div>
          <div className={classes.problemNumber}>{problem.problemNumber}</div>
          <div className={classes.problemName}>{problem.problemName}</div>
          <div className={classes.problemType}>{problem.problemType}</div>
          <div className={classes.status}>{problem.status}</div>
          <div className={classes.site}>{problem.site}</div>
          <div className={classes.link}>
            <a href='https://www.acmicpc.net/problem/1914' target='_blank' rel='noopener noreferrer'>
              <img src={require('./assets/link.png')} style={{ width: '25px' }} alt='link' />
            </a>
          </div>
          <div className={classes.delete}>
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                if (window.confirm(`문제를 삭제하시겠습니까?`)) {
                  alert("삭제완료");
                }
              }}>
              <img src={require('./assets/delete.png')} style={{ width: '19px' }} alt='delete' />
            </a>
          </div>
        </Box>
      ))
      }
    </div >
  );
};

const MyProblemList = ({ problemList }) => (
  <div>
    <Problems problems={problemList} />
  </div>
);

MyProblemList.defaultProps = {
  problemList: [],
};
Problems.defaultProps = {
  problems: [],
};
export default MyProblemList;
