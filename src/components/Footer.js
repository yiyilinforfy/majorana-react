/*
 * @Author: linyi 1195190035@qq.com
 * @Date: 2025-02-24 22:20:16
 * @LastEditors: linyi 1195190035@qq.com
 * @LastEditTime: 2025-02-24 22:23:53
 * @FilePath: \majorana-react\src\components\Footer.js
 * @Description: Footer component with email link and styled dialog content
 */
import React, { useState } from "react";
import { Dialog, DialogContent, DialogActions, Button, Typography, List, ListItem, ListItemText } from "@mui/material";

function Footer() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const privacyPolicyContent = (
    // ... 保持不变，见问题中的原始内容
    // 这里省略具体内容以节省篇幅，实际使用时保留完整 Privacy Policy
    <>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Privacy Policy
      </Typography>
      <Typography variant="body2" gutterBottom>
        Last Updated: February 25, 2025
      </Typography>
      <Typography variant="body1" paragraph>
        At Majorana Lab, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, which provides quantum computing news, forums, and educational resources.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>1. Information We Collect</Typography>}
            secondary={
              <>
                We may collect:
                <List dense>
                  <ListItem><Typography variant="body2">- Personal Information: Email addresses or usernames if you register for our forums or subscribe to news updates.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- Usage Data: Information about how you interact with our site (e.g., pages visited, time spent) via cookies and analytics tools.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- User-Generated Content: Posts, comments, or other contributions you make in our forums.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>2. How We Use Your Information</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2">- To provide and improve our services, such as delivering quantum computing news and managing forum discussions.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- To communicate with you, including responding to inquiries sent to majorana.lab@gmail.com.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- To analyze site usage and enhance user experience.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>3. Data Sharing</Typography>}
            secondary={
              <>
                We do not sell your personal information. We may share data with:
                <List dense>
                  <ListItem><Typography variant="body2">- Service providers (e.g., hosting or analytics services) under strict confidentiality agreements.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- Legal authorities if required by law.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>4. Cookies</Typography>}
            secondary="We use cookies to improve functionality and track usage. You can disable cookies in your browser settings, but some features may not work as intended."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>5. Your Rights</Typography>}
            secondary="You may request access, correction, or deletion of your data by contacting us at majorana.lab@gmail.com."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>6. Security</Typography>}
            secondary="We implement reasonable measures to protect your data, though no system is entirely secure."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>7. Changes to This Policy</Typography>}
            secondary="We may update this policy periodically. Check this page for the latest version."
          />
        </ListItem>
      </List>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body2">
        For questions, email us at majorana.lab@gmail.com.
      </Typography>
    </>
  );

  const termsOfServiceContent = (
    // ... 保持不变，见问题中的原始内容
    // 这里省略具体内容以节省篇幅，实际使用时保留完整 Terms of Service
    <>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Terms of Service
      </Typography>
      <Typography variant="body2" gutterBottom>
        Last Updated: February 25, 2025
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Majorana Lab! These Terms of Service govern your use of our website, which offers quantum computing news, a user forum, and educational resources. By accessing our site, you agree to these terms.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>1. Use of Our Services</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2">- You may use our site to read news, participate in forums, and access quantum computing resources.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- You must not misuse our services (e.g., posting spam, harmful content, or violating laws).</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>2. User Accounts</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2">- Forum participation requires registration. Keep your account details secure and do not share them.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- You are responsible for all activity under your account.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>3. Content</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2">- User-Generated Content: Posts in our forum are your responsibility. Do not post illegal, offensive, or infringing material.</Typography></ListItem>
                  <ListItem><Typography variant="body2">- Our Content: News and resources on Majorana Lab are for personal, non-commercial use. Do not reproduce without permission.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>4. Intellectual Property</Typography>}
            secondary="We own or license the content we provide. Your forum posts grant us a non-exclusive license to display them."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>5. Termination</Typography>}
            secondary="We may suspend or terminate your access if you violate these terms."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>6. Liability</Typography>}
            secondary="Our site is provided 'as is.' We are not liable for inaccuracies in news or resources or for forum content posted by users."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>7. Changes to Terms</Typography>}
            secondary="We may update these terms. Continued use after changes implies acceptance."
          />
        </ListItem>
      </List>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body2">
        For questions, email majorana.lab@gmail.com.
      </Typography>
    </>
  );

  const handleOpenDialog = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.copyright}>
            <p style={styles.copyrightText}>
              © 2025 Majorana.Lab. All rights reserved.
            </p>
          </div>
          <div style={styles.links}>
            <a 
              href="https://x.com/halotss" 
              style={styles.footerLink}
              target="_blank"
            >
              Follow us on X
            </a>
            <span
              onClick={() => handleOpenDialog(privacyPolicyContent)}
              style={{ ...styles.footerLink, cursor: "pointer" }}
            >
              Privacy Policy
            </span>
            <span
              onClick={() => handleOpenDialog(termsOfServiceContent)}
              style={{ ...styles.footerLink, cursor: "pointer" }}
            >
              Terms of Service
            </span>
          </div>
        </div>
      </footer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogContent sx={{ padding: "40px" }}>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const styles = {
  footer: {
    background: "#f5f7fa", // 浅灰蓝色，与白底更协调
    color: "#333", // 深灰色文字，与页面一致
    padding: "20px 40px",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)", // 轻灰色边框
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.05)", // 轻微阴影
    position: "relative",
    zIndex: 100,
  },
  footerContent: {
    // maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  copyright: {
    fontSize: "14px",
    color: "#666", // 灰色文字，与页面一致
  },
  copyrightText: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "25px", // 略增大间距
  },
  footerLink: {
    color: "#2a5bd7", // 蓝色链接，与主题一致
    textDecoration: "none",
    fontSize: "15px", // 增大字体，保持可见性
    fontWeight: "600", // 加粗，突出显示
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#1e429f", // 深蓝色悬停效果
    },
  },
};

export default Footer;