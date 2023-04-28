const copyObj = obj => Object.assign({}, obj);
console.log(copyObj({ 'John Doe': 7, Tom: 17, Bob: 8 }));