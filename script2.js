
    // Add a “light blue” background color and some padding to the <div>.
    //  const bgColor = 'lightblue';
    
    let bgDiv = document.getElementById('Div').style.backgroundColor = 'lightblue';
    document.getElementById('Div').style.padding = "50px 10px";
    
    // Do not display the <li> that contains the text node “John”.
    
    document.querySelector('.elem').children[0].style.display = "none";
    
    //Add a border to the <li> that contains the text node “Pete”
    
    document.querySelector('.elem').children[1].style.border = "1px solid";
   
    // Change the font size of the whole body.

    document.body.style.fontSize = "15px";

    // If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
    
    if (bgDiv = 'lightblue') {
      alert('Hello John and Pete');
    }
    bgDiv = 'lightblue'?alert('Hello John and Pete'): alert('empty');
