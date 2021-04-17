const Generator = require('yeoman-generator')

module.exports = class extends Generator {

    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname,
            }
        ]).then(answers => {
            this.answers = answers;
        })
    }

    writing() {
        // 把每个文件都通过模板转成目标路径
        const templates = [
            '.editorconfig',
            '.gitignore',
            '.prettierignore',
            '.prettierrc',
            '.umirc.ts',
            'package.json',
            'README.md',
            'tsconfig.json',
            'typings.d.ts',
            'mock/.gitkeep',
            'src/pages/index.tsx',
            'src/pages/index.less',
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers);
        })
    }
}

