/* eslint-disable react/prop-types */
import styled from 'styled-components';

const BigBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  // 이게 왜 적용이 안되는거지?
  justify-content: flex-start;
`
const PListBox = styled.div`
  color: white;
  justify-content: flex-start;
  width: 250px;
  background-color: gray;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`
const StarBox = styled.div`
  flex-direction: column;
`
const Star = styled.img`
  width: 30px;
  height: 30px;
`
const ListName = styled.div`
  font-weight: bolder;
  font-size: large;
`

const Problem=({problem})=> (
  <div className="Problem">
    <h2>인기 문제</h2>
    <h4>{problem.length}개의 문제 리스트가 있습니다</h4>
    <BigBox>
      {problem.map((it, idx)=>(
          <PListBox key={{idx}}>
            <Star src="/assets/images/staricon.png" alt="star" />
            <StarBox>
              <ListName>{it.content}</ListName>
              <div>{it.algorithm}</div>
            </StarBox>

          </PListBox>
      ))}
    </BigBox>
  </div>
);

Problem.defaultProps={
  problem:[],
};
export default Problem;
