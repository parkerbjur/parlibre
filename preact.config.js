import dotenv from 'dotenv';

/**
 * @param {import('preact-cli').Config} config - Original webpack config
 * @param {import('preact-cli').Env} env - Current environment info
 * @param {import('preact-cli').Helpers} helpers - Object with useful helpers for working with the webpack config
 */
export default (config, env, helpers) => {
  const fileEnv = dotenv.config().parsed;
  const codeBuildEnv = dotenv.config({ path: `.env` }).parsed;
  const { API_BASE } = codeBuildEnv
  let mergedEnv = { ...fileEnv, API_BASE };

  const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];

  console.log("---ENV SETUP---");
  console.log("fileEnv", fileEnv);
  console.log("codeBuildEnv", fileEnv);
  console.log("mergedEnv", fileEnv);
  for (const key in mergedEnv) {
    console.log(key, mergedEnv[key]);
    plugin.definitions[`process.env.${key}`] = JSON.stringify(mergedEnv[key]);
  }
}