<div class="c-audio">
    <span class="c-circle" :class="{'c-circle-active': statu === 'playing'}" @click="play">{{idx}}</span>

    <audio class="c-audio-hidden"
           :autoplay="autoplay"
           :src="src"
           ref="audio">
        <source v-for="t in sources" :src="t.src" :type="t.type">
        您的浏览器不支持 audio 标签
    </audio>
</div>
