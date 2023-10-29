// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import MyProblemSet from '../../pages/dashboard/myProblemSet';

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Page One </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 800,
          borderRadius: 2,
          bgcolor: (theme) => '#D9D9D9',
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
          paddingTop: 4,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <MyProblemSet/>
      </Box>
    </Container>
  );
}
