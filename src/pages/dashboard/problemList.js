/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { palette } from 'src/theme/palette';
import DotMenu from "./dotMenu"

const BigBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const RowBox = styled.div`
  flex-direction: row;
`

const PListBox = styled.div`
  justify-content: flex-start;
  width: 200px;
  background-color: #FFE7D6;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const ListName = styled.div`
  font-weight: bolder;
  font-size: large;
`

const ProblemList=({problemList})=> (
    <div className="ProblemList">
      <h2>인기 문제 리스트</h2>
      <h4>{problemList.length} problem lists</h4>
      <BigBox>
        {problemList.map((it, idx)=>(
            <PListBox key={idx}>
                <RowBox>
                    <ListName>{it.content}</ListName>
                    <DotMenu />
                </RowBox>
                <div>made by {it.author}</div>
                <div>{it.emotion} hits!</div>
            </PListBox>
        ))}
      </BigBox>
    </div>
);

ProblemList.defaultProps={
  problemList:[],
};
export default ProblemList;
