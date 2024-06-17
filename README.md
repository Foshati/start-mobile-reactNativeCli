# React Native CLI X - RNCX - v0.74

This README file is designed for a React Native CLI X project, detailing essential installed packages.

## Core Packages

### Navigation
- **@react-navigation/native**: Visual navigation for React Native.
- **@react-navigation/native-stack**: Stack navigator for visual navigation.

### UI/UX
- **nativewind**: Tailwind CSS utility library for React Native.
- **react-native-safe-area-context**: Managing safe areas in React Native.
- **react-native-reanimated**: Library for complex animations in React Native.
- **react-native-screens**: Optimizing screens in React Native.

### UI Components
- **react-native-vector-icons**: Vector icons for React Native.

### Development Tools
- **@babel/core**, **@babel/preset-env**, **@babel/runtime**: Transpiling ES6+ code to runnable code.
- **@react-native/babel-preset**, **@react-native/eslint-config**, **@react-native/metro-config**, **@react-native/typescript-config**: Configuration for Babel, ESLint, and Metro for React Native.
- **@types/react**, **@types/react-test-renderer**: TypeScript definitions for React.
- **babel-jest**, **eslint**, **jest**: Testing and validation tools for React Native.
- **typescript**: TypeScript language for writing code.

### CSS Framework
- **tailwindcss**: Rapid and responsive design framework for React Native.

## Important Commands

- `npm install`: Install all dependencies.
- `npm run android`: Run the application on Android.
- `npm run ios`: Run the application on iOS.
- `npm run lint`: Run ESLint for code quality checks.
- `npm start`: Start Metro for running the application.
- `npm test`: Run tests with Jest.

## Additional Notes

- **Native Entities** such as `react-native-reanimated` and `react-native-screens` are used for enhanced performance and complex animations.
- **TailwindCSS** via `nativewind` allows for rapid and readable design in React Native.

## Versions

- **React**: 18.2.0
- **React Native**: 0.74.2
- **TypeScript**: 5.0.4
- **nativewind**: 4.0.36
  

## Installation and Execution

Install Dependencies: npm install
<button onclick="navigator.clipboard.writeText('npm install')">Copy</button>

### For ios simulator before run start:
   - **cd ios**

  ```
   pod install
  ```
  - **cd ..**


Run on Android: 
  ```
   npm run android
  ```

Run on iOS: 
  ```
  npm run ios
  ```

Check Code Quality: 
```
npm run lint
```

Run Tests:
 ```
 npm test
```
## Closing Notes fa

This README file is based on the settings and packages specified in the `package.json` file and should be updated regularly to reflect the latest versions of used packages and tools.



