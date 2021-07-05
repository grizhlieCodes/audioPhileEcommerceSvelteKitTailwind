export default function(email){
    let emailValidRegex = /^\S+@\S+$/
    return emailValidRegex.test(email)
  }