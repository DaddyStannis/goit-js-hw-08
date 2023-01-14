import Player from '@vimeo/player';

class VideoTimestamp {
  #timestamp;
  #videoSource;

  constructor(videoSource) {
    this.#videoSource = videoSource;
    const currentTime = localStorage.getItem(videoSource);
    this.#timestamp = currentTime === null ? 0 : Number(currentTime);
  }

  #saveToStorage() {
    localStorage.setItem(this.#videoSource, String(this.#timestamp));
  }

  set(sec) {
    this.#timestamp = sec;
    this.#saveToStorage();
  }

  get() {
    return this.#timestamp;
  }

  reset() {
    this.#timestamp = 0;
    this.#saveToStorage();
  }
}

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timestamp = new VideoTimestamp(iframe.src);

player.setCurrentTime(timestamp.get());
player.on('timeupdate', e => timestamp.set(e.seconds));
player.on('ended', e => timestamp.reset());
