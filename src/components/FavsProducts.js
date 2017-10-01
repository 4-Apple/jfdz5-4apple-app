import React from 'react'
import firebase from 'firebase'
import {Button} from 'react-bootstrap'


class FavsProducts extends React.Component {
  render() {

    const userId = firebase.auth().currentUser.uid;
    const getFavs = () => {
      firebase.database()
        .ref('/FavsProducts/' + userId)
        .once('value')
        .then(
          snapshot => {
            ((snapshot.val())) !== null ?
              document.getElementById('Favs').innerHTML = (Object.values(Object.entries(snapshot.val()))) :
              document.getElementById('Favs').innerHTML = 'Nie masz jeszcze ulubionych'
          })

    }
    // Results.find((item) => {
    //   item === `${products.items.shops.name}:${products.items.shops.productId}`
    //   console.log(item)
    // })


    return (
      <div>
        <Button onClick = {getFavs}>Zobacz ulubione</Button>
        <p id="Favs"></p>
      </div>
    )
  }
}

export default FavsProducts
