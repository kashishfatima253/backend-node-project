const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const app = express();

const port = 5000;
app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`));
app.use(express.json());

mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    // useCreateIndex: true, 
    // useFindAndModify: false 
})
  .then(() => console.log('MongoDB successfully connected...'))
  .catch(err => console.log(err));

const Animal = require('./models/Animal');

app.get('/', (req, res) => {
    Animal.find()
      .sort({ date: -1 })
      .then(items => console.log(res.json(items)));
  });

app.post('/', (req, res) => {
const newAnimal = new Animal(req.body);

newAnimal
    .save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ success: false, error: err }));
});

// Update an entry
app.put('/:id', (req, res) => {
    Animal.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.json({ success: true }))
      .catch(err => res.status(404).json({ success: false }));
  });


  
const newAnimal = new Animal({
    name:'Red Panda',
    isEndangered: true
})

const newAnimal1 = new Animal({
    name:'White Tiger',
    isEndangered: true
})

const newAnimal2 = new Animal({
    name:'Black Panther',
    isEndangered: true
})

const newAnimal3 = new Animal({
    name:'Chimpanzee',
    isEndangered: true
})

const newAnimal4 = new Animal({
    name:'Geese',
    isEndangered: true
})

const newAnimal5 = new Animal({
    name:'Flamingo',
    isEndangered: true
})


// newAnimal.save().then(item => console.log(item))
// .catch(err => console.log(err));

// newAnimal1.save().then(item=> console.log(item))
// .catch(err => console.log(err));

// newAnimal2.save().then(item => console.log(item))
// .catch(err => console.log(err));

// newAnimal3.save().then(item => console.log(item))
// .catch(err => console.log(err));

// newAnimal4.save().then(item => console.log(item))
// .catch(err => console.log(err));

// newAnimal5.save().then(item => console.log(item))
// .catch(err => console.log(err));

// Animal.find()
//   .sort({ date: -1 })
//   .then(items => console.log("before update",items));

// Animal.findOneAndUpdate(
//     {_id: '64802701752bb6d0afb59f83'},
//     { isEndangered: false}
//     ).then(item => console.log(item));

// Animal.find()
// .sort({ date: -1 })
// .then(items => console.log("after update",items));

// Animal
//   .findOneAndDelete(
//     { _id: '64802602302e6c090f4d1e4a' },
//     { isEndangered: false }
//   )
//   .then(console.log('Item deleted'));

