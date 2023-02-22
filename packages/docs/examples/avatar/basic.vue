<template>
    <div class="avatar">
        <div class="circle">
            <kl-avatar shape="circle" size="small">User</kl-avatar>
            <kl-avatar shape="circle" size="normal">User</kl-avatar>
            <kl-avatar shape="circle" size="large">User</kl-avatar>
        </div>
        <div class="square">
            <kl-avatar shape="square" size="small">User</kl-avatar>
            <kl-avatar shape="square" size="normal">User</kl-avatar>
            <kl-avatar shape="square" size="large">User</kl-avatar>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.avatar {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .circle {
        width: 250px;
        display: flex;
        justify-content: space-around;
        align-items: baseline;
    }
    .square {
        width: 250px;
        display: flex;
        justify-content: space-around;
        align-items: baseline;
    }
}
</style>
