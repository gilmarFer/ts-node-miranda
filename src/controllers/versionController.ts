/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import Version from '../db/mongo/models/version';

export const version = (req: Request, res: Response): void => {
  Version.find((err: any, version: any) => {
    if (version.length == 0) {
      addVersion(1);
      res.json({ version: 1 });
      return;
    }
    if (err) {
      res.send('Error!');
    } else {
      res.send(version);
    }
  });
};

export const updateVersion = (req: Request, res: Response): void => {
  let versionID: number;
  Version.find((err: any, version: any) => {
    if (version.length == 0) res.send('No version found');
    versionID = version[0]['_id'];
    Version.findByIdAndUpdate(versionID, req.body, (err: any, ver: any) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ msg: 'Successfully update version' });
      }
    });
  });
};

export const plusVersion = (req: Request, res: Response): void => {
  let versionID: number;
  let currentVersion: number;
  Version.find((err: any, version: any) => {
    if (version.length == 0) res.send('No version found');
    versionID = version[0]['_id'];
    currentVersion = version[0]['version'];
    Version.findByIdAndUpdate(
      versionID,
      { version: currentVersion + 1 },
      (err: any, ver: any) => {
        if (err) {
          res.send(err);
        } else {
          res.json({
            msg: 'Successfully update version to ' + (currentVersion + 1),
          });
        }
      },
    );
  });
};

const addVersion = (cv: any): void => {
  const ver = new Version({ version: cv });
  ver.save();
};
