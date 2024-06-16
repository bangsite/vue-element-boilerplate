<div align="center" style="display:flex; align-items: center;gap: 1rem;flex-direction: column;justify-content: flex-start; padding:2rem 1rem 0;">
<div style="display:flex; align-items: center;gap: 0.5rem;">
<a href="https://vuejs.org/" target="blank"><img src="https://router.vuejs.org/logo.svg" width="50" alt="Vue Logo" /></a>
<a href="https://www.typescriptlang.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20210506173343" width="45" alt="Typescript Logo" /></a>
<a href="https://vitejs.dev/" target="blank"><img src="https://vitejs.dev/logo.svg" width="50" alt="Vite 3 Logo" /></a>
<a href="https://pinia.vuejs.org/" target="blank"><img src="https://pinia.vuejs.org/logo.svg" width="40" alt="Pinia Logo" /></a>
<a href="https://vue-i18n.intlify.dev/" target="blank"><img src="https://vue-i18n.intlify.dev/vue-i18n-logo.svg" width="50" alt="Vue i18n Logo" /></a>
</div>

<h1>Vue Element Plus Boilerplate</h1>

[![license](https://img.shields.io/github/license/bangsite/vue-element-boilerplate.svg)](LICENSE)
[![repo-size](https://img.shields.io/github/repo-size/bangsite/vue-element-boilerplate.svg)](#)
[![last-commit](https://img.shields.io/github/last-commit/bangsite/vue-element-boilerplate.svg)](#)
</div>

A boilerplate for building efficient, fast, maintainable, and scalable enterprise applications using Element Plus,
TypeScript, Vite, Vue Router, Pinia, Axios, Tailwind CSS, and Vue i18n.

## Table of Contents

- [Features](#features)
- [Ecosystem](#ecosystem)
- [Structure](#️structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [License](#license)

## Features

- [ ] Authentication: Provides a secure login system for users.
- [ ] Authorization: Implements role-based access control to manage user permissions.
- [x] Multiple Languages: Supports localization and enables users to switch between different languages.
- [ ] Themes (Light/Dark/System): Offers a choice of light, dark, or system-based themes for a personalized user
  experience.
- [ ] Table: Handles data tables.
- [ ] Form Validation: Includes form validation functionality to ensure data integrity and improve user experience.
- [ ] Error Handling: Handles and displays error messages in a user-friendly manner.
- [ ] API Integration: Integrates with external APIs to fetch data and provide dynamic content.
- [ ] Responsive Design: Ensures the application is optimized for various screen sizes and devices.
- [ ] Testing: Includes a test suite with unit tests and integration tests for reliable code quality.
- [ ] Documentation: Provides comprehensive documentation to guide developers and users.

## Ecosystem

[&#8593; Back to top](#-table-of-contents)

| Library      | Version                                                                 | Description                                                                                        |
|--------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Vue          | ![Vue](https://img.shields.io/badge/%5E3.4.27-blue.svg)                 | A progressive JavaScript framework for building user interfaces.                                   |
| Vite         | ![Vite](https://img.shields.io/badge/%5E5.2.11-blue.svg)                | Next-generation frontend build tooling for fast and efficient development.                         |
| Typescript   | ![Typescript](https://img.shields.io/badge/%5E5.4.5-blue.svg)           | A superset of JavaScript that enhances the development experience with static typing.              |
| Vue Router   | ![Vue Router](https://img.shields.io/badge/%5E4.3.2-blue.svg)           | Official router for Vue.js, used for managing application routes.                                  |
| Vue i18n     | ![Vue i18n](https://img.shields.io/badge/%5E9.13.1-blue.svg)            | Internationalization plugin for Vue.js applications, enabling multi-language support.              |
| Vue Query    | ![@tanstack/vue-query](https://img.shields.io/badge/%5E5.35.5-blue.svg) | A data-fetching and state management library for Vue.js, with powerful data-fetching capabilities. |
| Pinia        | ![Pinia](https://img.shields.io/badge/%5E2.1.7-blue.svg)                | An intuitive store for Vue.js applications, providing centralized state management.                |
| Axios        | ![Axios](https://img.shields.io/badge/%5E1.6.8-blue.svg)                | Promise-based HTTP client for making API requests.                                                 |
| Tailwind CSS | ![Tailwind CSS](https://img.shields.io/badge/%5E3.4.3-blue.svg)         | A highly customizable CSS framework for rapid web development.                                     |

## Structure

[&#8593; Back to top](#-table-of-contents)

```
├── public/
│   ├── assets
│   │   ├── fonts
|   |   └── images
│   └── favicon.ico
├── src
│   ├── assets
│   │   └── scss
│   ├── components
│   │   ├── common
│   │   └── ...
│   │   layouts
│   │   ├── default.ts
│   │   │── customs.ts
│   │   └── ...
│   ├── enums
│   ├── constants
│   ├── hooks
│   ├── locales
│   │   ├── en
│   │   ├── vi
│   │   └── ja
│   ├── router
│   │   ├── modules
│   │   ├── guard
│   │   ├── routes.ts
│   │   ├── index.ts
│   ├── services
│   │   ├── modules
│   │   ├── notification.service.ts
│   │   └── api.service.ts
│   ├── stores
│   ├── types
│   ├── utils
│   ├── views
│   ├── App.ts
│   └── main.ts
├── types
├── package.json
└── ...
.
```

## Getting Started

[&#8593; Back to top](#-table-of-contents)

### Prerequisites

- [Node Js](https://nodejs.org/en/) version `v20.10.0`.
- [Visual Studio Code](https://code.visualstudio.com/download): Visual Studio Code is the free and open-source code editor.


- Recommended Plugin for VSCode

    - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
    - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
    - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Installation

1. Clone this repository to your computer:

   ```sh
   https://github.com/bangsite/vue-element-boilerplate.git
   cd vue-element-boilerplate
   ```

2. Install the required packages (dependencies):

   ```sh
   npm install
   ```

3. To run the app on your local machine:

   ```sh
   npm run dev
   ```

4. Build for production

   ```sh
   npm run build
   ```

## License

[&#8593; Back to top](#-table-of-contents)

This project is licensed under the [MIT](./LICENSE) License.
