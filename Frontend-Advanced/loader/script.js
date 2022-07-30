function download() {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "are.mp4");
  xhr.onprogress = function ({ loaded }) {
    const max = (+xhr.getResponseHeader("content-length") / 1000000).toFixed(0);
    const current = (loaded / 1000000).toFixed(0);
    data.innerText = `${current} / ${max}`;
  };
  xhr.send();
}

run.onclick = download;
