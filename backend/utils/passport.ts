import passport from "passport";
import User from  "../models/User";
import passportJwt from "passport-jwt";

// Passport.js configuration

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

function verifyCallback(payload, done) {
    return User.findOne({ _id: payload.id })
        .then( user => {
            return done(null, user);
        })
        .catch( err => {
            return done(err);
        })
}

export default () => {

    const config = {
    	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET_TOKEN
    }

    passport.use(User.createStrategy());
    passport.use(new JWTStrategy(config, verifyCallback));
}