import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

console.dir(Player);


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlayerTimeUpdate = function (date) {
    localStorage.setItem('videoplayer-current-time', date.seconds);
    
  }
player.on('timeupdate', throttle(onPlayerTimeUpdate,1000));

const stopTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(stopTime)


