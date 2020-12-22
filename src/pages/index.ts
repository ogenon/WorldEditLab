import { Application } from 'express';
import core from './core';
import schematics from './schematics';
import download from './download';

export const initPages = (app: Application) => {
  app.use('/', core);
  app.use('/schematics', schematics);
  app.use('/dl', download);
};
