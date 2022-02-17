const express = require('express');
const router = express.Router();
const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy;

passport.use('kakao', new KakaoStrategy({
    clientID: '99455a953573feee91ee208a35859b1e',  //'카카오에서 발급받은 REST API Key 넣기',
    callbackURL: '/auth/kakao/callback',     // 위에서 설정한 Redirect URI
  }, async (accessToken, refreshToken) => {
    //console.log(profile);
    console.log(accessToken);
    console.log(refreshToken);
}))

router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (res, req) => {
  res.redirect('/auth');
});

module.exports = router;