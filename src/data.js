const faker = require('faker')

let companies, productMap;

companies = JSON.parse(window.localStorage.getItem('companies'))
productMap = JSON.parse(window.localStorage.getItem('productMap'))


if(!companies || !productMap){

    companies = new Array(50).fill('').map(_ =>{
        return(faker.company.companyName())
    })
    
    window.localStorage.setItem('companies', JSON.stringify(companies))



    productMap = companies.reduce((acc, company)=>{
        acc[company] = new Array(3 + faker.datatype.number(5)).fill('-').map(_ =>{
            return(faker.commerce.productName())
        })
        return acc;
    },{})

    window.localStorage.setItem('productMap', JSON.stringify(productMap))

}




module.exports = {
    companies, 
    productMap
}