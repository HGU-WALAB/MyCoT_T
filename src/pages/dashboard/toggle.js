// @mui
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// routes
import { paths } from 'src/routes/paths';
// components
//

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];

const PLACEMENTS = ['top', 'start', 'bottom', 'end'];

// ----------------------------------------------------------------------

export default function SwitchView() {
  return (
    <>
            <FormGroup row>
              <FormControlLabel control={<Switch />} label="안 푼 문제만" />
            </FormGroup>
    </>
  );
}
