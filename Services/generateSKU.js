module.exports =  generateSKU = (productName, categoryName) => {
    const categoryCode = categoryName.substring(0, 3).toUpperCase();
    const productCode = productName.substring(0, 3).toUpperCase();
    const timestamp = Date.now().toString().slice(-5);
    return `${categoryCode}-${productCode}-${timestamp}`;
};


