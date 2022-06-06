var userInput;
var userName;
userInput = 5;
userInput = "Max";
// type assertion
if (typeof userInput === "string") {
    userName = userInput;
}
// never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
