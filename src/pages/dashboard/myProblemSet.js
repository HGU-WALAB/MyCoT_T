import React from 'react';
import Box from '@mui/material/Box';
import MyProblemList from './myProblemList';

const MyProblemSet = ({ problemList }) => (
  <div>
    <h1>1학년이라면 필수!</h1>
    <Box
      sx={{
        mt: 5,
        width: 1,
        height: 320,
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
