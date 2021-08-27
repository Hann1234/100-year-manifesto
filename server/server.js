const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const missionStatementRouter = require('.routes/missionStatement.router');
const mantrasRouter = require('.routes/mantras.router');
const coreValuesRouter = require('.routes/coreValues.router');
const forGoodRouter = require('.routes/forGood.router');
const lifeGoalsRouter = require('.routes/lifeGoals.router');
const guidingPrinciplesRouter = require('.routes/guidingPrinciples.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/missionStatement', missionStatementRouter );
app.use('/api/mantras', mantrasRouter );
app.use('/api/coreValues', coreValuesRouter );
app.use('/api/forGood', forGoodRouter );
app.use('/api/lifeGoals', lifeGoalsRouter );
app.use('/api/guidingPrinciples', guidingPrinciplesRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
