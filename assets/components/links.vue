<template>
    <div class="card-container">
        <div class="card">
            <img :src="icon" alt="icon" class="icon" @error="useDefaultImg" />
            <div class="info">
                <h3 class="name">{{ name }}</h3>
                <p class="description">{{ description }}</p>
            </div>
        </div>
        <button :onclick="openLink" class="VPButton medium brand link-button">{{ goToText }}</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        defaultIcon: {
            type: String,
            required: false,
            default: "../assets/img/defaultLinksImg.png",
        },
        description: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: true,
        },
        goToText: {
            type: String,
            required: false,
            default: "前往",
        },
    },
    methods: {
        openLink() {
            window.open(this.link, "_blank");
        },
        useDefaultImg(event) {
            event.target.src = this.defaultIcon;
        },
    },
};
</script>

<style>
.card-container {
    /* 让 card 和 button 在一列上 */
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 150px;
    /* 水平间隙 */
    margin-right: 10px;
}

.card {
    display: inline-block;
    width: 150px;
    height: 300px;
    vertical-align: middle;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.icon {
    width: 100px;
    height: 100px;
    margin-right: 10px;
}

.name {
    margin: 0;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.description {
    max-height: 85px;
    margin: 0;
    font-size: 14px;
    color: #666;
    overflow-y: auto;
    padding-bottom: 15px;
    overflow: auto;
    text-overflow: ellipsis;
}

.link-button {
    width: 150px;
    height: 40px;
    margin: 0;
    padding: 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #666;
    cursor: pointer;
}
</style>