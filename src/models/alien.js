/* eslint-disable func-names */
import fs from 'fs';
import path from 'path';
import uuid from 'uuid';
const file = path.join(__dirname, '../../data/aliens.json');
// import logger from '../config/logging';

function Alien(o) {
  this.id = uuid.v4();
  this.name = o.name;
  this.planet = o.planet;
  this.photo = o.photo;
}

module.exports = Alien;

Alien.prototype.save = function () {
  fs.writeFileSync(file, `${JSON.stringify(this)}\n`, { flag: 'a' });
};

Alien.find = function (id) {
  let data = fs.readFileSync(file, { encoding: 'utf8' });
  data = data.split('\n');
  data.pop();
  data = data.map(d => JSON.parse(d));

  let returnValue;
  if (id) {
    returnValue = data.find(d => d.id === id);
  } else {
    returnValue = data;
  }
  return returnValue;
};
