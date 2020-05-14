const path = require('path')
const fs = require('fs-extra')
const child_process = require('child_process')
const request = require('sync-request')
const BUILD_CMD = 'node apidocs.js ' // leave space at end for specifying title as argument

function build(version, title) {
  const exPath = path.join('./ex', version)
  const themePath = path.join(exPath, 'typedoc-default-themes')
  const branch = version === 'edge' ? 'master' : version
  const docsPath = path.join(exPath, 'docs', 'api')
  const destPath = path.join('static', 'docs', 'api', version)

  console.log('Fetching Excalibur, version:', version, 'branch:', branch)

  if (!fs.existsSync(exPath)) {
    child_process.execSync(
      'git clone https://github.com/excaliburjs/Excalibur -b ' +
        branch +
        ' ' +
        exPath,
      { stdio: [0, 1, 2] }
    )
    child_process.execSync('git submodule update --init --recursive', {
      cwd: exPath,
      stdio: [0, 1, 2],
    })
  } else {
    child_process.execSync('git pull', { cwd: exPath, stdio: [0, 1, 2] })
  }
  child_process.execSync('git rev-parse HEAD', {
    cwd: exPath,
    stdio: [0, 1, 2],
  })

  if (!fs.existsSync(path.join(exPath, 'node_modules'))) {
    child_process.execSync('npm install', { cwd: exPath, stdio: [0, 1, 2] })
  }

  console.log('Removing existing docs...', destPath)

  // Remove existing docs
  fs.removeSync(destPath)

  console.log('Building docs...', BUILD_CMD + title)

  // Execute docs build step
  child_process.execSync(BUILD_CMD + title, {
    cwd: exPath,
    stdio: [0, 1, 2],
  })

  console.log('Copying compiled docs...', destPath)

  // Copy to destination docs folder
  fs.copySync(docsPath, destPath)
}

if (process.argv.length === 3) {
  // Build specific version
  console.info('Building specific version', process.argv[2])

  build(process.argv[2], process.argv[2])
} else {
  // Build edge
  build('edge', 'Edge')
}

if (process.env.SKIP_DOCS_RELEASES || (process.env.TRAVIS_CI && !process.env.GH_TOKEN)) {
  console.info(
    'Missing GH_TOKEN environment variable, skipping building release tags'
  )
  return
}

console.info('Retrieving GH releases...')

// Retrieve tags
let headers = {
  'User-Agent': 'excaliburjs.github.io/0.1',
}

if (process.env.GH_TOKEN) {
  headers['Authorization'] = 'token ' + process.env.GH_TOKEN
}

const res = request(
  'GET',
  'https://api.github.com/repos/excaliburjs/Excalibur/releases',
  { headers }
)

const releases = JSON.parse(res.getBody())

// Ignore drafts
const tags = releases.filter((r) => !r.draft).map((r) => r.tag_name)

console.info('Discovered', tags.length, 'releases:', tags)

// Pull latest site master with last docs built

console.info('Getting latest site master')
child_process.execSync(
  'git clone https://github.com/excaliburjs/excaliburjs.github.io -b master _current',
  { stdio: [0, 1, 2] }
)

tags.forEach(function (tag) {
  // Ignore releases that are already checked into source control
  if (fs.existsSync(path.join('_current', 'docs', 'api', tag))) {
    console.info(`Tagged version ${tag} exists already`)

    if (!fs.existsSync(path.join('static', 'docs', 'api', tag))) {
      // Copy to destination docs folder
      console.info('Copying pre-built tagged docs to static build folder')
      fs.copySync(
        path.join('_current', 'docs', 'api', tag),
        path.join('static', 'docs', 'api', tag)
      )
    }

    return
  }

  console.info('Tagged documentation', tag, "hasn't been built")

  build(tag, tag)
})
