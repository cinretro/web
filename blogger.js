function createLazyVideos() {
  const lazyVideos = document.getElementsByClassName('lazy-load-youtube-video');
  const size = lazyVideos.length;

  for (let i = 0; i < size; i++) {
    const dataId = lazyVideos[i].getAttribute('video-id');
    const width = lazyVideos[i].getAttribute('video-width');
    const height = lazyVideos[i].getAttribute('video-height');

    //set the width and height style for this element
    //lazyVideos[i].setAttribute('style', 'width:' + width + 'px; height:' + height + 'px;')

    // create an image with play symbol as a placeholder
    let img = document.createElement('img');
    img.setAttribute('src', 'https://img.youtube.com/vi/' + dataId + '/maxresdefault.jpg');
    img.setAttribute('width', width);
    img.setAttribute('height', height);
    lazyVideos[i].appendChild(img);
    let span = document.createElement('span');
    span.textContent = '▶'
    lazyVideos[i].appendChild(span);

    // on click event to replace the div elment with the iframe video
    lazyVideos[i].addEventListener('click', function () {
      let iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + dataId + '?autoplay=1');
      iframe.setAttribute('allowfullscreen', '1');
      iframe.setAttribute('width', width);
      iframe.setAttribute('height', height);
      this.parentNode.replaceChild(iframe, this);
    });
  }
}
