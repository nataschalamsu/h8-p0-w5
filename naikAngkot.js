function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var naikDari = 0;
  var tujuan = 0;
  var arrResult = [];
  for(var i = 0; i < arrPenumpang.length; i++) {
    var obj = {};
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];
    for(var j = 0; j < rute.length; j++) {
      if(obj.naikDari === rute[j]) {
        naikDari = j;
     }
      if(obj.tujuan === rute[j]) {
        tujuan = j;
      }
      var bayar = (tujuan - naikDari) * 2000;
    }
    obj.bayar = bayar;
    arrResult.push(obj);
  }
  return arrResult;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
