let fs = require('fs')
let path = require('path')
const gitIgnore = fs.readFileSync(path.resolve(__dirname, './.gitignore'))
const solcover = fs.readFileSync(path.resolve(__dirname, './solcover.js'))
const slither = fs.readFileSync(path.resolve(__dirname, './slither.config.json'))
const hardhatConfig = fs.readFileSync(path.resolve(__dirname, './hardhat.config.js'))
const truffleConfig = fs.readFileSync(path.resolve(__dirname, './truffle-config.js'))
const prettier = fs.readFileSync(path.resolve(__dirname, './.prettierrc'))
const package = fs.readFileSync(path.resolve(__dirname, 'package.json'))
module.exports = {
    '.gitignore': gitIgnore,
    'solcover.js': solcover,
    'slither.config.json': slither,
    'truffle-config.js': truffleConfig,
    'hardhat.config.js': hardhatConfig,
    '.prettierrc': prettier,
    'package.json': package
}

