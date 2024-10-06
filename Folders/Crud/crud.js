document.getElementById('productForm').addEventListener('submit', addProduct);

let products = [];

function addProduct(event) {
    event.preventDefault();
    
    const product = {
        id: document.getElementById('productId').value,
        name: document.getElementById('productName').value,
        customer: document.getElementById('customerName').value,
        date: document.getElementById('purchaseDate').value,
        quantity: document.getElementById('productQuantity').value,
        totalPrice: document.getElementById('totalPrice').value,
        details: document.getElementById('productDescription').value,
        image: URL.createObjectURL(document.getElementById('productImage').files[0])
    };

    products.push(product);
    displayProducts();
    clearForm();
}

function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';  // Clear the existing product list
    
    products.forEach((product, index) => {
        productList.innerHTML += `
            <div class="product-item">
                <p><strong>ID:</strong> ${product.id}</p>
                <p><strong>Product:</strong> ${product.name}</p>
                <p><strong>Customer:</strong> ${product.customer}</p>
                <p><strong>Date:</strong> ${product.date}</p>
                <p><strong>Quantity:</strong> ${product.quantity}</p>
                <p><strong>Total Price:</strong> $${product.totalPrice}</p>
                <p><strong>Details:</strong> ${product.details}</p>
                <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
                <button onclick="editProduct(${index})">Edit</button>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;
    });
}

function clearForm() {
    document.getElementById('productForm').reset();
}

function editProduct(index) {
    const product = products[index];

    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('customerName').value = product.customer;
    document.getElementById('purchaseDate').value = product.date;
    document.getElementById('productQuantity').value = product.quantity;
    document.getElementById('totalPrice').value = product.totalPrice;
    document.getElementById('productDescription').value = product.details;

    // Replace the image with the existing one (editing doesn't re-upload the image)
    products.splice(index, 1);
    displayProducts();
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}
