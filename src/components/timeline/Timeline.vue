<template>
    <redoffice-widget class="no-padding no-v-padding" :noPadding="true" :headerText="$t('sidebar.Timeline')">
        <template slot="widgetBody">
            <div id="timeline" ref="timeline" >
                <div class="timeline">
                    <div class="timeline-row" v-for="(item, index) in entries" :key="index">
                        <div class="timeline-img">
                            <img :src="item.img" />
                        </div>
                        <div class="timeline-content">
                            <div class="content-body">
                                <div class="d-flex justify-content-between mb-4">
                                    <h6 class="card-subtitle mb-2 text-muted"><timeago :datetime="item.time" :auto-update="60"></timeago></h6>
                                    <v-selectmenu v-if="item.menu" :data="item.menu" :regular="true" :style="{position: 'relative', bottom: '10px'}">
                                        <button type="button" class="sm-default-btn timeline-opt-button">
                                            <i class="ion ion-ios-settings"></i>
                                            <span class="sm-caret-down"></span>
                                        </button>
                                    </v-selectmenu>
                                </div>
                                <h2>{{ item.title }}</h2>
                                <p>
                                    {{ item.content }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </redoffice-widget>
</template>

<script>
const menu = [
    {content: '<i class="ion ion-md-trash"></i>  Delete', url: ''},
    {content: '<i class="ion ion-md-create"></i>  Edit', disabled: true, url: ''},
    {content: 'sm_divider'},
    {content: '<i class="ion ion-md-share"></i> Share', menus: [
        {content: '<div class="d-flex flex-row"><li style="width: 15px;"><i class="ion ion-logo-facebook"></i> </li>  Facebook</div>', url: ''},
        {content: '<div class="d-flex flex-row"><li style="width: 15px;"><i class="ion ion-logo-twitter"></i> </li>   Twitter</div>', url: ''},
        {content: '<div class="d-flex flex-row"><li style="width: 15px;"><i class="ion ion-logo-instagram"></i> </li> Instagram</div>', url: ''},
        {content: '<div class="d-flex flex-row"><li style="width: 15px;"><i class="ion ion-logo-snapchat"></i> </li>  Snapchat</div>', url: ''},
    ]}

]
const defaultTimeline = [
    {
        time: 1522372393000,
        img: 'https://res.cloudinary.com/redoffice/image/upload/v1533744818/myAvatar.png',
        title: 'Assigned new task',
        content: 'Sed nisi nunc, vehicula vitae lectus vel, volutpat consequat neque.',
        menu
    },
    {
        time: '2011-03-30 14:36:35',
        img: 'https://res.cloudinary.com/redoffice/image/upload/v1533744815/myAvatar1.png',
        title: 'Registered account',
        content: 'Nulla vel augue sed nisi maximus pretium. Fusce porttitor a enim ut scelerisque. Etiam ac cursus orci. Mauris scelerisque finibus est nec viverra.',
        menu
    },
    {
        time: new Date(),
        img: 'https://res.cloudinary.com/redoffice/image/upload/v1533744813/myAvatar2.png',
        title: 'Added new user account',
        content: 'Curabitur urna tortor, dictum a dui eget, tristique mattis nunc. Donec at ullamcorper sapien, eget malesuada libero. Quisque hendrerit leo a facilisis accumsan.',
        menu
    },
    {
        time: '2015-01-30 10:33:32',
        img: 'https://res.cloudinary.com/redoffice/image/upload/v1532022345/avatar.png',
        title: 'Updated profile',
        content: 'Vestibulum vel dapibus velit. Aenean id dapibus felis. Duis finibus purus sed tristique vulputate. Phasellus vel placerat velit. Suspendisse ultrices eget velit non pretium. Praesent pellentesque commodo suscipit',
        menu
    }
]
export default {
    props: {
        dataList: {
            type: Array,
            default(){
                return defaultTimeline
            }
        },
        timelineColor:{
            type: String,
            default: '#fff'
        },
        timeContentColor:{
            type: String,
            default: 'linear-gradient(hsla(0, 0%, 97%, 1), hsla(0, 0%, 94%, 1))'
        }
    },
    mounted() {
      const timeline = this.$refs.timeline
      timeline.style.setProperty('--timelineColor', this.timelineColor)
      timeline.style.setProperty('--timeContentColor', this.timeContentColor)
    },
    computed: {
        entries(){
            return this.dataList.sort((a, b) => {
                return new Date(a.time) < new Date(b.time)
            })
        }
    }
}
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";

#timeline{
    list-style: none;
    position: relative;
    padding: 20px;
    margin: 0 auto;
    overflow: hidden;
    background: var(--timelineColor);
    .timeline-row{
        padding-left: 50%;
        z-index: 10;
        position: relative;
        .timeline-opt-button{
            padding: 0 .5rem;
            border: none !important;
            box-shadow: 0 1px 5px -2px #0a0a0a;
        }
        .timeline-img{
            background: #fff;
            border-radius: 50%;
            border: 1px solid $that-cool-red;
            position: absolute;
            top: 30px;
            left: calc(50% - 10px);
            margin-left: -20px;
            width: 60px;
            height: 60px;
            text-align: center;
            overflow: hidden;
            padding: 3px;
            font-size: 14px;
            z-index: 100;
            img {
                border: 3px solid #eeeeee;
                border-radius: 50%;
                height: 100%;
                width: 100%;
            }
        }
        .timeline-content{
            position: relative;
            background: var(--timeContentColor);
            color: #333333;
            border-radius: 5px;
            margin-right: 0px;
            margin-left: 60px;
            margin-bottom: 20px;
            min-height: 80px;
            .content-body{
                padding: 15px 15px 2px;
                position: relative;
                z-index: 10;
                h2{
                    font-size: 20px;
                    margin-bottom: 12px;
                    margin-top: 0;
                    line-height: 15px;
                    font-weight: 600;
                }
                p{
                    margin: 0px 0px 15px;
                }
            }
        }
        .timeline-content:after{
            content: "";
            position: absolute;
            top: 60px;
            left: -60px;
            height: 3px;
            width: 80px;
            background-color: $that-cool-red;
            z-index: -1;
        }
    }
    .timeline-row:nth-child(odd){
        padding-left: 0;
        padding-right: 50%;
        .timeline-content{
            margin-right: 60px;
            margin-left: 0px;
        }
        .timeline-content:after{
            left: auto;
            right: -60px;
        }
    }
   @media screen and (max-width:1200px){
        .timeline{
            .timeline-row {
                position: relative;
                right: auto;
                top: 0;
                margin: 0 0 6px 56px;
                padding: 0;
                margin-bottom: 16px;
            }
            .timeline-row:nth-child(odd){
                padding-right: 0;
                .timeline-content{
                    margin-right: 0px;
                    margin-left: 40px;
                }
            }
            .timeline-img{
                top: 0;
                left: -56px;
                margin-left: 0;
                padding: 0px;
            }
            .timeline-content{
                margin-left: 40px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.21);
                position: relative;
            }
            .timeline-content:after{
                right: auto !important;
                left: -65px !important;
                top: 30px;
            }
        }
        .timeline:after{
            left: 50px;
        }
        
    }
}
.timeline:after{
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    background-color: $that-cool-red;
    height: 100%;
    width: 4px;
    border-radius: 2px;
    margin-left: -2px;
    display: block;
}
</style>
