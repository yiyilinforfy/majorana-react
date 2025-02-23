import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  Chip,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Visibility as ViewIcon,
  Comment as CommentIcon,
} from "@mui/icons-material";

const TopicDetailPage = () => {
  const { tid } = useParams();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(false); // 添加标志位，避免重复调用

  useEffect(() => {
    const controller = new AbortController();

    const fetchTopicDetail = async () => {
      // 如果已经请求过，直接返回
      if (isMounted.current) return;

      try {
        console.log(`Fetching topic ${tid}`); // 调试日志
        const response = await axios.get(
          `http://localhost:3000/api/forum/topics/${tid}`,
          {
            signal: controller.signal,
          }
        );
        setTopic(response.data);
        setLoading(false);
        isMounted.current = true; // 标记为已请求
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopicDetail();

  }, [tid]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography>加载中...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">错误: {error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {topic.title}
          </Typography>

          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar src={topic.author.picture} alt={topic.author.username}>
              {topic.author.username[0]}
            </Avatar>
            <Box>
              <Typography variant="subtitle1">
                {topic.author.username}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                发布于 {new Date(topic.timestampISO).toLocaleString()}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" gap={2} mb={2}>
            <Chip
              icon={<ViewIcon />}
              label={`${topic.viewcount} 浏览`}
              variant="outlined"
            />
            <Chip
              icon={<CommentIcon />}
              label={`${topic.postcount} 回复`}
              variant="outlined"
            />
            <Chip label={topic.category.name} variant="outlined" />
          </Box>

          <Divider sx={{ my: 2 }} />

          {topic.posts &&
            topic.posts.map((post, index) => (
              <Card key={post.pid} variant="outlined" sx={{ mb: 2 }}>
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Avatar src={post.user.picture} alt={post.user.username}>
                      {post.user.username[0]}
                    </Avatar>
                    <Typography>{post.user.username}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {new Date(post.timestampISO).toLocaleString()}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      "& a": {
                        color: "primary.main",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      },
                      "& ul, & ol": {
                        pl: 3,
                        mb: 1,
                      },
                      "& h3, & h4": {
                        mt: 2,
                        mb: 1,
                      },
                      "& p": {
                        mb: 1,
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton size="small">
                      <ThumbUpIcon />
                    </IconButton>
                    <Typography variant="body2">{post.upvotes}</Typography>

                    <IconButton size="small">
                      <ThumbDownIcon />
                    </IconButton>
                    <Typography variant="body2">{post.downvotes}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default TopicDetailPage;