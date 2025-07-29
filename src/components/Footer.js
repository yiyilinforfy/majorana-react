import React, { useState } from "react";
import { Dialog, DialogContent, DialogActions, Button, Typography, List, ListItem, ListItemText } from "@mui/material";

function Footer() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const privacyPolicyContent = (
    <>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
        Privacy Policy
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
        Last Updated: February 25, 2025
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
        At Majorana Lab, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, which provides quantum computing news, forums, and educational resources.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>1. Information We Collect</Typography>}
            secondary={
              <>
                We may collect:
                <List dense>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- Personal Information: Email addresses or usernames if you register for our forums or subscribe to news updates.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- Usage Data: Information about how you interact with our site (e.g., pages visited, time spent) via cookies and analytics tools.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- User-Generated Content: Posts, comments, or other contributions you make in our forums.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>2. How We Use Your Information</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- To provide and improve our services, such as delivering quantum computing news and managing forum discussions.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- To communicate with you, including responding to inquiries sent to majorana.lab@gmail.com.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- To analyze site usage and enhance user experience.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>3. Data Sharing</Typography>}
            secondary={
              <>
                We do not sell your personal information. We may share data with:
                <List dense>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- Service providers (e.g., hosting or analytics services) under strict confidentiality agreements.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- Legal authorities if required by law.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>4. Cookies</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>We use cookies to improve functionality and track usage. You can disable cookies in your browser settings, but some features may not work as intended.</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>5. Your Rights</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>You may request access, correction, or deletion of your data by contacting us at majorana.lab@gmail.com.</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>6. Security</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>We implement reasonable measures to protect your data, though no system is entirely secure.</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>7. Changes to This Policy</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>We may update this policy periodically. Check this page for the latest version.</Typography>}
          />
        </ListItem>
      </List>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }} gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
        For questions, email us at majorana.lab@gmail.com.
      </Typography>
    </>
  );

  const termsOfServiceContent = (
    <>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
        Terms of Service
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
        Last Updated: February 25, 2025
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
        Welcome to Majorana Lab! These Terms of Service govern your use of our website, which offers quantum computing news, a user forum, and educational resources. By accessing our site, you agree to these terms.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>1. Use of Our Services</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- You may use our site to read news, participate in forums, and access quantum computing resources.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- You must not misuse our services (e.g., posting spam, harmful content, or violating laws).</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>2. User Accounts</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- Forum participation requires registration. Keep your account details secure and do not share them.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- You are responsible for all activity under your account.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>3. Content</Typography>}
            secondary={
              <>
                <List dense>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- User-Generated Content: Posts in our forum are your responsibility. Do not post illegal, offensive, or infringing material.</Typography></ListItem>
                  <ListItem><Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>- Our Content: News and resources on Majorana Lab are for personal, non-commercial use. Do not reproduce without permission.</Typography></ListItem>
                </List>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>4. Intellectual Property</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>We own or license the content we provide. Your forum posts grant us a non-exclusive license to display them.</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>5. Termination</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>We may suspend or terminate your access if you violate these terms.</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>6. Liability</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>We are not liable for inaccuracies in news or resources or for forum content posted by users.</Typography>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }}>7. Changes to Terms</Typography>}
            secondary={<Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>We may update these terms. Continued use after changes implies acceptance.</Typography>}
          />
        </ListItem>
      </List>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: { xs: "0.875rem", sm: "1rem" } }} gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
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
      <footer className="bg-black bg-opacity-90 backdrop-blur-md border-t border-cyan-500/20 shadow-[0_-4px_20px_rgba(0,212,255,0.1)] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-['Orbitron']">
          <div className="text-white text-sm sm:text-base tracking-wide">
            © 2025 Majorana.Lab. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="https://x.com/halotss"
              target="_blank"
              rel="noreferrer"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 hover:[text-shadow:0_0_10px_rgba(0,212,255,0.5)] transition-all duration-300"
            >
              Follow us on X
            </a>
            <span
              onClick={() => handleOpenDialog(privacyPolicyContent)}
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 hover:[text-shadow:0_0_10px_rgba(0,212,255,0.5)] transition-all duration-300 cursor-pointer"
            >
              Privacy Policy
            </span>
            <span
              onClick={() => handleOpenDialog(termsOfServiceContent)}
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 hover:[text-shadow:0_0_10px_rgba(0,212,255,0.5)] transition-all duration-300 cursor-pointer"
            >
              Terms of Service
            </span>
          </div>
        </div>
      </footer>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            maxWidth: { xs: "90%", sm: "80%", md: "600px" },
            margin: { xs: 2, sm: 4 },
            padding: { xs: 2, sm: 4 },
          },
        }}
      >
        <DialogContent>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: "#00d4ff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(0, 212, 255, 0.1)" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Footer;