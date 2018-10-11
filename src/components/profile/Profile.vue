<template>
<div class="profile-container">
  <div class="row">
      <div class="col-lg-4 col-xlg-3 col-md-5">
        <redoffice-widget class="info-widget mb-5 no-border" :noPadding="true">
          <template slot="widgetBody">
            <center>
              <img class="profile-src mt-4" src="https://res.cloudinary.com/redoffice/image/upload/v1532022345/avatar.png"/>
              <h4 class="mt-2">Leo Trotsky Jr.</h4>
              <hr>
              <h5 class="mt-2 job-description">Customer development manager</h5>
              <hr>
              <div class="icons-container text-center d-flex justify-content-center">
                  <div class="cell">
                    <redoffice-tooltip :options="{content: 'Contacts', placement: 'top'}">
                      <h5>
                        <i class="ion ion-ios-contacts-outline"></i>
                        <center>54</center>
                      </h5>
                    </redoffice-tooltip>
                  </div>
                  <div class="cell">
                    <redoffice-tooltip :options="{content: 'Objectives', placement: 'top'}">
                      <h5>
                        <i class="ion ion-ios-disc-outline"></i>
                        <center>943</center>
                      </h5>
                    </redoffice-tooltip>
                  </div>
                  <div class="cell">
                    <redoffice-tooltip :options="{content: 'Notifications', placement: 'top'}">
                      <h5>
                        <i class="ion ion-ios-notifications-outline"></i>
                        <center>2</center>
                      </h5>
                    </redoffice-tooltip>
                  </div>
              </div>
                <hr>
                <redoffice-progress :diameter="200" :value="84" :max="100" :text="'Clients developed'"/>
              <div class="card mt-4" :style="{border: 0}">
                <div class="card-body" :style="{color: '#fff', background: 'rgb(162, 25, 25)'}">
                  <h5 class="card-title mb-0">Details</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h6 class="card-subtitle mt-1 mb-2 text-muted">Address</h6>
                    <h5 class="">Penn Rd 2/12</h5>
                  </li>
                  <li class="list-group-item">
                    <h6 class="card-subtitle mt-1 mb-2 text-muted">Email</h6>
                    <h5 class="">cfo@redoffice.com</h5>
                  </li>
                  <li class="list-group-item">
                    <h6 class="card-subtitle mt-1 mb-2 text-muted">Cell no.</h6>
                    <h5 class="">+1 902 9320 932</h5>
                  </li>
                  <li class="list-group-item">
                    <GmapMap
                      style="height: 300px"
                      :center="{lat:78, lng:16}"
                      :zoom="8"
                    >
                    </GmapMap>
                  </li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">
                    <i class="ion ion-logo-facebook"></i>
                    trotsky.junior
                  </a>
                  <a href="#" class="card-link">
                    <i class="ion ion-logo-twitter"></i>
                    @trotsky
                  </a>
                </div>
              </div>
            </center>
          </template>
        </redoffice-widget>
      </div>
      <div class="col-lg-8 col-xlg-9 col-md-7">
        <div class="row">
          <div class="col-12">
            <redoffice-widget class="info-widget mb-5 no-border" :gradientedBackground="true">
              <template slot="widgetBody">
                <chart :options="userLineChart" :auto-resize=true></chart>
              </template>
            </redoffice-widget>
          </div>
          <div class="col-12">
            <redoffice-widget class="info-widget mb-5 no-border" :bodyStyle="{overflow: 'visible'}">
              <template slot="widgetBody">
                <redoffice-tabs :names="[$t('profile.tabs.description'), $t('profile.tabs.notifications'), $t('profile.tabs.settings')]" ref="tabs">
                  <div :slot="$t('profile.tabs.description')">
                    <p class="lead">Praesent in porttitor risus, vel eleifend sapien. Nam sit amet leo rhoncus, euismod felis sed, venenatis lacus. </p>
                     <redoffice-progress theme='danger' 
                                    size="sm"
                                    :type="'horizontal'"  
                                    :value="84" 
                                    :max="100" 
                                    :text="'Training progress'"/>
                    <div class="row mt-4">
                      <div class="col-xl-6 mb-4">
                        <ul class="list-group">
                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span class="badge badge-success badge-pill">14</span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Dapibus ac facilisis in
                            <span class="badge badge-warning badge-pill">2</span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span class="badge badge-danger badge-pill">1</span>
                          </li>
                        </ul>
                      </div>
                      <div class="col-xl-6">
                        <p class="mt-4 text-justify">Vivamus tristique ornare orci vitae facilisis. Nullam luctus erat quis augue porta, eu pulvinar risus varius. Integer mollis arcu in dolor condimentum, et euismod erat scelerisque. </p>
                      </div>
                    </div>
                  </div>
                  <div :slot="$t('profile.tabs.notifications')">
                    <redoffice-alert :alerts="alerts"/>
                  </div>
                  <div :slot="$t('profile.tabs.settings')">
                    <form method="post">
                      <div class="form-group">
                        <div class="input-group">
                          <input id="simple-input" v-model="name" required="required">
                          <label for="simple-input" class="control-label">Full name</label>
                          <i class="bar"></i>
                        </div>
                      </div>
                      <div class="form-group"><div class="input-group"><input name="email" v-model="email" required="required"><label for="email" class="control-label">Email address</label><i class="bar"></i></div></div>
                      <div class="form-group"><div class="input-group"><input name="pass" v-model="pass" required="required" type="password"><label for="pass" class="control-label">Password</label><i class="bar"></i></div></div>
                      <div class="row">
                        <div class="col-12 mt-1 form-group"><switches :type-bold="true" theme="custom" color="red" label="is staff" v-model="switch1"></switches></div>
                        <div class="col-12 mt-1 form-group"><switches :type-bold="true" theme="custom" color="red" label="is manager" v-model="switch3"></switches></div>
                        <div class="col-12 mt-1 form-group"><switches :type-bold="true" theme="custom" color="red" label="is admin" v-model="switch2"></switches></div>
                      </div>
                      <redoffice-simple-select
                        :label="'Country'"
                        v-model="fieldOptionModel"
                        :options="countries">
                      </redoffice-simple-select>
                      <div class="form-group">
                          <div class="col-sm-12">
                              <button @click.prevent="() => {}" class="btn btn-sm btn-primary">Update Profile</button>
                          </div>
                      </div>
                  </form>
                  </div>
                </redoffice-tabs>
                
              </template>
            </redoffice-widget>
          </div>
        </div>
      </div>
  </div>
