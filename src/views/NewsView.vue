<template>
    <div class="news">
        <div class="news-container">
            <ul class="news-list">
                <li v-for="item in items" :key="item.id">
                    <a href="javascript:void(0)" @click="clickNewsItem(item.id)"><img :src="item.imageUrl" class="news-img"
                            alt="Item Image"></a>
                    <div>
                        <a href="javascript:void(0)" @click="clickNewsItem(item.id)">
                            <h3 class="title">{{ item.title }}</h3>
                        </a>
                        <a href="javascript:void(0)" @click="clickNewsItem(item.id)">
                            <p class="brief">{{ item.description }}</p>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <el-drawer :with-header="false" :visible.sync="drawer" direction="ttb" size="75%">
            <h1 class="article-title">{{ articleTitle }}</h1>
            <p class="article-content">{{ articleContent }}</p>
            <img class="article-img" :src="articleImageUrl" alt="">
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // items这个数组对象其实就是将新闻中心的新闻列举出来，一个对象就是一条新闻。存放id，图片地址，标题，内容等字段，可以根据你自己的需求和后端配合增加相应的字段。
            items: [
                { id: 1, imageUrl: 'images/example1.jpg', title: '旅德大熊猫“梦想”和“梦圆”平安抵达成都', description: '在中德双方的共同保障下，大熊猫“梦想”和“梦圆”于今日（12月17日）平安抵达成都。', content: "央视网消息：据成都大熊猫繁育研究基地官微消息，在中德双方的共同保障下，大熊猫“梦想”和“梦圆”于今日（12月17日）平安抵达成都。" },
                { id: 2, imageUrl: 'images/example2.jpg', title: 'Title 2', description: 'Description 2',content:"content2" },
                { id: 3, imageUrl: 'images/example3.jpg', title: 'Title 3', description: 'Description 3' },
            ],
            drawer: false,
            // 以下三个变量就是弹出层要显示的内容
            articleImageUrl: null,
            articleTitle: null,
            articleContent: null
        }
    },
    methods: {
        // 点击的时候找到数组里的一个对象的值，动态更新要显示的内容
        clickNewsItem(id) {
            for (let item of this.items) {
                if (item.id === id) {
                    this.articleImageUrl = item.imageUrl
                    this.articleTitle = item.title
                    this.articleDescription = item.description
                    this.articleContent = item.content
                }
            }
            this.drawer = true
        }
    }
}
</script>

<style>
.news {
    width: 100%;
    padding: 20px 0;
    background-color: #F5F5F5;

    a,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #333333;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    a:hover {
        text-decoration: underline;
    }

    .news-container {
        background: #fff;
        width: 1190px;
        margin: 0 auto;

        .news-list {
            padding: 0;

            li {
                list-style: none;
                padding: 20px;
                border-bottom: 1px solid #e6e6e6;
                display: flex;

                .news-img {
                    width: 273px;
                    border-radius: 5px;
                    margin-right: 20px;

                }

                .title {
                    font-size: 20px;
                    font-weight: 500;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 850px;
                }

                .brief {
                    margin-top: 10px;
                }
            }
        }
    }

    .el-drawer__body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;

        .article-title {
            margin: 10px 0;
            width: 75%;
            text-align: center;
        }
        .article-content{
            margin-bottom: 10px;
            width:60%;
            text-align: center;
        }
        .article-img{
            width: 75%;
        }
    }


}
</style>