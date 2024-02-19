window.addEventListener("load", function () {
  console.log("loading for OTP!");
});

var cursor = navigator.mozMobileMessage.getMessages();

navigator.mozMobileMessage.addEventListener("received", function (msg) {
  //sms received format: Hi, OTP is: 123456
  //you can write your own logic here to read the opt based on the sms format
  console.log("received");
  console.log(msg);
  var message = msg.message;
  console.log("message - " + message);
  console.log("message id - " + message.id);
  //   document.getElementById("p1").innerHTML = "ID : "+message.id;
  console.log("message sender - " + message.sender);
  //   document.getElementById("p2").innerHTML = "SENDER : "+message.sender;
  console.log("message body - " + message.body);

  //    var notification = new Notification(message.sender, { body: message.body });
  //   document.getElementById("p3").innerHTML = "BODY : "+message.body;
  var str = message.body;
  var n = str.search("OTP is");
  console.log("n - " + n);
  var OTP = str.slice(n + 8, n + 14);
  console.log(OTP);
  document.getElementById("txt1").value = OTP;
});
