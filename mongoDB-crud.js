const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'PiniRestaraunts'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    } else {
        console.log('sucseed');
    }
    const db = client.db(databaseName)

    // 1.1 – Write a MongoDb query to display all the documents in
    // the restaurant collection.

    // db.collection('restaurants').find({}).toArray((err, result) => {
    //     console.log(result);
    // })
    // 1.2 - Write a MongoDb query to display all restaurants that
    // have a specific cuisine

    // db.collection('restaurants').find({ cuisine: 'indian' }).toArray((err, result) => {
    //     console.log(result);
    // })
    //     1.3 - Write a MongoDb query that displays only kosher
    // restaurants
    // db.collection('restaurants').find({ kosher: true }).toArray((err, result) => {
    //     console.log(result);
    // })
    // 1.5 - Write a MongoDb query to display a specific restaurants
    // address
    // db.collection('restaurants').find({ "address.city": 'Holon' }).toArray((err, result) => {
    //     console.log(result);
    // })
    //     1.6 - Write a MongoDb query to display a specific restaurants
    // coordinates
    // db.collection('restaurants').find({ "address.city": { $in: ['Holon', 'Tel Aviv'] } }).toArray((err, result) => {
    //     console.log(result);
    // })
    // db.collection('restaurants').find({ "address.coordinates": { $all: [20.46574, -40.6774] } }).toArray((err, result) => {
    //     console.log(result);
    // })
    // 1.7. - Write a MongoDb query that should display all
    // restaurants in ascending order by restaurant name.
    // db.collection('restaurants').find().sort({ name: 1 }).toArray((err, result) => {
    //     console.log(result);
    // })
    // 1.8 - Write a MongoDb query that should display all restaurants
    //     in ascending order by city names.
    //         db.collection('restaurants').find().sort({ 'address.city': 1 }).toArray((err, result) => {
    //             console.log(result);
    //         })
    // 1.9 - Update a specific restaurant's name
    // db.collection('restaurants').updateOne({ name: 'bombay' }, { $set: { name: 'newBombay' } })
    // 1.10 - Update a specific restaurant by adding a new review
    // db.collection('restaurants').updateOne({ name: 'newBombay' }, { $push: { reviews: { score: 10 } } })
    // 1.12 - Delete a specific restaurant
    // db.collection('restaurants').deleteOne({ name: 'newBombay' })

    //forEach Queries 
    // 2.2 - Write a MongoDb query to print all restaurant cities
    // db.collection('restaurants').find().forEach(r => console.log(r.address.city))

    // 3. Advanced Queries
    // 3.1 - Query for restaurant names that start with a specific
    // alphabet
    // db.collection('restaurants').find({ name: { $regex: ".*fala*." } }).toArray((err, result) => {
    //     console.log(result);
    // })
    // 3.2 - Query how many documents you have from the restaurant
    // collection.
    // db.collection('restaurants').find().count()
    // console.log(db.collection('restaurants').find().count().then((result) => {
    //     console.log(result);
    // }));
    // 3.3 - Write a MongoDb query to get restaurants that include
    // reviews from a specific date.
    db.collection('restaurants').find({ reviews: { $in:[new Date('01/01/2020') ]} }).toArray((err, result) => {
        console.log(result);
    })
    // db.collection('rests').find({}).toArray((error, res) => {
    //     res.forEach((r) => {
    //         const filtered = r.reviews.filter((r2) => {
    //             const date = new Date('01/01/2017')
    //             return r2.date > date
    //         })
    //         console.log(filtered)
    //     })
    // })
})
