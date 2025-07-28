import React, { useState } from "react";
import "@/style/NewsItem.css";
import {
  Tooltip,
  Typography,
  Button,
  Dialog,
  DialogContent,
  Box,
  IconButton,
  CircularProgress, // 确保导入
} from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew"; // 用于跳转图标
import { post } from "@/utils/api"; 

function NewsItem({ article }) {
  const [imageError, setImageError] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setOpenDialog(true);
    setLoading(true);
    setSummary("");
  
    try {
      const response = await post("/api/news/summarize", {
        url: article.url,
      });
      setSummary(response.summary); // 直接访问 summary
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("Unable to generate summary. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = () => {
    window.open(article.url, "_blank", "noopener,noreferrer"); // 跳转到原文章
    // setOpenDialog(false); // 可选：跳转后关闭对话框
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <li className="news-item">
      <div className="news-card">
        <div className="image-container">
          <img
            src={imageError ? "/defaultNews.jpg" : article.image || "/defaultNews.jpg"}
            alt={article.title}
            onError={() => setImageError(true)}
          />
        </div>
        <div className="content">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="title"
          >
            {article.title}
          </a>

          <p className="description">
            {article.summary || article.description || ""}
          </p>


          <div className="meta">
            {article.author && (
              <span className="author">
                <i className="fas fa-user" style={{ color: "#1a73e8", marginRight: "5px" }}></i>
                {article.author}
              </span>
            )}
            {article.publishedAt && (
              <span className="date">
                <i className="far fa-clock" style={{ color: "#1a73e8", marginRight: "5px" }}></i>
                {new Date(article.publishedAt).toLocaleDateString("en-US")}
              </span>
            )}
            {article.category && article.category.length > 0 && (
              <span className="categories">
                <i className="fas fa-tags" style={{ color: "#1a73e8", marginRight: "5px" }}></i>
                {article.category.join(", ")}
              </span>
            )}
          </div>

          <Button
            size="small"
            onClick={handleSummarize}
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              color: "#1a73e8",
              textTransform: "none",
              fontSize: "12px",
              padding: "4px 10px",
              "&:hover": {
                backgroundColor: "rgba(26, 115, 232, 0.1)",
              },
            }}
          >
            <SmartToyIcon sx={{ fontSize: "16px", marginRight: "4px" }} />
            AI Summarize
          </Button>
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)",
            color: "#fff",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(74, 144, 226, 0.3)",
          },
        }}
      >
        <Box sx={{ position: "relative", padding: "20px" }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{ position: "absolute", top: "10px", right: "10px", color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #1a73e8, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
            }}
          >
            AI Generated Summary
          </Typography>
          <DialogContent sx={{ padding: 0 }}>
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                <CircularProgress sx={{ color: "#00d4ff" }} />
              </Box>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  backdropFilter: "blur(5px)",
                }}
              >
                {summary}
              </Typography>
            )}
          </DialogContent>
          {!loading && (
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <Button
                variant="outlined"
                onClick={handleReadMore}
                sx={{
                  color: "#00d4ff",
                  borderColor: "#00d4ff",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 212, 255, 0.1)",
                    borderColor: "#1a73e8",
                  },
                }}
              >
                <OpenInNewIcon sx={{ fontSize: "18px", marginRight: "5px" }} />
                Interested? Read the full article
              </Button>
            </Box>
          )}
        </Box>
      </Dialog>
    </li>
  );
}

export default NewsItem;