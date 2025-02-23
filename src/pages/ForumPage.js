import React, { useState, useEffect } from "react";
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
  Box
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
    <Box sx={{ p: 3, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Latest Posts
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
          sx={{ backgroundColor: "#2196f3" }}
        >
          Create New Post
        </Button>
      </Box>

      <Grid container spacing={3}>
        {topics.map((topic) => (
          <Grid item xs={12} md={6} lg={4} key={topic.tid}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom noWrap>
                  <a
                    href={`/topic/${topic.tid}`} // 修改这里的链接
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {topic.title}
                  </a>
                </Typography>

                <Typography color="textSecondary" gutterBottom>
                  By {topic.user.username}
                </Typography>

                <Box display="flex" alignItems="center" gap={2} mt={2}>
                  <Box display="flex" alignItems="center">
                    <CommentIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{topic.postcount}</Typography>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <ViewIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{topic.viewcount}</Typography>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <CategoryIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">
                      {topic.category.name}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="caption"
                  display="block"
                  mt={1}
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
      >
        <DialogTitle>Create New Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="outlined"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Content"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
            sx={{ mb: 2 }}
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
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="questions">Questions</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={handlePostSubmit}
            variant="contained"
            color="primary"
          >
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ForumPage;
