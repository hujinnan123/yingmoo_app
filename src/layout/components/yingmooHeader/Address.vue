<template>
    <div class="yingmoo-region">
        
        <router-link to="">
            <span class="text_overflow yingmoo-region-word">{{current_city}}</span>
            <svg-icon icon-class="xia" />
        </router-link>
    </div>
</template>

<script>
export default {
    created () {
        var geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition((r) => {
            //console.log(r.address.city)
           this.current_city= r.address.city;
        
        }, { enableHighAccuracy: true })
    },
    data () {
        return {
            current_city: ''
        }
    }
}
</script>

<style lang="scss">
    .yingmoo-region {
        float: left;
        width: 120px;
        height: 113px;
        text-align: center;
        line-height: 113px;
        color: #fefefe;
        overflow: hidden;
    }
    .yingmoo-region-word {
        max-width: 100px;
    }
</style>