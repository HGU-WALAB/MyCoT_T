import React from 'react';
import Box from '@mui/material/Box';
import MyProblemList from './myProblemList';

const MyProblemSet = ({ problemList }) => (
  <div>
    <h1 style={{display: "inline"}}>1학년 추천 </h1><h3 style={{display: "inline"}}>made by mango</h3>
    <p><h2 style={{display: "inline"}}>80문제| </h2><h4 style={{display: "inline"}}>56hits!</h4></p>
    <Box
      sx={{
        mt: 5,
        width: 1,
        height: 620,
        borderRadius: 2,
        bgcolor: (theme) => '#ECECEC',
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
        paddingTop: 4,
        paddingLeft: 4,
      }}>
      <MyProblemList problemList={problemList} />
    </Box>
  </div>
);

MyProblemSet.defaultProps = {
  problemList: [],
};
export default MyProblemSet;
