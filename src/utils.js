const fse = require('fs-extra')
const path = require('path')

const currentDir = process.cwd()
const sourceRootDir = path.join(__dirname, '..')

const installApp = async () => {
  try {
    console.log('🍊 Installing app ...')

    const source = path.join(sourceRootDir, 'app')

    fse.copySync(source, currentDir)
  } catch (e) {
    throw Error(`Could not install app: ${e}`)
  }
}

const displaySuccessMessage = () => {
  console.log('\n✨ App was installed successfully!\n')
  console.log(
    'It is recommended to add these plugins to your IDE:\n'
  )
  console.log('   🔹 Prettier')
  console.log('   🔹 EditorConfig')

  console.log('\nHappy hacking!\n')
}

const displayErrorMessage = (error) => {
  console.error(`\n❌ ${error.message}\n`)
  console.log(
    'To get help with this problem, please submit an issue to: '
  )
  console.log('https://github.com/iampika/pika-setup/issues\n')
}

module.exports = {
  installApp,
  displaySuccessMessage,
  displayErrorMessage,
}
