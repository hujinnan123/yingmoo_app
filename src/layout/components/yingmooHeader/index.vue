<template>
    <div class="header-container display_flex justify-content_flex-justify align-items_center">
        <Address />
        <YingmooSearch />
        <Login />
    </div>
</template>

<script>
import Address from './Address'
import YingmooSearch from './YingmooSearch'
import Login from './Login'
export default {
    components: {
        Address,
        YingmooSearch,
        Login,
    }
}
</script>