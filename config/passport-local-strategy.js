const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/user');

passport.use(new LocalStrategy ({
    usernameField: 'email'
},function(email, password, done){
    user.findOne({email:email},function(err,user){
      if(err){
          console.log("Error in finding the user,,, awlele");
          return done(err);
      }
      if(!user || user.password != password){
          console.log('Invalid Username or Password');
          return done(null, false);
      }
      return done(null, user);
    });
}));

passport.serializeUser(function(user,done){
    done(null, user.id);
});

passport.deserializeUser(function(id,done){
    user.findById(id, function(err, user){
        if(err){
            console.log('Error in finding the user,,,, awlele');
            return done(err);
        }
        return done(null, user);
    });
});
passport.checkAuthenticate = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/sign-in');
}
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;