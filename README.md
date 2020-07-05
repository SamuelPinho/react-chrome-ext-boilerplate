# Boilerplate for a react chrome extension

## Motivation

I've struggled so much to create a version of [my chrome extension](https://chrome.google.com/webstore/detail/add-to-spotify/fbfmfpmhahghhicbcjnndadbmjojaonf) with react and webpack, that I decided to create a boilerplate to **facilitate the process** for me and to any other person who want's to use it :)

## Getting Started

1. run `yarn` on your terminal
2. run `yarn build`

With that, you're going to generate a `/build` folder and a `build.zip` file.
_The **zip** file is the one that [Google requests to publish your extension to chrome store](https://developer.chrome.com/webstore/publish#:~:text=To%20upload%20your%20item%2C%20you,version%20of%20the%20metadata%2C%20incremented)_

With the `/build` folder you can test your extension.
_You can follow [this tutorial if you never built an extension before and don't know how to test your app](https://developer.chrome.com/extensions/getstarted)_

After you added the extension to your chrome browser, you can type `yarn dev` in your terminal. This will tell webpack to listen for changes on your files inside `/src`

> I must say that althought this process works with all the files, if you make any change to `src/chromeScripts/background.ts` it will not reflect the change instantly on your chrome browser. To do that you need to reload/update your extension manually

## License

MIT © [Samuel Monteiro](https://samuelmonteiro.netlify.com/)
