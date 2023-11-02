import { useState, useCallback } from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Iconify from 'src/components/iconify';

const OPTIONS_MAXHEIGHT = ['Edit', 'Delete'];

export default function DotMenu() {
    const [isOpenMaxHeight, setOpenMaxHeight] = useState(null);

    const handleMaxHeightClose = useCallback(() => {
        setOpenMaxHeight(null);
    }, []);

    return (
        <Container sx={{ my: 1, mx: 1, width: '10px' }}>
            <IconButton
                size='small'
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={(event) => setOpenMaxHeight(event.currentTarget)}
            >
                <Iconify icon="eva:more-vertical-fill"/>
            </IconButton>

            <Menu
                id="long-menu"
                anchorEl={isOpenMaxHeight}
                onClose={handleMaxHeightClose}
                open={Boolean(isOpenMaxHeight)}
            >
                {OPTIONS_MAXHEIGHT.map((option) => (
                    <MenuItem key={option} selected={option === 'Edit'} onClick={handleMaxHeightClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Container>
    );
}
