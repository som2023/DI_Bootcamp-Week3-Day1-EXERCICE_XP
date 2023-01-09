/*@@@@@@@@--Exercise 3----@@@@@@*/

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
      // We are going to add a new <li> to the <ul>.
      // First, create a new <li> tag (use the createElement method).
      // Create a new text node with “Logout” as its specified text.
      // Append the text node to the newly created list node (<li>).
      // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

//2-Dans le <div>, modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation , à l'aide de la setAttribute méthode .
document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation');

//3-Tout d'abord, créez une nouvelle <li>balise (utilisez la createElementméthode)
let createLi = document.createElement('li');

    //creation de la balise a

    createTagA = document.createElement('a');
    createTagA.href ='http://www.marlins.com';

    // Créez un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
let createNewTextLi = document.createTextNode('Deconnexion');

    //mettre le newTextLi dans le newA
    createTagA.appendChild(createNewTextLi);

    // Ajoutez le nœud de texte au nœud de liste nouvellement créé ( <li>).
    createLi.appendChild(createTagA);


    // Enfin, ajoutez ce nœud de liste mis à jour à la liste non ordonnée ( <ul>), en utilisant la appendChildméthode.
let list_Ul = document.querySelector('ul') 
list_Ul.appendChild(createLi);
    
    console.log(list_Ul);

//4)
let first_Item = list_Ul.firstElementChild.textContent;
    console.log(first_Item);

let last_Item = list_Ul.lastElementChild;
    
    console.log(last_Item);
