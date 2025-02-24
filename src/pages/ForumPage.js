import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Container,
  Divider
} from '@mui/material';
import { 
  Add as AddIcon,
  Comment as CommentIcon, 
  Visibility as ViewIcon,
  Category as CategoryIcon
} from '@mui/icons-material';

const ForumPage = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: ''
  });

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/forum/topics"
        );
        setTopics(response.data.topics);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handlePostSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/forum/publish", newPost);
      handleCloseDialog();
      // Refresh topics
      const response = await axios.get("http://localhost:3000/api/forum/topics");
      setTopics(response.data.topics);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Typography variant="h5">Loading...</Typography>
    </Box>
  );
  
  if (error) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Typography color="error">Error: {error}</Typography>
    </Box>
  );

  return (
    <div>
       <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              Community Forum
            </Typography>
            <Typography variant="h6" sx={{ color: "#666", mb: 4 }}>
              Join the discussion about quantum computing and share your insights
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenDialog}
              sx={{
                backgroundColor: "#1890ff",
                padding: "12px 24px",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "#40a9ff",
                },
              }}
            >
              Create New Post
            </Button>
          </Box>

          <Grid container spacing={4}>
            {topics.map((topic) => (
              <Grid item xs={12} md={6} lg={4} key={topic.tid}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    border: "1px solid #f0f0f0",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        lineHeight: 1.4,
                      }}
                    >
                      <a
                        href={`/topic/${topic.tid}`}
                        style={{
                          textDecoration: "none",
                          color: "#1a1a1a",
                          "&:hover": {
                            color: "#1890ff",
                          },
                        }}
                      >
                        {topic.title}
                      </a>
                    </Typography>

                    <Typography
                      color="textSecondary"
                      gutterBottom
                      sx={{ fontSize: "0.9rem", mb: 2 }}
                    >
                      Posted by {topic.user.username}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mt={2}
                    >
                      <Box display="flex" alignItems="center" gap={3}>
                        <Box display="flex" alignItems="center">
                          <CommentIcon
                            fontSize="small"
                            sx={{ mr: 1, color: "#1890ff" }}
                          />
                          <Typography variant="body2">
                            {topic.postcount}
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center">
                          <ViewIcon
                            fontSize="small"
                            sx={{ mr: 1, color: "#1890ff" }}
                          />
                          <Typography variant="body2">
                            {topic.viewcount}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          backgroundColor: "#f5f5f5",
                          padding: "4px 12px",
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <CategoryIcon
                          fontSize="small"
                          sx={{ mr: 1, color: "#666" }}
                        />
                        <Typography variant="body2" color="textSecondary">
                          {topic.category.name}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="caption"
                      display="block"
                      mt={2}
                      color="textSecondary"
                    >
                      {new Date(topic.timestampISO).toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 2,
                p: 2,
              },
            }}
          >
            <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Create New Post
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                fullWidth
                variant="outlined"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                sx={{ mb: 3 }}
              />
              <TextField
                margin="dense"
                label="Content"
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                sx={{ mb: 3 }}
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select
                  value={newPost.category}
                  onChange={(e) =>
                    setNewPost({ ...newPost, category: e.target.value })
                  }
                  label="Category"
                >
                  <MenuItem value="general">General Discussion</MenuItem>
                  <MenuItem value="technology">Quantum Technology</MenuItem>
                  <MenuItem value="questions">Q&A</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={handleCloseDialog} sx={{ color: "#666" }}>
                Cancel
              </Button>
              <Button
                onClick={handlePostSubmit}
                variant="contained"
                sx={{
                  backgroundColor: "#1890ff",
                  "&:hover": {
                    backgroundColor: "#40a9ff",
                  },
                }}
              >
                Publish Post
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
      <Footer />
    </div>
   
  );
};

export default ForumPage;
