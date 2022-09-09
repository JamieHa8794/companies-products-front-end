const faker = require('faker')

const companies = new Array(50).fill('').map(_ =>{
    return(faker.company.companyName())
})

const productMap = companies.reduce((acc, company)=>{
    acc[company] = new Array(1 + faker.random.number(2)).fill('-').map(_ =>{
        return(faker.commerce.productName())
    })
    return acc;
},{})

console.log(productMap)


const companyList = document.querySelector('#company-List')

const render = () =>{
    const html = `
        ${companies.map(company =>`
            <li>
                ${company}
                <ul>
                    ${productMap[company].map(product =>{
                        return(`
                            <li>
                                ${product}
                            </li>
                        `)
                    }).join('')}
                </ul>
            </li>
        `).join('')}
    `
    companyList.innerHTML = html
}


render();