/* eslint-disable react/prop-types */
import styled from 'styled-components';

const BigBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  // 이게 왜 적용이 안되는거지?
  justify-content: flex-start;
`
const PListBox = styled.div`
  width: 200px;
  background-color: gainsboro;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
  margin: 10px auto;
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
      <h2>문제 리스트</h2>
      <h4>{problemList.length}개의 문제 리스트가 있습니다</h4>
      <BigBox>
        {problemList.map((it, idx)=>(
          <PListBox key={{idx}}>
            <ListName>{it.content}</ListName>
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
