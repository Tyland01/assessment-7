// 2) Unique Characters
function hasUniqueChars(str) {
    let uniqueChar = '';
    for (let i = 0; i < str.length; i++) {
        if (uniqueChar.indexOf(str.CharAt(i)) === -1) {
            return true
        } else {
            return false
        }
    }
};

hasUniqueChars('judge');
hasUniqueChars('judgee');

// 3) Panagram Sentence
function isPanagram(str) {
    let letters = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    }
  
    str = str.toLowerCase()
    const splitStr = str.split('')
  
    splitStr.forEach(char => {
      if (letters.hasOwnProperty(char)) {
        letters[char]++
      }
    })
  
    let value = (letters.z)
      if (value === 0) {
        return false
      } else {
        return true
      }
}

isPanagram("the faster runner ran the fastest");
isPanagram("corny jokes are not funny");

// 4) Longest Word

function findLongestWord(str1, str2) {
    let str1Length = str1.length
    let str2Length = str2.length
  
    if (str1Length > str2Length) {
      return str1Length
    } else if (str2Length > str1Length) {
      return str2Length
    } else {
      return `They are both ${str1Length} characters long`
    }
  }
  
  findLongestWord('us', 'them');
  findLongestWord('steak', 'shrimp');
  findLongestWord('money', 'life');