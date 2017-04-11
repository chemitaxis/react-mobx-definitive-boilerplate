# react-mobx-definitive-boilerplate
React + Mobx + React Router 4 + Code Splitting + WebPack 2

This project is the definitive boilerplate for people who want to use:
- React 
- Mobx (or othe state managment)
- React Router 4 last version
- Code Splitting for pages (vendors and commons)
- Webpack for development & real production

Capture of development Webpack Dasboard:

![screen shot 2017-04-11 at 15 12 35](https://cloud.githubusercontent.com/assets/1420409/24911801/7db538ca-1ecc-11e7-9e41-df964769e830.png)


Capture of real Code Splitting:

![screen shot 2017-04-11 at 15 12 35](https://im3.ezgif.com/tmp/ezgif-3-4bb4144a9e.gif)


For dev environments...

```sh
$ npm start
```

For production environments...

```sh
$ npm run build
```

Important: 

- Code splitting is the best way to optimice your load application.
- We are using here Bundle Loader (https://github.com/webpack-contrib/bundle-loader)
- You can find more information about Code Splitting in React Router 4 Docs. (https://reacttraining.com/react-router/web/guides/code-splitting)
- We have created a Proxy to API Backend, the concept is similar to create-react-app (https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development), you can find it in /bin/server.js

**Authors**:
[@chemitaxis](https://github.com/chemitaxis/)
[@alexvcasillas](https://github.com/alexvcasillas)

More documentation soon!
