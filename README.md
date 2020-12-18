# Weather Application with React Native and Expo

1. Access geolocation of phone
2. Use API to retrieve weather info
3. Render screen

[Check final product here!](https://expo.io/@keithkwon/projects/weather_react_native)





## Install

Expo to test apps on your phone

`npm install -g expo-cli`



npm install -g expo-cli works on vscode terminal but not on gitbash. What is the difference?



react native cli is great for customization and it allows you to get control of the native files.

Expo allows you to test your app on your phone and hides all the native files. 

Handles building process. Very convenient. Can build ios apps from windows

`expo start`

if you `npm start` it will automatically `expo start`



### Note

1. yarn vs npm
2. https vs ssh from github





## Layouts with React Native

### Basics

1. `View` works like `div`
2. `Text` works like `span`
3. Default flex box direction is column opposed to web's default row.
4. flex decides the portion it will take in the screen. Will adapt to different sized viewports.



### Notes

1. export default meaning

2. live reload vs hot reload

   live : reload project again when modified

   hot : reload only the modified part



## Getting the Location

1. Geolocation is supported by React Native, but expo has much more powerful featured location.
2. `expo install expo-location`



## Displaying the Temperature

`npm i prop-types`



## Background Gradient

`expo install expo-linear-gradient`

