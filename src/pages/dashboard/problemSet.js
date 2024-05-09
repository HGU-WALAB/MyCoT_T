import { useState, useEffect } from 'react';
import myCotService from 'src/utils/mycot-service';
// sections
import { CardLayout } from 'src/layouts/card/card-layout';
import SlidUpCard from 'src/components/card';
import { useNavigate } from 'react-router-dom';



export default function Page() {
  const navigate = useNavigate();
  const [problemSets, setProblemSets] = useState([]); // 문제들의 정보를 저장할 state

  const fetchProblemSets = async () => {
    const fetchedData = await myCotService.getProblemSets({});
  console.log("fetchedData", fetchedData)
    setProblemSets(fetchedData);
  }

  const onClick = async (id) => {
    const res = await myCotService.createRegisteredProblemSet(id);
    console.log("res", res)
    navigate(`/dashboard/problem-set/${id}`);
  }

  useEffect(() => {
    fetchProblemSets();
  }, []);

  return (
    <>
      <CardLayout>
        {problemSets.map((p) => (
          <SlidUpCard key={p.id} title={p.title} subtitle={`제작자: ${p.creator ? p.creator.nickname : "익명"}   문제수: ${p.problemCnt}`} content={p.description} onClick={() => onClick(p.id)} />
        ))}
      </CardLayout>
    </>
  );
}
