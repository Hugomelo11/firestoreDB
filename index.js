import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { credentials } from "./credentials.js";

initializeApp({
    credential: cert(credentials)
});

const db = getFirestore()

// const car2 = { make: 'Ferrari', model: 'GTO', year: 2008, color: 'red'}  /// option one

// db.collection('cars')//.add('car2')
//  .add({ make: 'Ferrari', model: 'GTO', year: 2008, color: 'red'})   // option two of adding a document, doing this will continue to add even if the value is the same
//  .then(doc => {
//     console.log('Doc added:', doc.id)
//  })
//  .catch(err => console.error(err));

// db.collection('car').doc('lambo')
//   .set({ make: 'Lamborghini', model: 'Diablo', year: 2020, color: 'yellow'});   ///// setting a document, or updating what it says in the documnet

// db.collection('car').doc('lambo')
//   .update({ model: 'Diablo', color: 'hot pink' }); // updating the document

// db.collection('car').doc('lambo').get()
//   .then(doc => {
//       console.log(doc.id)
//       console.log(doc.data())
//   })
//   .catch(console.error);

//   // get a whole collection:
//   db.collection('car').get()
//   .then(collection => {
//     collection.docs.forEach(doc => console.log(doc.id, doc.data()))

//   })
//   .catch(console.error);

  // query docs from collection:
  db.collection('car')
    .where('year', '>=', 2015)
    .get()
      .then(collection => {
        const cars = collection.docs.map(doc => {
            let car = doc.data()
            car.id = doc.id  
            return car        
        })
        console.log(cars)
      })
      .catch(console.error)
