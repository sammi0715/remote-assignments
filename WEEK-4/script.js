// Assignment 1 //
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
});
// Assignment 2 //
function ajax(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}
function render(data) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let product = data[i];
    container.innerHTML +=
      "<div>" +
      "名稱: " +
      product.name +
      " , " +
      "價格: " +
      product.price +
      " , " +
      "說明: " +
      product.description +
      "</div>";
  }
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
  render(data);
});
