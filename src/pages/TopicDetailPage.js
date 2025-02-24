import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
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
  ImageList,
  ImageListItem,
  Paper,
} from "@mui/material";
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Visibility as ViewIcon,
  Comment as CommentIcon,
  Science as ScienceIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";

const TopicDetailPage = () => {
  const { tid } = useParams();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTopicDetail = async () => {
      if (isMounted.current) return;

      try {
        console.log(`Fetching topic ${tid}`);
        const response = await axios.get(
          `http://localhost:3000/api/forum/topics/${tid}`,
          {
            signal: controller.signal,
          }
        );
        setTopic(response.data);
        setLoading(false);
        isMounted.current = true;
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopicDetail();

  }, [tid]);

  const processPostContent = (content) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const images = [];
    let match;
  
    while ((match = imgRegex.exec(content)) !== null) {
      const src = match[1];
      const imageUrl = src.startsWith("http") ? src : `http://localhost:4567${src}`;
      images.push(`http://localhost:3000/api/proxy-image?url=${imageUrl}`);
    }
  
    const textContent = content.replace(/<img[^>]+>/g, "");
    return { images, textContent };
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography>Loading...</Typography>
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
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <div>
      <Container maxWidth="lg" sx={{ py: 6 }}>
       <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden', bgcolor: '#f8f9fa' }}>
        <Box sx={{ p: 4, bgcolor: '#fff' }}>
          <Box display="flex" alignItems="center" gap={1} mb={3}>
            <ScienceIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
              {topic.title}
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar 
                  src={topic.author.picture} 
                  alt={topic.author.username}
                  sx={{ width: 48, height: 48 }}
                >
                  {topic.author.username[0]}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {topic.author.username}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Posted on {new Date(topic.timestampISO).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex" justifyContent="flex-end" gap={1}>
                <IconButton size="small" color="primary">
                  <ShareIcon />
                </IconButton>
                <IconButton size="small" color="primary">
                  <BookmarkIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Box display="flex" gap={2} mb={4}>
            <Chip
              icon={<ViewIcon />}
              label={`${topic.viewcount} Views`}
              variant="outlined"
              sx={{ bgcolor: '#fff' }}
            />
            <Chip
              icon={<CommentIcon />}
              label={`${topic.postcount} Replies`}
              variant="outlined"
              sx={{ bgcolor: '#fff' }}
            />
            <Chip 
              label={topic.category.name} 
              color="primary"
              variant="outlined"
              sx={{ bgcolor: '#fff' }}
            />
          </Box>

          <Divider sx={{ mb: 4 }} />

          {topic.posts &&
            topic.posts.map((post, index) => {
              const { images, textContent } = processPostContent(post.content);
              
              return (
                <Card 
                  key={post.pid} 
                  elevation={0}
                  sx={{ 
                    mb: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    '&:hover': {
                      boxShadow: 1
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center" gap={2} mb={3}>
                      <Avatar 
                        src={post.user.picture} 
                        alt={post.user.username}
                        sx={{ width: 40, height: 40 }}
                      >
                        {post.user.username[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                          {post.user.username}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(post.timestampISO).toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mb: 3,
                        color: 'text.primary',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        "& a": {
                          color: "primary.main",
                          textDecoration: "none",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        },
                        "& ul, & ol": {
                          pl: 3,
                          mb: 2,
                        },
                        "& h3, & h4": {
                          mt: 2,
                          mb: 1,
                          fontWeight: 600,
                        },
                        "& p": {
                          mb: 2,
                        },
                      }}
                      dangerouslySetInnerHTML={{ __html: textContent }}
                    />

                    {images.length > 0 && (
                      <ImageList 
                        sx={{ 
                          width: '100%', 
                          maxHeight: 450,
                          mb: 3,
                          borderRadius: 1,
                          overflow: 'hidden'
                        }} 
                        cols={images.length > 1 ? 2 : 1} 
                        rowHeight={images.length > 1 ? 225 : 450}
                      >
                        {images.map((img, i) => (
                          <ImageListItem key={i}>
                            <picture>
                              <source srcSet={img} type="image/webp" />
                              <img
                                src={img}
                                alt={`Post image ${i + 1}`}
                                loading="lazy"
                                style={{ 
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            </picture>
                          </ImageListItem>
                        ))}
                      </ImageList>
                    )}

                    <Box display="flex" alignItems="center" gap={2}>
                      <Box display="flex" alignItems="center">
                        <IconButton size="small" color="primary">
                          <ThumbUpIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {post.upvotes}
                        </Typography>
                      </Box>

                      <Box display="flex" alignItems="center">
                        <IconButton size="small" color="primary">
                          <ThumbDownIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">
                          {post.downvotes}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
        </Box>
      </Paper>
    </Container>
    <Footer />
  </div>
   
  );
};

export default TopicDetailPage;