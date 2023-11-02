/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import { useStyles } from './myProblemListStyles';

import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import Masonry from '@mui/lab/Masonry';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// components
import Iconify from 'src/components/iconify';
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import { bgBlur } from 'src/theme/css';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import MyCotService from 'src/utils/mycot-service';

const Btn = styled.button`
  background-color: ${props => props.theme.palette.primary['Darker']};
  color: black;
`

// ----------------------------------------------------------------------

const CURRENCIES = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];

const MyProblemList = () => {
  const theme = useTheme();
  const [currency, setCurrency] = useState('EUR');
  const apiService = new MyCotService(process.env.REACT_APP_MYCOT_HOST_API);

  const [values, setValues] = useState({
    title: '',
    description: '',
    problemLink: '',
    difficulty: '',
  });

  const handleChangeCurrency = useCallback((event) => {
    setCurrency(event.target.value);
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleShowPassword = useCallback(() => {
    setValues({ ...values, showPassword: !values.showPassword });
  }, [values]);

  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleConfirm = async () => {
    console.log(values); // 먼저 콘솔에 출력
    await apiService.postProblem(values);
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
          Confirm
        </Button>
      </>
    </ThemeProvider>
  );
};

export default MyProblemList;
