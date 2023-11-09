/* eslint-disable */

import styled from 'styled-components';
import { Link } from "react-router-dom";

import MyCotService from 'src/utils/mycot-service';
import { useState, useEffect } from 'react';
import axios from 'axios';
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


const ProblemSetList = ({ problemSet }) => (
  <div className="ProblemSet">
    <h2>인기 문제 리스트</h2>
    <h4>{problemSet.length} problem sets</h4>
    <BigBox>
      {problemSet.map((it) => (

        <PListBox key={it.id} >
          <Link to={`/dashboard/aboutSet`} state={{id: it.id}}
            style={{
            textDecoration: "none",
            color: 'inherit'
          }}>
            <RowBox>
              <ListName>{it.title}</ListName>
            </RowBox>
            <div>made by {it.creator}</div>
            <div>{it.savedCnt} hits!</div>
          </Link>
        </PListBox>

      ))}
    </BigBox>
  </div >
);

const ProblemSet = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiService = new MyCotService(process.env.REACT_APP_MYCOT_HOST_API);
    apiService.getProblemSetsEdit()
      .then(response => setData(response.data))
      .catch(error => { console.error('Error fetching data:', error); });
  }, []);
  let sortedData = [];
  if (data !== null) {
    sortedData = [...data].sort((a, b) => b.savedCnt - a.savedCnt);
  }
  const topEight = sortedData.slice(0, 8);

  return (
    <ProblemSetList problemSet={topEight} />
  )
}

export default ProblemSet;
