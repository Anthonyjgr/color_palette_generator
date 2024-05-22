import passport from 'passport';


export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});


export const googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: 'http://localhost:5173/',
});

export const githubAuth = passport.authenticate('github', {
  scope: ['user:email'],
});

export const githubAuthCallback = passport.authenticate('github', {
  failureRedirect: '/login',
  successRedirect: 'http://localhost:5173/',
});
