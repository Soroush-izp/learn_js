var userScore = prompt("Enter your score, please: ", 0)

// == | ===

switch (userScore) {
  case "18":
  case "19":
  case "20":
    alert('A')
    break
  case "15":
  case "16":
  case "17":
    alert('B')
    break
  case "12":
  case "13":
  case "14":
    alert('C')
    break
  default:
    alert('شما مشروط هستین :(')
}