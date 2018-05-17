<div class="c-speed g-group-block">
    <div class="c-speed-toggle" @click="toggle">
        语速：<span>{{currentVal}}</span>
        <i class="iconfont" :class="iconStyle"></i>
    </div>
    <ul class="c-speed-group c-dropdown-menu" v-show="showSpeed">
        <li v-for="t in speeds"
            @click="selectItem(t)"
            :class="{'active': t.key === value}"
            :key="t.key">
            {{t.value}}
        </li>
    </ul>
    <div class="c-mask" v-show="showSpeed" @click="showSpeed=false"></div>
</div>