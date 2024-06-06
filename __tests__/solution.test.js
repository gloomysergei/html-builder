// @ts-check

import buildHtml from '../src-02/solution.js';

describe('HtmlBuilder', () => {
  it('set 1', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', { class: 'container' }, [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span'],
          ['span', { class: 'text', id: 'uniq-key' }],
        ]],
      ]],
    ]];

    const actual = buildHtml(data);
    const expected = '<html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span></span><span class="text" id="uniq-key"></span></div></body></html>';