# Storybook with Tailwind CSS

## Setup project

### Create a React app
`npx create-react-app my-project --template=typescript`

### Initialize Storybook
`cd my-project`

`npx sb init`

### Add tailwind
`yarn add -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

## Project structure

Let's remove unused files so the initial project looks like this
```
./my-project/
|
|---- .storybook/
|     |---- main.js
|     |---- preview.js
|---- src/
|     |---- components/
|           |---- MyComponent/
|                 |---- index.tsx
|     |---- stories/
|           |---- components/
|                 |---- MyComponent.stories.tsx
|           |---- Introduction.stories.mdx
|     |---- .gitignore
|     |---- package.json
|     |---- postscss.config.js
|     |---- tailwind.congfig.js
|     |---- tsconfig.json
```

## Use tailwind
_.storybook/main.js_
```js
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
};
```

_tailwind.config.js_
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

_postcss.config.js_
```js
module.exports = {
  plugins: {
    tailwindcss: {
      config: "./tailwind.config.js",
    },
    autoprefixer: {},
  },
};

```

Let's create a *__style.css__* file on _**src/**_ directory

_src/style.css_
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To make it work, we need to import this style (or this three lines) at least on one component.
Also, we can do it in our introduction mdx story file

_src/stories/Introduction.stories.mdx_
```mdx
...
import '../style.css'
...
```