/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import Miss from '../db/mongo/models/misses';
import Misses from '../db/mongo/models/misses';
import * as defaultJson from '../utils/default_json';

export const allMiss = (req: Request, res: Response): void => {
  Misses.find((err: any, misses: any) => {
    if (err) {
      res.send('Error!');
    } else {
      res.send(misses);
    }
  });
};

export const deleteMiss = (req: Request, res: Response): void => {
  Misses.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ msg: 'Successfully Deleted miss' });
    }
  });
};

export const updateMiss = (req: Request, res: Response): void => {
  Misses.findByIdAndUpdate(req.params.id, req.body, (err: any, miss: any) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ msg: 'Successfully update miss' });
    }
  });
};

export const addMiss = (req: Request, res: Response): void => {
  const miss = new Miss(req.body);
  miss.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(miss);
    }
  });
};

export const increaseMiss = async (req: Request, res: Response) => {
  let count = 0;
  await Misses.findById(
    req.body.id,
    (err: any, user: any) => (count = parseInt(user['view'])),
  );
  const newView = { view: count + 1 };
  Misses.findByIdAndUpdate(
    req.body.id,
    newView as any,
    (err: any, miss: any) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ msg: 'Successfully update miss' });
      }
    },
  );
};

export const addDefaultMiss = async (req: Request, res: Response) => {
  Misses.find((err: any, misses: any) => {
    if (misses.length > 0) {
      res.send('Error, misses default already add');
      return;
    }
  });

  for (const actualMiss of defaultJson.defaultJson) {
    const miss = new Miss(actualMiss);
    await miss.save();
  }
  res.json({ msg: 'success' });
};
