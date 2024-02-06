const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://localhost://27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("food-ordering").collection("products");
        const restrosCollection = client.db("food-ordering").collection("restros");

        let restros = ['Byg Brewsky', 'Social', '1522', 'Hard Rock Cafe','FOODIE', 'Bingee', 'GulpOn'].map((restro) => { return { name: restro } });
        await restrosCollection.insertMany(restros);

        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?w=2000&t=st=1707135440~exp=1707136040~hmac=84d7b5a66b8f752eac1f79d889b73ac686259f03732207d80d3e7b63c4bcd71a',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35929.jpg?w=1060',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
            'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=1380&t=st=1707135126~exp=1707135726~hmac=6773077ffb8d09bcf10f93842d9656ffb355e12ca17a9ab139f7f46e5f827303',
            'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=1480&t=st=1707135211~exp=1707135811~hmac=b4b93fa80dba113eafc4780c176cafc5bb89d9e21be5d2c6e080852c70e07626',

        ]

        let products = [];
        for (let i = 0; i < 20; i++) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                restro: _.sample(restros),
                imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();