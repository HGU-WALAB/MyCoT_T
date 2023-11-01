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

const openNewWindow = (clickedItem) => {
  const { id, author, content, emotion } = clickedItem;
  const newWindowURL = `dashboard/aboutSet?id=${id}&author=${author}&content=${content}&emotion=${emotion}`;
  console.log('새 창 열기 URL:', newWindowURL);
  window.open(newWindowURL, '_blank');
};


const ProblemSet=({problemSet})=> (
    <div className="ProblemSet">
      <h2>인기 문제 리스트</h2>
      <h4>{problemSet.length} problem sets</h4>
      <BigBox>
        {problemSet.map((it, idx)=>(
          <Link to='/dashboard/aboutSet' style={{
            textDecoration: "none",
            color:'inherit'
          }}>
            <PListBox key={idx} >
                <RowBox>
                    <ListName>{it.content}</ListName>
                </RowBox>
                <div>made by {it.author}</div>
                <div>{it.emotion} hits!</div>
            </PListBox>
          </Link>
        ))}
      </BigBox>
    </div>
);

ProblemSet.defaultProps={
  problemSet:[],
};
export default ProblemSet;
