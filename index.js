#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`
let templates = require('./templates/templates.js')


const createDirectory = () => {
    if (appName) {
        if (!fs.existsSync(appName)) {
            fs.mkdirSync(appName);
        }
    }
    else {
        console.log("\nNo app name was provided.".red)
        console.log("\nProvide an app name in the following format: ")
        console.log("\ncreate-smart-contract ", "app-name\n".cyan)
        process.exit()
    }
}
const cdIntoNewApp = () => {
    return new Promise(resolve => {
        shell.cd(appDirectory)
        // process.chdir(appDirectory)
        resolve()
    })
}
const createSmartContract = () => {
    return new Promise(resolve => {
        if (appName) {
            shell.exec(`truffle init ${appName}`, () => {
                console.log("Init truffle")
                shell.exec('npm init --yes')
                resolve(true)
            })
        } else {
            console.log("\nNo app name was provided.".red)
            console.log("\nProvide an app name in the following format: ")
            console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
            resolve(false)
        }
    })
}

const installPackages = () => {
    return new Promise(resolve => {
        console.log("\nInstalling hardhat, @openzeppelin/contracts, @truffle/hdwallet-provider, chai, solidity-docgen, truffle, @nomiclabs/hardhat-ethers, @nomiclabs/hardhat-truffle5, @nomiclabs/hardhat-waffle, @nomiclabs/hardhat-web3, eth-gas-reporter, ethereum-waffle, ethers, mocha, prettier, prettier-plugin-solidity, solc-0.7, solidity-coverage, truffle-assertions and web3\n".cyan)
        shell.exec(`npm install --save-dev hardhat @openzeppelin/contracts @truffle/hdwallet-provider chai solidity-docgen truffle @nomiclabs/hardhat-ethers @nomiclabs/hardhat-truffle5 @nomiclabs/hardhat-waffle @nomiclabs/hardhat-web3 eth-gas-reporter ethereum-waffle ethers mocha prettier prettier-plugin-solidity solidity-coverage truffle-assertions web3 solc-0.7@npm:solc@^0.7.0`, () => {
            console.log("\nFinished installing packages\n".green)
            resolve()
        })
    })
}

const updateTemplates = () => {
    return new Promise(resolve => {
        let promises = []
        Object.keys(templates).forEach((fileName, i) => {
            switch (fileName) {
                case 'package':
                    promises[i] = new Promise(res => {
                        let package = JSON.parse(templates[fileName])
                        package['name'] = appName
                        let data = JSON.stringify(package);
                        fs.writeFile(`${appDirectory}/${fileName}`, data, function (err) {
                            if (err) { return console.log(err) }
                            res()
                        })
                    })
                    break
                default:
                    promises[i] = new Promise(res => {
                        fs.writeFile(`${appDirectory}/${fileName}`, templates[fileName], function (err) {
                            if (err) { return console.log(err) }
                            res()
                        })
                    })
            }
        })

        Promise.all(promises).then(() => { resolve() })
    })
}

const run = async () => {
    let success = await createSmartContract()
    if (!success) {
        console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
        return false;
    }
    await cdIntoNewApp()
    await updateTemplates()
    await installPackages()
    console.log("All done")
}
run() 