let car = {
  name: "ferrari", 
  color: "red",
  custom: "stero sound system",
  price: "200,000",
  maintenance: "5,000",
  beeps_horn: function(){
    alert("Beep Beep!")
}
};
car.beeps_horn()//Beep Beep!

let car = {
  name: "ferrari", 
  color: "red",
  custom: "stero sound system",
  price: "200,000",
  maintenance: "5,000",
  get col(){
    return this.color;
}
}; 
car.col//red

let car = {
  name: "ferrari", 
  color: "red",
  custom: "stero sound system",
  price: "200,000",
  maintenance: "5,000",
set main_fees(main_fees){
    this.maintenance = main_fees;
}
};
car.main_fees = "5,000";


let sports_team = {
  name:"Yankees",
  city: "New York",
  best_player: "Derek Jeter",
  teamColors: "Navy and White",
  World_Series_titles: "27",
game_time: function(){
    alert("7:00 pm")
}
};
  sports_team.game_time()//7:00 pm

  let sports_team = {
  name:"Yankees",
  city: "New York",
  best_player: "Derek Jeter",
  teamColors: "Navy and White",
  World_Series_titles: "27",
  get CI(){
    return this.city;
  }
  };
sports_team.CI//New York

let sports_team = {
  name:"Yankees",
  city: "New York",
  best_player: "Derek Jeter",
  teamColors: "Navy and White",
  World_Series_titles: "27",
 set BP(BP) {
 	this.best_player = BP;
}
};
sports_team.BP = "Derek Jeter"


let animal = {
   name: "tiger",
   color: "orange white black",
   legs: "4",
   habitat: "rain forests",
   status: "endangered",
threat: function(){
	alert("Endangered!")
}
};
animal.threat()//"Endangered!"

let animal = {
   name: "tiger",
   color: "orange white black",
   legs: "4",
   habitat: "rain forests",
   status: "endangered",
get Hab(){
	return this.habitat;
}
};
animal.Hab//rain forests

let animal = {
   name: "tiger",
   color: "orange white black",
   legs: "4",
   habitat: "rain forests",
   status: "endangered",
 set Nam(Nam){
 	this.name = Nam;
 }
};
animal.Nam = "tiger"

