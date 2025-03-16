const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Admin = require("../models/admin");
const dotenv = require("dotenv");

dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try{
                let admin = await Admin.findOne({email: profile.emails[0].value});

                if(!admin) {
                    admin = await Admin.create({
                        username: profile.displatName,
                        email: profile.emails[0].value,
                        password: "google-auth",
                    })
                }
                return done(null,admin);
            }catch (error) {
                return done(error, null);
            }
        }
    )
);

passport.serializeUser((admin,done) => {
    done(null, admin.id);
});

passport.deserializeUser(async (id, done) => {
    const admin = await Admin.findById(id);
    done(null, admin);
});

module.exports = passport;