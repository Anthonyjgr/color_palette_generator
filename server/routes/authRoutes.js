import express from 'express';
import passport from "passport"
import { googleAuth, googleAuthCallback, githubAuth, githubAuthCallback } from '../controllers/authController.js';

const router = express.Router();

const redirectUrl =  'http://localhost:5173'

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) { return next(err); }
    //redirecton page after login 
    res.redirect(redirectUrl);
  });
});

router.get('/github', githubAuth);
router.get('/github/callback', githubAuthCallback);

export default router;





