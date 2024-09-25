var word = prompt('Enter The Word: ') // 'amin' => 'nima'

var charactersArray = word.split('')
var reverseCharacters = charactersArray.reverse()
var reverseWord = reverseCharacters.join('')

if (word === reverseWord) {
    alert("از هر دو جهت به یک شکل خوانده می شود")
} else {
    alert("از هر دو جهت به یک شکل خوانده نمی شود")
}