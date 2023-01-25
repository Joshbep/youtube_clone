import React from 'react'
import { Stack } from '@mui/material';
import { Categories } from '../utils/constants';

const SideBar = () => {
  return (
    <Stack
      direction='row',
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirection: { md: 'column'},
      }}
    >

    </Stack>
  )
}

export default SideBar