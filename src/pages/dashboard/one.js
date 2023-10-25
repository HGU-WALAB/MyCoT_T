import { Helmet } from 'react-helmet-async';
// sections
import OneView from 'src/sections/one/view';
import ProblemList from "./problemList"

// ----------------------------------------------------------------------

const dummyList = [
  {
    id: 1,
    author: "kkim",
    content: "미리미리 C캠프",
    emotion: 1,
  },
  {
    id: 2,
    author: "jerry1004",
    content: "웹 서비스 캠프",
    emotion: 2,
  },
  {
    id: 3,
    author: "cocomong98",
    content: "JAVA",
    emotion: 3,
  },
  {
    id: 4,
    author: "cocomong98",
    content: "JAVA",
    emotion: 3,
  },
  {
    id: 5,
    author: "cocomong98",
    content: "JAVA",
    emotion: 3,
  },
  {
    id: 6,
    author: "cocomong98",
    content: "JAVA",
    emotion: 3,
  },
  {
    id: 7,
    author: "cocomong98",
    content: "JAVA",
    emotion: 3,
  },
  {
    id: 8,
    author: "cocomong98",
    content: "JAVA",
    emotion: 3,
  },
]

export default function Page() {
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>

      <ProblemList problemList={dummyList}/>
    </>
  );
}
