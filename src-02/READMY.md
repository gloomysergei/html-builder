## solution.js

Реализуйте и экспортируйте по умолчанию функцию, которая возвращает строковое представление html.

## Примеры

```
import buildHtml from './solution';

const data = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

buildHtml(data);

```

```
<html>
  <head>
    <title>hello, hexlet!</title>
  </head>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>

```

## Подсказки

- Для объединения массива в строку, используйте метод `join(separator)`.
