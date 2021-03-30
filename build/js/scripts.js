window.renderTemplate = function(alias, data) {
    switch(alias){
        case 'leaders': return renderLeaders(data);
        case 'vote': return renderVote(data);
        case 'activity': return renderActivity(data);
        case 'chart': return renderChart(data);
        case 'diagram': return renderDiagram(data);
        default: return renderLeaders(data);
    }
 }

function renderLeaders(data){
  //console.log(222)
}

function renderVote(data){
  //
}

function renderActivity(data){
  //
}

function renderChart(data){
  //
}

function renderDiagram(data){
  //
}

function getDeveloper(){

}

function getGraph(){

}

function getNav(){

}

function getList(){

}

function getDiagram(){

}

function getActivityGraph(){
  
}

 /* 
    "data": {
      "title": "Больше всего коммитов",
      "subtitle": "Спринт № 213",
      "emoji": "👑",
      "users": [
        {"id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "32"},
        {"id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "27"},
        {"id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "22"},
        {"id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "20"},
        {"id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "19"}
      ]
    }
  
   */