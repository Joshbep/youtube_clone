import React from 'react'
import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoProfilePicture } from '../utils/constants';
import ChannelDetail from './ChannelDetail';

const ChannelCard = () => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',

      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            textAlign: 'center', 
            color: '#fff'
        }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
        </CardContent>
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
      </Link>
    </Box>
  )
}

export default ChannelCard