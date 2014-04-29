# Excalibur.js Site

## Contributing and Editing Content

Be sure to fork the repository and make all your changes in the `site` branch. Send us a pull request with your changes!

All authored tutorials and documentation is under `content/docs` and are in [Markdown](http://daringfireball.net/projects/markdown/) format. The name of the Markdown file will be the name of the HTML file that gets generated at http://excaliburjs.com/docs. YAML configuration (such as navigation) is under `data` folder.

If you want to contribute a tutorial (or other documentation), all you need to know is Markdown! Create your Markdown tutorial in the `content/docs` folder (pending organizational changes) and send us a pull request to review it. We will add it to the navigation.

Tutorials can be organized into parts like so:
- quickstart.md
- quickstart-appendix1.md
- quickstart-appendix2.md

You can name them however, but it would be best to keep the same prefix. We can then add the additional steps as sub-navigation items to the menu so they'll only display when you view your tutorial.

**Note:** We do support [GHFM](https://help.github.com/articles/github-flavored-markdown) for fenced code blocks. 

## Getting Started

### Requirements

- Node.js (0.10.x)
- Windows or Unix-like

Once you've cloned the repository, run the following commands:

    # If not already installed, install grunt globally
    npm install grunt -g

    # Install dependencies
    npm install

    # Run site for local development
    grunt design

We recommend using the free [Brackets](http://brackets.io) editor since it's easy to use and works on any platform.

## Deploying

If you're a core contributor, it's easy to push the site to GitHub. Just run:

    grunt deploy
    
You may need to type in your credentials, but after that the production site will be updated.

**Tip:** Don't do this if you don't want the latest changes to be public!

## Adding to Showcase

Edit the `showcase.json` file in `data`. Upload an image to `assets/images/showcase` as a PNG.

### Git Submodules

If the showcase is in Git and can be run in a sub-directory, you can initialize
a submodule in the `showcase` directory.

    git submodule add {clone url} showcase/{showcase name}
    
Example:

    git submodule add https://github.com/eonarheim/Excalibur-Shmup showcase/shmup
    
This is how we can include the Shoot 'Em Up demo without maintaining two versions.
