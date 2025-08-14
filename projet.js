function choisir(type){
  let msg = "";
  if (type ==="particulier"){
    msg = "bienvenue cher particulier! pret a orgqniser vos taches?";
  }else if (type ==="groupe"){
      msg = "bienvenue cher groupe! pret a orgqniser vos taches?";
  }else if (type ==="entrprise"){
      msg = "bienvenue chere entreprise! optimisons vos projets";
  }
  document.getElementById("message").textContent = msg;
}


