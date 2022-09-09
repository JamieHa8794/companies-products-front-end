const faker = require('faker')

const companies = new Array(50).fill('').map(_ =>{
    return(faker.company.companyName())
})

const productMap = companies.reduce((acc, company)=>{
    acc[company] = new Array(3 + faker.datatype.number(3)).fill('-').map(_ =>{
        return(faker.commerce.productName())
    })
    return acc;
},{})


let curr = window.location.hash.slice(1)*1;





const companyList = document.querySelector('#company-List')

const render = () =>{
    const html = `
        ${companies.map((company, idx) =>`
            <li>
                <a href='#${idx}'>
                    ${company}
                </a>
                ${curr === idx ? 
                `
                    <ul>
                        ${productMap[company].map(product =>{
                            return(`
                                <li>
                                    ${product}
                                </li>
                            `)
                        }).join('')}
                    </ul>
                ` : 
                ''
                }

            </li>
        `).join('')}
    `
    companyList.innerHTML = html
}


render();

window.addEventListener('hashchange', ()=>{
    curr = window.location.hash.slice(1)*1;
    render();
})