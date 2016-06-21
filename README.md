## angular2-seed

An attempt to integrate Polymer into a simple Angular2 Seed. I was using SystemJs and was ok with that until RC-0, RC-1 came out. 
My configuration broke and it appeared to be a good time to convert to webpack. Seems like the Angular team was leaning that
way, given it's the one that is documented on Angular.io.

For the most part, I'm sure I could learn about webpack, but Polymer throws a wrinkle at it that is over my head. I didn't find a lot 
of information about anyone using Angular2+Polymer+Webpack.

I have more conventional references in there for PouchDb, Moment and other things. I do not know how to make these
work, but I wanted to get the Polymer one to work first.  

In my app there are a number of other references that need to be brought in. I'd appreciate help there once
we get past this problem.

Polymer uses these imports
```
 <link rel="import" href="vendor/iron-flex-layout/classes/iron-flex-layout.html">
```

This codebase originates from [angular2-seed (robw and patrick js)](https://github.com/angular/angular2-seed.git)  

I started to go down the road of vulcanizing the polymer imports which bundles many Polymer files into one.
The gulp task takes src/polymerimports.html, vulcanizes it (bundles) and puts it into dist/polymerimports.html.
https://www.polymer-project.org/1.0/docs/tools/advanced#vulcanize

As I was experimenting, i manually copied the `dist/polymerimports.html` to `polymerimports.htmx` at the root, 
my intent being to use the.htmx to handle that file differently, per the webpack.config.js

At the end of the day, I don't know how to reference the html in the link statement, being that polymer is
vulanized or not.

---
ClipsAlive - Mods (spike to learn how to integrate polymer into webpack build)

- `npm install bower -g`
- `npm install -g vulcanize`


### Usage

- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- run `npm install` to install dependencies
- run `bower install` to install bower dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)


References

- https://elements.polymer-project.org/elements/paper-button
- https://www.polymer-project.org/1.0/tools/overview.html


 