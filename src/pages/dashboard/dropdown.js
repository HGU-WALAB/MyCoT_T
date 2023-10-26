import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { RHFSelect } from 'src/components/hook-form/rhf-select';
import MenuItem from '@mui/material/MenuItem';


function Dropdown() {
  const methods = useForm();

  const handleSubmit = (data) => {
    console.log(data);
    // 여기서 데이터를 사용하거나 제출하는 로직을 작성
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>

        {/* RHFSelect 사용 예시 */}
        <RHFSelect
          name="mySelectField"  // 폼 데이터에서 식별할 이름
          native={false}        // 네이티브 셀렉트 박스 사용 여부
          maxHeight={220}       // 드롭다운 메뉴의 최대 높이
          helperText="문제 태그 선택" // 도움말 텍스트
        >
          {/* 드롭다운 리스트 내부 출력 */}
          <MenuItem value="option1">JAVA</MenuItem>
          <MenuItem value="option2">PYTHON</MenuItem>
          <MenuItem value="option3">C++</MenuItem>
        </RHFSelect>

      </form>
    </FormProvider>
  );
}

export default Dropdown;
