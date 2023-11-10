/* eslint-disable */
import React from 'react';
import styled from "styled-components";
import { useForm, FormProvider } from 'react-hook-form';
import { RHFSelect } from 'src/components/hook-form/rhf-select';
import MenuItem from '@mui/material/MenuItem';

const Box = styled.div`
  width: 200px;
  margin: 5px;
  padding: 5px;
`


function Dropdown() {
  const methods = useForm();

  const handleSubmit = (data) => {
    console.log(data);
    // 여기서 데이터를 사용하거나 제출하는 로직을 작성
  };

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>

          {/* RHFSelect 사용 예시 */}
          <RHFSelect
            name="dropDownSelected"  // 폼 데이터에서 식별할 이름
            native={false}        // 네이티브 셀렉트 박스 사용 여부
            maxHeight={220}       // 드롭다운 메뉴의 최대 높이
            helperText="Difficulty" // 도움말 텍스트
          >
            {/* 드롭다운 리스트 내부 출력 */}
            <MenuItem value="1">Test</MenuItem>
            <MenuItem value="2">star1</MenuItem>
            <MenuItem value="3">star1</MenuItem>
            <MenuItem value="4">star1</MenuItem>
            <MenuItem value="5">star1</MenuItem>
          </RHFSelect>

        </form>
      </FormProvider>
    </Box>
  );
}

export default Dropdown;
