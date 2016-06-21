/* eslint-disable new-cap*/
import Alien from '../models/alien';
import express from 'express';
// import logger from '../config/logging';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const aliens = Alien.find();
  res.render('aliens/index', { aliens });
});

router.get('/new', (req, res) => {
  res.render('aliens/new');
});

router.get('/:id', (req, res) => {
  const alien = Alien.find(req.params.id);
  res.render('aliens/show', { alien });
});

router.post('/', (req, res) => {
  const alien = new Alien(req.body);
  alien.save();
  res.redirect('/aliens');
});
