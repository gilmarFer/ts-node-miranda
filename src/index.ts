// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import express, { Request, Response, NextFunction } from 'express';
import * as missesController from './controllers/missController';
import * as versionController from './controllers/versionController';
import cors from 'cors';
import conn from './db/mongo/mongoseConnect';

// Our Express APP config
const app = express();
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });
app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);

conn;

function admMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.body.key == process.env.KEY) next();
  else {
    res.statusCode = 401;
    res.json({ error: 'Unauthorized' });
  }
}

// API Endpoints
app.get('/masses', missesController.allMiss);
app.post('/addDefaultMasses', admMiddleware, missesController.addDefaultMiss);
app.post('/masses', admMiddleware, missesController.addMiss);
app.put('/masses/:id', admMiddleware, missesController.updateMiss);
app.put('/increase', missesController.increaseMiss);
app.delete('/masses/:id', admMiddleware, missesController.deleteMiss);

app.get('/version', versionController.version);
app.put('/version', admMiddleware, versionController.updateVersion);
app.put('/plusVersion', admMiddleware, versionController.plusVersion);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on http://localhost:${process.env.PORT}`);
});
