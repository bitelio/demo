'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  isCollapsed = true;
  username = 'user@bitelio.com';
  currentBoard = 'EU (Frankfurt am Main)';
  availableBoards = [
    'Asia Pacific (Singapore)',
    'US East (New York)'
  ];

  constructor() {
    this.select = board => {
      this.availableBoards.push(this.currentBoard);
      this.currentBoard = this.availableBoards.shift(board);
    };
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.pug'),
    controller: NavbarComponent
  })
  .name;
