let str = 'python';
let links = document.links;
// console.log(links);
Array.from(links).forEach(element => {
    let href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
});