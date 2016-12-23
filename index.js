const path = require('path');
var chalk  = require('chalk');

const loadConfig = (config) => {

    const env          = process.env.NODE_ENV; // dev - production - test

    if (!config.path) {
        throw Error('[choice-maker] [error] Missing path for config directory');
    }

    const configPath = config.path;

    var config = require(path.join(configPath, 'production'));

    console.log(chalk.yellow(`[choice-maker] ENV: ${env}`));
    console.log(chalk.green(`[choice-maker] [ok] File production.js loaded`))

    if (env == 'development') {
        var config_dev = require(path.join(configPath, 'dev'));
        var config     = Object.assign({}, config, config_dev);
        console.log(chalk.green(`[choice-maker] [ok] File dev.js loaded`));
    }

    try {
        var config_maker = require(path.join(configPath, 'god'));
        var config       = Object.assign({}, config, config_maker);
        console.log(chalk.green(`[choice-maker] [ok] File ${'god'}.js loaded`))
    } catch (e) {
        console.log(chalk.red(`[choice-maker] [error] File ${'god'}.js not found`))
    }

    config = Object.assign({}, config, {env, isDev: env == 'development', isProduction: env == 'production'});

    return config;

}


module.exports = loadConfig;
