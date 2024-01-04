/* eslint-disable */

import React from 'react';

import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import Masonry from '@mui/lab/Masonry';
import TextField from '@mui/material/TextField';
// components
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import myCotService from 'src/utils/mycot-service';

// ----------------------------------------------------------------------

const MyProblemList = () => {
  const theme = useTheme();
  const [currency, setCurrency] = useState('EUR');

  const [values, setValues] = useState({
    title: '',
    description: '',
    problemLink: '',
    difficulty: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleConfirm = async () => {
    try {
      console.log(values); // 먼저 콘솔에 출력
      await myCotService.postProblem(values);

      // 성공 시 알림
      alert('문제가 성공적으로 추가되었습니다!');
    } catch (error) {
      console.error('문제 추가 중 오류 발생:', error);

      // 실패 시 알림
      alert('문제 추가에 실패했습니다');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* 정보 입력창 부분*/}
        <Masonry columns={{ xs: 1, md: 1 }} spacing={5}>
          <TextField
            required
            fullWidth
            label="Title"
            placeholder="문제 제목을 입력하세요"
            onChange={handleChange('title')}
          />

          <TextField
            required
            fullWidth
            label="Description"
            placeholder="문제에 대한 설명을 입력하세요"
            onChange={handleChange('description')}
          />

          <TextField
            required
            fullWidth
            label="ProblemLink"
            placeholder="문제 URL을 입력하세요"
            onChange={handleChange('problemLink')}
          />

          <TextField
            required
            fullWidth
            label="Difficulty"
            placeholder="문제의 난이도를 숫자로 적어주세요 (1~5)"
            onChange={handleChange('difficulty')}
          />
        </Masonry>

        {/*확인 버튼 부분*/}
        <Button onClick={handleConfirm}>
          추가
        </Button>
      </>
    </ThemeProvider>
  );
};

export default MyProblemList;