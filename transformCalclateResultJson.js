var json = [];

var result = [];
result.push(["サービス名","説明","リージョン","ステータス","コスト(毎月)","コスト(前払い)","コスト(毎年)","プロパティ"].json("\t"));
function isObject(value) {
  return value !== null && typeof value === 'object'
}
var costConv = (costObj) => {
  return [
    costObj["毎月"],
    costObj["前払い"],
    costObj["12 月"],
  ].join('"\t"')
}
var conv = (obj) => {
  if(isObject(obj)) {
    var tmp = [];
    Object.keys(obj).forEach(key=>{
      tmp.push(`${key}:${obj[key]}`);
    })
    return tmp.join("\n");
  } else {
    return obj;
  }
}
json.forEach(resource => {
  result.push('"' + 
    [
      resource["サービス名"],
      resource["説明"],
      resource["リージョン"],
      resource["ステータス"],
      costConv(resource["サービスのコスト"]),
      conv(resource["プロパティ"])
    ].join('"\t"') + '"'
  )
})
console.log(result.join("\n"));

