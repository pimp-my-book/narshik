# Narshik ⛰️
![Travis (.org) branch](https://img.shields.io/travis/pimp-my-book/narshik/master?style=plastic)
![npm](https://img.shields.io/npm/v/narshik)

This is a Vue component library based off of the Design System for [GOA](https://gogoa.co.za), Pimp My Book's bursary management app. 

The Design System can be viewed on [Figma](https://www.figma.com/file/KedEPuWZk0CXWWNAEf806cOZ/GOA?node-id=0%3A1).

### 🎉 Features 

* Range of basic components to make a basic application
* Uses TailwindCSS
* Storybook setup to view components during development
* Integration with Bit (Coming Soooooon)


## 📦 Project setup

You can easily install the library via NPM or Yarn:

**npm**
```
$ npm install narshik
```

**yarn**

```
$ yarn add narshik
```


## 🌪️ Usage

You can import the components like so by importing the lib and it's CSS in your `main.js` file:

```
import Vue from "vue";
import "narshik";
import "narshik/dist/narshik.css";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");


```

Then you can import any of the components like so:

```
//App.vue
<template>
  <div id="app">
    
    <DisplayLarge text="Hello Narshik!" />
  </div>
</template>


```

## 🧜‍♂️Local Development

### Make sure you clone the lib then install all the depencenices:

```
$ yarn install
```

### Compiles and minifies for production
```
$ yarn run build
```

### Run your tests
```
$ yarn run test
```

### Lints and fixes files
```
$ yarn run lint
```


