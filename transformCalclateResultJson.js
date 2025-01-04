var json = [];

var result = [];
result.push(["�T�[�r�X��","����","���[�W����","�X�e�[�^�X","�R�X�g(����)","�R�X�g(�O����)","�R�X�g(���N)","�v���p�e�B"].json("\t"));
function isObject(value) {
  return value !== null && typeof value === 'object'
}
var costConv = (costObj) => {
  return [
    costObj["����"],
    costObj["�O����"],
    costObj["12 ��"],
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
      resource["�T�[�r�X��"],
      resource["����"],
      resource["���[�W����"],
      resource["�X�e�[�^�X"],
      costConv(resource["�T�[�r�X�̃R�X�g"]),
      conv(resource["�v���p�e�B"])
    ].join('"\t"') + '"'
  )
})
console.log(result.join("\n"));

