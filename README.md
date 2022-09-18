# KazEnergy Rencycle_web

## О проекте

Проект реализован в рамках конкурса от KazEnergy. Цель автоматизировать процессы управления отходами. Для удобства модули реализованы в мобильной и веб версии в зависимости о типа пользователей.

_❗️Далее идут рекомендации по подготовке рабочей среды для комфортной разработки_

## Рекомендации по подготовке IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Поддержка типизации для `.vue` импортов в TS

**[🦥Переводчик](https://www.deepl.com/)**

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Установка проекта

```sh
npm install
```

### Запуска проекта

```sh
npm run dev
```

### Запуска билда для продакшена

```sh
npm run build
```

### Запустить юнит тесты с помощью [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Линт проверка [ESLint](https://eslint.org/)

```sh
npm run lint
```
