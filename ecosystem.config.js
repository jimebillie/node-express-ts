/**
 *
 * @ref https://pm2.keymetrics.io/docs/usage/quick-start/
 * @topip Ecosystem File
 */
module.exports = {
    apps : [{
        name: "server-test",
        script: "./src/index.ts",
        interpreter:"./node_modules/.bin/nodemon",
        env: {
            NODE_ENV: "production",
        }
    }]
}