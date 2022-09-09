const faker = require('faker')

const companies = new Array(50).fill('').map(_ =>{
    return(faker.company.companyName())
})

const productMap = companies.reduce((acc, company)=>{
    acc[company] = new Array(3 + faker.datatype.number(5)).fill('-').map(_ =>{
        return(faker.commerce.productName())
    })
    return acc;
},{})


module.exports = {
    companies, 
    productMap
}