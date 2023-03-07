import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channe;s?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
  }, [id]);

  return (
    <Box>
    </Box>
  )
}

export default ChannelDetail