<div class="c-audio-group">
    <div class="c-section">
        <c-audio v-for="t in items" :idx="t.id" :playback="playback" @change="getStatus" :start="t.start" :end="t.end" :src="t.mp3"></c-audio>
    </div>
    <div class="c-control">
        <div class="c-play">
            <i class="iconfont icon-playfill"></i>
            播放
        </div>
        <div class="c-compact">
            <i class="iconfont icon-square"></i>
            连播
        </div>
        <div class="c-stop">
            <i class="iconfont icon-tingzhi"></i>
            停止
        </div>
    </div>
</div>