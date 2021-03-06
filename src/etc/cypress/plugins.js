/// <reference types="cypress" />
// ***********************************************************
// This example plugins.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import cc from '@cypress/code-coverage/task';

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // 1st arg, `on` is used to hook into various events Cypress emits
  // 2nd arg, `config` is the resolved Cypress config

  cc(on, config);

  // It's IMPORTANT to return the config object
  // with any changed environment variables
  return config;
};
