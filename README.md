# vue-webpack-simple

Based on [vue-webpack-simple](https://github.com/vuejs-templates/webpack-simple) template.

I tweak it and make it **emit readable bundle(build.js) and serve it from disk**. With this feature, you can see how [vue-loader](http://vuejs.github.io/vue-loader) compiles your template into render function, and the internal functions that `vue` is using to build the view. You can even edit the compiler output to see the difference. I think it is really helpful to understand & play with the "low-level function" of Vue. If you plan to dig into the source code of Vue, this kind of experience should help you.

> `webpack-dev-server` emit the bundles to **memery** and serve them from memory, but we want to tweak the bundles and see what happend. So we use `webpack` to emit bundles to **disk** and serve them from disk using `http-server`, **NOT** using webpack-dev-server.

If you want to play with **Angular** like this, check out [angular-aot-demo-with-ngc-webpack](https://github.com/csr632/angular-aot-demo-with-ngc-webpack).

## command

``` bash
npm run build:dev
```
Build the project. Your code (after transform) will be in `dist/build.js`. Vue and other npm package will be in `dist/build.js`.

``` bash
npm run build:watch
```
Like the last command. But it wait for file changes and re-build.

``` bash
npm run serve
```
Serve the build output in `dist/`.

```bash
npm run watch-serve
```
Build the project and serve it in `dist/`. Re-build if something change.

```bash
npm run build:prod
```
Build the project with minification. `dist/build.js` is not readable any more.

****
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader) and [vue-webpack-simple](https://github.com/vuejs-templates/webpack-simple) template.
