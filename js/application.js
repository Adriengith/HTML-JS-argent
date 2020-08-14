

  let arr = {1:10, 2:20, 3:30, 4:40, 5:50, 6:100, 7:200, 8:400, 9:600, 10:1000};
  let y = 1;
  let totalargent = 0;
  let answer = 5;



const createMessage = (answer) => {
  // setTimeout("window.location.reload(true);", 5000); // true force le rechargement à partir du serveur (et non du cache du nav)



  switch (answer) {
    case "oui":
      output = "Choisis un nombre entre 1 et 10 et découvres combien tu gagneras !"; 
      break;
    case "non":
      output = "Bah dans ce cas tu n'auras plus rien, tampis pour toi ! Tu repart avec "+ (totalargent) + " €";
      break;
      case "test":
        output = "ddLa réponse de l'utilisateur est : <b>" + arr[y] + "</b>"; 
        break;
    default:
      output = "Répond par OUI ou par NON";
      

      if (answer > 0 && answer < 11) { // Cette condition renvoie « true », le code est donc exécuté
        totalargent = totalargent + arr[answer];
        output = "Tu as choisis le nombre "+(answer)+" et tu viens de gagner "+ arr[answer] + "€ !!!. Tu as au total "+ (totalargent) + " €"; 

    
    
  
    
    
    
    
    
    }
  }
  



  

  

  





  return output

}


let form = document.querySelector("#my-form");
console.log(form);

let message = document.querySelector("#ia-message");
let counter = document.querySelector("#counter");
let count = 0;

form.addEventListener("submit", (event) => {
  let input = form.querySelector("#user-answer");
  answer = input.value
  message.innerText = createMessage(answer);
  count = count += 1
  counter.innerText = count;
});




Highcharts.chart('container', {
  
  chart: {
    type: 'areaspline'
  },
  title: {
    text: 'Argent gagné'
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
  },
  xAxis: {
    categories: [
      '1ère génération',
      '2ème génération',
      '3ème génération',
      '4ème génération',
      '5ème génération',
      '6ème génération',
      '7ème génération'
    ],
    plotBands: [{ // visualize the weekend
      from: 4.5,
      to: 6.5,
      color: 'rgba(68, 170, 213, .2)'
    }]
  },
  yAxis: {
    title: {
      text: 'Montant obtenus'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: ' € gagnés'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },
  series: [{
    name: 'Adrien',
    data: [(answer), 4, 3, 5, 4, 10, 12]
  }, {
    name: 'User2',
    data: [1, 3, 4, 3, 3, 5, 4]
  }]
})
;