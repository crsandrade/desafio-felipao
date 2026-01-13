let clientChart = {
    name: 'Rafael',
    age: 30, 
    products: {
        0: {name: 'Produto 1',price: 100, quantity: 2}, 
        1: {name: 'Produto 2',price: 200, quantity: 1}
    }, 
}


function generateInvoice(clientChart) {
    let invoice = `
    Fatura de Compra
    Nome do Cliente: ${clientChart.name}
    Idade: ${clientChart.age}
    Produtos:
    `
    for (let i = 0; i < Object.keys(clientChart.products).length; i++) {
        invoice += `
        ${clientChart.products[i].name} - Preço: R$ ${clientChart.products[i].price.toFixed(2)} - Quantidade: ${clientChart.products[i].quantity}
        `
    }
    let totalPrice = 0
    for (let i = 0; i < Object.keys(clientChart.products).length; i++) {
        totalPrice += clientChart.products[i].price * clientChart.products[i].quantity
    }
    invoice += `
    Total: R$ ${totalPrice.toFixed(2)}
    `
    return invoice
}

console.log(generateInvoice(clientChart))