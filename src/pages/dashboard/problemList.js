/* 이 파일은 지워야될 듯. myProblemSet 파일로 대체됨. */
/* eslint-disable */
import styled from 'styled-components';
import {Link} from "react-router-dom";

import { palette } from 'src/theme/palette';
import DotMenu from "./dotMenu"

const BigBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const PListBox = styled.div`
  justify-content: flex-start;
  width: 1000px;
  background-color: #FFE7D6;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
  margin: 10px;
  padding: 0px 30px 0px 30px;
  display: flex;
  flex-direction: column;
`
const RowBox = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`

const ListName = styled.div`
  font-weight: bolder;
  font-size: large;
`

const ProblemList=({problemList})=> (
  <div className="ProblemList">
    <h2>미리미리 C 캠프</h2>
    <h3>made by kkim</h3>
    <h4>{problemList.length} problem lists</h4>
    <BigBox>
      {problemList.map((it, idx)=>(
          <PListBox key={idx} >
            <RowBox>
              <div>{it.level}</div>
              <div>{it.num}</div>
              <div>{it.content}</div>
              <div>{it.state}</div>
              <div>{it.type}</div>
            </RowBox>
          </PListBox>
      ))}
    </BigBox>
  </div>
);

ProblemList.defaultProps={
  problemList:[],
};
export default ProblemList;
