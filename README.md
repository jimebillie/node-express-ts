# 🔌 Step setup
> Setup list :
> 
>  `Nodejs` + `Typescript` + `express` + `nodemon` and `pm2`

```shell
# 1.Install typescript and tsc
npm i -g tsc typescript

# 2.Generate tsconfig.json
tsc --init

# 3.Generate npm initial
npm init -y

# 4.Install dependencies like this.
# Example npm i @types/express
"dependencies": {
    "@types/express": "^4.17.21",
    "express": "^4.18.3",
    "nodemon": "^3.1.0",
    "ts-node": "^10.9.2"
}
```

## ⚙️ Config : `package.json`
```json
{
  "main": "src/index.ts",
  "scripts": {
    "dev": "nodemon src/index.ts",
    "pm2": "pm2 start ecosystem.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## PM2 Zone
> Create file `ecosystem.config.js`
```js
module.exports = {
    apps : [{
        name: "server",
        script: "./src/index.ts",
        interpreter:"./node_modules/.bin/nodemon",
        env: {
            NODE_ENV: "production",
        }
    }]
}
```