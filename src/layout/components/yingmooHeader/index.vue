<template>
    <div class="header-container">
        <Address/>
    </div>
</template>

<script>
import { Icon } from 'vant';
import Address from './Address'
import YingmooSearch from './YingmooSearch'
import Login from './Login'
export default {
    components: {
        Address,
        YingmooSearch,
        Login,
        Icon
    }
}
</script>