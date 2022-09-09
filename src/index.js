const {companies, productMap} = require('./data')
const render = require('./render')
const companyList = document.querySelector('#company-List')

let curr = window.location.hash.slice(1)*1;

const _render = () =>{
    render({companyList, companies, productMap, curr});
}

_render();

window.addEventListener('hashchange', ()=>{
    curr = window.location.hash.slice(1)*1;
    _render();
})

