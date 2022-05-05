var contarVogais = str => {
        let nuVogais = 0;
        for (let quat of str) {
          if ('aeiou'.includes(quat)) nuVogais++;
        }
        return nuVogais;
      };
  
  console.log(contarVogais('Estartando Devs'));