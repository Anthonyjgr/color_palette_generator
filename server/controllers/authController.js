import passport from 'passport';
import dotenv from "dotenv"

dotenv.config()

const redirectUrl = process.env.SUCESS_REDIRECT


export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});


export const googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: redirectUrl,
});

export const githubAuth = passport.authenticate('github', {
  scope: ['user:email'],
});

export const githubAuthCallback = passport.authenticate('github', {
  failureRedirect: '/login',
  successRedirect: redirectUrl,
});
