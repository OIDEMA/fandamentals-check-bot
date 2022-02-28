import fetch from 'node-fetch';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

// 8928：穴吹興産
// 8698：マネックス


(async () => {
    const res = await fetch(`https://finance.yahoo.co.jp/quote/8928.T/margin`);
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const name = document.querySelector('._6uDhA-ZV')
    console.log(name.textContent)       
    const th = document.querySelectorAll('._2ZqX1qip th');
    const td = document.querySelectorAll('._2ZqX1qip td');

    const days = Array.from(th, th => th.textContent.trim());
    const values = Array.from(td, td => td.textContent.trim());

    const number = values.length/5

    let results = []

    for (let i = 0; i < number; i++) {
        let newArray = values.slice(i*5, (i+1)*5)
        newArray.push(days[i])
        results.push(newArray)
    }
    console.log(results)
})();