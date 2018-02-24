function graduates (students) {
  // Code disini
  var obj = {};
  var objStu = {};
  var kelas = [];
  for(var j = 0; j < students.length; j++) {
    var ada = false;
    for(var k = 0; k < kelas.length; k++) {
      if(students[j].class === kelas[k]) {
        ada = true;
      }
    }
    if(ada === false) {
      kelas.push(students[j].class);
    }
  }
  for(var i = 0; i < kelas.length; i ++) {
    var arrStu = [];
    var max = 0;
    var index = 0;
    for(var l = 0; l < students.length; l++) {
      if(kelas[i] === students[l].class) {
        if(students[l].score > 75) {
          index = l;
          arrStu.push({name: students[index].name, score: students[index].score});
        }
      }
    }
    obj[kelas[i]] = arrStu;
  }
  return obj;
}
