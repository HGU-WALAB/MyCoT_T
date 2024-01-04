import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import myCotService from "src/utils/mycot-service";
import MaterialTable from 'material-table'
import { IconButton } from '@mui/material';
import { Launch } from '@mui/icons-material';


import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import { SplashScreen } from "src/components/loading-screen";

const DifficultyIcon = ({ level }) => {
  // Logic to return an icon based on the difficulty level
  // This is just an example, adjust it according to your actual icons and logic
  const icons = {
    1: <StarBorder />,
    2: <StarHalf />,
    3: <StarHalf />,
    4: <Star />,
    5: <Star />,
  };
  return icons[level] || null;
};

export const ProblemSetDetail = () => {
  const [problems, setProblems] = useState([]);
  const [problemSet, setProblemSet] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  var res1 = null;
  var res2 = null;

  const fetch = async () => {
    setIsLoading(true);
    try {
      res1 = await myCotService.getProblems({ problemSetId: id });
      res2 = await myCotService.getProblemSet(id);
      setProblems(res1);
      setProblemSet(res2);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  const rawBuilder = () => {
    return problems.map((p) => { return { difficulty: p.difficulty, name: p.title, likedCnt: p.likedCnt, platform: p.platform.name, problemLink: p.problemLink } });
  }

  const openInNewTab = url => {
    window.open(`https://${url}`, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    fetch();
  }, [id]);

  const columns = [
    { title: '제목', field: 'name' },
    { title: '플랫폼', field: 'platform' },
    { title: '좋아요 수', field: 'likedCnt', type: 'numeric' },
    {
      title: '난이도',
      field: 'difficulty',
      render: rowData => <DifficultyIcon level={rowData.difficulty} />
    },
    {
      title: '풀러가기',
      field: 'problemLink',
      render: rowData => (
        <IconButton onClick={() => openInNewTab(rowData.problemLink)}>
          <Launch />
        </IconButton>
      )
    },
  ];


  return <>
    <div style={{ maxWidth: '100%' }}>
      {isLoading 
        ? <SplashScreen /> 
        : <MaterialTable
          columns={columns}
          data={rawBuilder()}
          options={{
            search: true
          }}
          detailPanel={rowData => {
            return (
              <iframe
                width="100%"
                height="315"
                src={`https://${rowData.problemLink}`}
                frameborder="0"
                allow="accelerometer; picture-in-picture"
                allowfullscreen
              />
            )
          }}
          title={problemSet.title}
        />}
    </div>

  </>
}