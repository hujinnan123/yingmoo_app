<template>
    <div class="yingmoo-search">
        <form action="/">
            <van-search
                placeholder="请输入搜索关键词"
                show-action
            />
        </form>
    </div>
</template>

<script>
export default {
    name: 'YingmooSearch'
}
</script>

<style lang="scss">
.yingmoo-search {
    box-sizing: border-box;
    width: 427px;
    height: 53px;
    border-radius: 7px;
    flex-wrap: nowrap; 
    color: #8a8787;
    background: #fff;
    overflow: hidden;
}
</style>
