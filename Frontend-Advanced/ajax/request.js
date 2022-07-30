let request = new XMLHttpRequest();
request.open("get", "https://jsonplaceholder.typicode.com/posts");
// request.serRequestHeader();
request.onload = function () {
  console.log(JSON.parse(request.responseText));
};
request.send();
