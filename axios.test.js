const {default: axios} = require('axios');

async function getProducts() {
    try {
        const response = await axios
            .get('/products', {
                baseURL: 'http://localhost:8080/api'
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

async function postProducts() {
    try {
        const response = await axios
            .post('/products', {
                name: 'productoAxios',
                description: 'Es un producto de axios',
                code: 200,
                image: 'http://imageaxios.png',
                price: 100,
                stock: 15,
                category: 'axios'
            },
            {
                baseURL: 'http://localhost:8080/api'
            }
        );
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

async function putProducts() {
    try {
        const response = await axios
            .put('/products/63dd637dc0e93cec80df214c', {
                name: 'nuevoAxiosUpdate',
                description: 'Es un producto nuevo de axios',
                code: 200,
                image: 'http://imageaxios.png',
                price: 100,
                stock: 15,
                category: 'axios'
            },
            {
                baseURL: 'http://localhost:8080/api'
            }
        );
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

async function deleteProducts() {
    try {
        const response = await axios
            .delete('/products/63dd637dc0e93cec80df214c', {
                baseURL: 'http://localhost:8080/api'
            }
        );
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

getProducts();
postProducts();
putProducts();
deleteProducts();