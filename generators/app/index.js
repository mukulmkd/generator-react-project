'use strict';
const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    start() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name without spaces: ',
            default: 'MyApp'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Your project description: ',
            default: ''
        }])
            .then((answers) => {
                this.fs.copyTpl(
                    this.templatePath('webpack.config.js'),
                    this.destinationPath('webpack.config.js'),
                    { title: answers.name }
                );

                this.fs.copyTpl(
                    this.templatePath('webpack.config.prod.js'),
                    this.destinationPath('webpack.config.prod.js'),
                    { title: answers.name }
                );

                this.fs.copyTpl(
                    this.templatePath('package.json'),
                    this.destinationPath('package.json'),
                    {
                        title: answers.name.toLowerCase(),
                        description: answers.description
                    }
                );

                mkdirp.sync('dist');

                this.fs.copyTpl(
                    this.templatePath('dist/index.html'),
                    this.destinationPath('dist/index.html'),
                    {
                        title: answers.name.toLowerCase()
                    }
                );
            });
    }

    installModules() {
        this.npmInstall([
            'css-loader',
            'style-loader',
            'url-loader',
            'dts-bundle',
            'html-webpack-plugin',
            'on-build-webpack',
            'promise',
            'ts-loader',
            'webpack',
            'webpack-cli',
            'webpack-dev-server',
            'fetch-mock',
            'gherkin',
            'tslint',
            'tslint-react'
        ], { 'save-dev': true });

        this.npmInstall([
            '@types/microsoft-ajax',
            '@types/promise',
            '@types/react',
            '@types/react-dom',
            '@types/react-router-dom',
            '@types/react-redux',
            'immutable',
            'react',
            'react-dom',
            'react-router-dom',
            'react-redux',
            'redux',
            'typescript',
            'axios',
            'office-ui-fabric',
            'office-ui-fabric-react'
            // Install Types for your cutom project e.g. 'git+https://github.com/mukulmkd/YourTSProj'
        ], { 'save': true });
    }

    write() {
        this.fs.copyTpl(
            this.templatePath('tsconfig.json'),
            this.destinationPath('tsconfig.json')
        );

        this.fs.copyTpl(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copyTpl(
            this.templatePath('src/index.tsx'),
            this.destinationPath('src/index.tsx')
        );

        this.fs.copyTpl(
            this.templatePath('tslint.json'),
            this.destinationPath('tslint.json')
        );

        this.fs.copyTpl(
            this.templatePath('types/json.d.ts'),
            this.destinationPath('types/json.d.ts')
        );
    }
};