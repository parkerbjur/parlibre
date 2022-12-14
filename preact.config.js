import dotenv from 'dotenv';
const environmentVariables = dotenv.config().parsed;

/**
 * @param {import('preact-cli').Config} config - Original webpack config
 * @param {import('preact-cli').Env} env - Current environment info
 * @param {import('preact-cli').Helpers} helpers - Object with useful helpers for working with the webpack config
 */
export default (config, env, helpers) => {
  const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
  console.log("---DOTENV SETUP---")
  for (const key in environmentVariables) {
    console.log(key, environmentVariables[key]);
    plugin.definitions[`process.env.${key}`] = JSON.stringify(environmentVariables[key]);
  }
}