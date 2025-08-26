function createLazyVideo(videoId, title, width=384, height=216) {
  const iframe = document.createElement("iframe");
  iframe.width = width;
  iframe.height = height;
  iframe.frameBorder = "0";
  iframe.allow = "autoplay";
  iframe.allowFullscreen = true;
  iframe.title = title;
  iframe.srcdoc = `
<style>
  * {padding:0;margin:0;overflow:hidden}
  img,span {position:absolute;width:100%;top:0;bottom:0;margin:auto}
  span {height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
</style>
<a href="https://www.youtube.com/embed/${videoId}?autoplay=1">
  <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg">
  <span>▶</span>
</a>`;

  return iframe;
}
