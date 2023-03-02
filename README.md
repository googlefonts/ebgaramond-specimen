# EB Garamond website

Welcome to the specimen showcase of the EB Garamond font, the revival of an eternal classic.

`/src` contains the complete source website files for editing and changes.

`/docs` contains the compiled full site, you can check it too at <https://ashler.github.io/ebg-website>


## Getting started

First, clone the project and `cd` into the directory. Then run:

```sh
$ npm install
```

To compile down to HTML, CSS, and JavaScript and compress and move files (fonts and images):

```sh
$ gulp watch

# Now serving at http://localhost:9000
```

To manually build the project into the `docs folder`:

```sh
$ gulp dist
```
