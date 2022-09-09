const faker = require('faker')

const companies = new Array(50).fill('').map(_ =>{
    return(faker.company.companyName())
})


const companyList = document.querySelector('#company-List')

const render = () =>{
    const html = `
        ${companies.map(company =>`
            <li>
                ${company}
            </li>
        `).join('')}
    `
    companyList.innerHTML = html
}


render();