</div>

  
</template>

<script>
const fontFamily = "Muli"
const globalConf = {
  textStyle: { fontFamily }
}
export default {
    name: "profile",
    data(){
        const trans = this.$t
        return {
          switch1: true,
          switch2: false,
          switch3: true,
          alerts: [
            {channel: "Server", msg: "Ut tincidunt, ac quis nunc convallis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", time: "2018-07-16T15:03:52.814745", title: "Database unreachable", type: "failure"},
            {channel: "API", msg: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut tincidunt, ac quis nunc convallis", time: "2018-07-16T15:03:52.814745", title: "Unauthorized access", type: "error"},
            {channel: "Frontend", msg: "Aenean porta velit ac viverra dictum. Praesent nibh magna, malesuada id scelerisque quis, pharetra in urna. Integer imperdiet gravida magna a porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", time: "2018-07-16T15:03:52.814745", title: "Unauthorized access", type: "info"},
          ],
          userLineChart: {
             title: {
                text: trans('profile.issues'),
                subtext: trans('profile.this_month'),
                ...globalConf
            },
            tooltip: {
                trigger: 'axis',
                ...globalConf
            },
            legend: {
                data:['最高气温','最低气温']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {},
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                show: false,
                boundaryGap: false,
                data: ['06/01','06/04','06/07','06/10','06/13','06/16','06/19','06/21','06/24','06/27','06/30'],
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    name:'Frontend',
                    type:'line',
                    data:[14, 83, 48, 11, 38, 27, 75, 92, 81, 99, 68],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'Backend',
                    type:'line',
                    data:[19, 1, 8, 43, 31, 22, 28, 29, 11, 42, 9],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
          },
          email: "cfo@redoffice.com",
          name: "Leo Trotsky Jr.",
          pass: "1234",
          fieldOptionModel: "",
          countries: [
            "Austria", "Belgium", "Canada", "France", "Spain", "Germany", "Italy", "United States"
          ]
        }
    },
    methods: {
        add(){}
    }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: auto;
}
  .item-label{
    background: gray;
  }
  .cell{
    padding: 13px;
  }
  .icons-container{
    h5{
      font-size: 1.2rem;
      font-weight: 100;
      i{
        font-size: 1.5rem;
      }
    }
  }
  .profile-src{
      border-radius: 100%;
      background: #eee;
      box-shadow: 0 0 16px #b3b3b3;
  }
  .job-description{
    font-weight: 100;
    color: gray;
  }
</style>