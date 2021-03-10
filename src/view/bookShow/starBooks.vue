<template>
  <div>
    <el-backtop
      style="width: 60px; height: 60px; background: rgba(256, 256, 256, 0.5)"
      :bottom="50"
      :visibility-height="30"
      :right="50"
    >
      <el-tooltip
        class="item"
        effect="dark"
        content="回到顶部"
        placement="left-start"
      >
        <div class="backto-top-icon-box">
          <ul class="icon_menu2">
            <li>
              <span class="iconfont bookarrow-up-bold"></span>
            </li>
          </ul>
        </div>
      </el-tooltip>
    </el-backtop>
    <div class="starBook">
      <el-row :gutter="40"
        ><el-col :span="17">
          <el-divider>晓月闲移三尺剑；孤灯苦读五更书</el-divider>
          <el-scrollbar style="height: 100%; width: 1050px" class="totop">
            <el-row style="width: 1050px"
              ><el-table
                header-cell-style="background-color:#a8dadc;color:white;"
                :data="starbooks"
                style="width: 100%"
                border
                stripe
                :cell-style="cellstyle"
                :highlight-current-row="true"
              >
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form
                      label-position="left"
                      inline
                      class="demo-table-expand"
                    >
                      <el-form-item label="书名" style="font-weight: bold">
                        <span>{{ props.row.text }}</span>
                      </el-form-item>
                      <el-form-item label="作者" style="font-weight: bold">
                        <span>{{ props.row.author }}</span>
                      </el-form-item>
                      <el-form-item label="链接" style="font-weight: bold">
                        <a href="http://baidu.com" target="_blank">跳转地址</a>
                      </el-form-item>
                      <el-row>
                        <el-col :span="14"
                          ><el-form-item
                            label="阅读进度"
                            style="font-weight: bold"
                          >
                            <el-progress
                              :percentage="percentage"
                              :color="customColorMethod"
                              style="width: 300px; margin-top: 12px"
                            ></el-progress
                            ><el-button-group>
                              <el-button
                                icon="el-icon-minus"
                                @click="decrease"
                              ></el-button>
                              <el-button
                                icon="el-icon-plus"
                                @click="increase"
                              ></el-button>
                            </el-button-group> </el-form-item
                        ></el-col>
                        <el-col :span="10"
                          ><el-form-item
                            label="个人评分"
                            style="font-weight: bold"
                          >
                            <el-rate
                              v-model="value2"
                              :colors="colors"
                              style="width: 300px; margin-top: 12px"
                            >
                            </el-rate> </el-form-item
                        ></el-col>
                      </el-row>

                      <el-form-item label="读书笔记" style="font-weight: bold">
                        <el-input
                          v-model="props.row.write"
                          style="width: 800px"
                          type="textarea"
                        ></el-input>
                      </el-form-item>

                      <el-form-item
                        ><div>
                          <div class="icon_menu4" style="margin-top: 10px">
                            <el-tooltip
                              class="item"
                              effect="dark"
                              content="确认编辑"
                              placement="left-start"
                            >
                              <span
                                class="iconfont bookedit"
                                rel="nofollow"
                              ></span
                            ></el-tooltip>
                          </div></div
                      ></el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="图书名"
                  prop="text"
                  width="170"
                  align="center"
                >
                </el-table-column
                ><el-table-column
                  label="图书封面"
                  prop="text"
                  width="200"
                  align="center"
                  ><template slot-scope="scope">
                    <img
                      style="width: 100%; height: 100px"
                      :src="scope.row.img" /></template
                ></el-table-column>
                <el-table-column label="图书简介" prop="intro" align="center">
                </el-table-column>
                <el-table-column
                  prop="tag"
                  label="标签"
                  width="100"
                  :filters=this.filter
                  filter-placement="bottom-end"
                >
                  <template slot-scope="scope">
                    <el-tag
                      :color="tagcolor(scope.row.type)"
                      disable-transitions
                      >{{scope.row.type}}</el-tag
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  prop="aa"
                  width="150"
                  align="center"
                >
                  <template slot-scope="scope">
                    <el-popconfirm
                      confirm-button-text="确认"
                      cancel-button-text="不了"
                      icon="el-icon-info"
                      title="确定删除收藏？"
                      @confirm="removebook(scope.row)"
                    >
                      <div slot="reference">
                        <div class="icon_menu3">
                          <span
                            class="iconfont bookdelete"
                            rel="nofollow"
                          ></span>
                        </div>

                        <div
                          style="
                            float: left;
                            margin-left: 10px;
                            line-height: 40px;
                          "
                        >
                          删除收藏
                        </div>
                      </div>
                    </el-popconfirm>
                    </template>
                  
                </el-table-column>
              </el-table></el-row
            >
            <el-row style="margin: 20px 280px"
              ><el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
              >
              </el-pagination
            ></el-row>
          </el-scrollbar>
        </el-col>

        <el-col :span="6" class="myzpbox">
          <!-- 我的族谱主页面 -->
          <div class="personbox">
            <div class="person_img">
              <a id="linkabout" class="linkabout" href="">关于我</a>
            </div>
            <div class="person_name">
              <h1 class="name_title">
                <a class="ttl">付羽逍</a>
              </h1>
            </div>
            <ul class="icon_menu">
              <li>
                <a class="iconfont booksurvey" rel="nofollow"></a>
                <p id="linkabout2" href="">饮酒一杯凉 能饮一杯无</p>
              </li>
            </ul>
          </div>
        </el-col></el-row
      >
    </div>
  </div>
</template>
<script>
import { nameFindBook,deleteBook } from "../../url.js";
export default {
  name: "starBooks",
  data() {
    return {
      starbooks: [],
      trues: true,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      percentage: 20,
      filter:[{value:'',text:''}],
      keyword:"",
      pageNum:1
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    //tag颜色
    tagcolor(type){
      if(type=='文学')return"#aed9e0"
      else if(type=="计算机")return"#db7f8e"
    },
    //删除收藏
    removebook(id){
      deleteBook({"user_name":this.$store.state.user_name,"id":this.atId}).then(res=>{
        if(res.code==1){   
        //回显数据
        this.getData()
          this.$message.success("取消收藏成功");
        }
        else
        {
          this.$message.warnning("取消收藏错误！");
        }
      })
    },
    //斑马纹颜色
    cellstyle(row, column, rowIndex, columnIndex) {
      if (row.rowIndex % 2 == 0)
        return "background-color:#e8e9db;color:#457b9d;background-image:url('../../../static/MPimg/wl01.jpg')";
      else
        return "background-color:#f4f3ee;color:#e5989b;background-image:url('../../../static/MPimg/wl01.jpg')";
    },
    //去重
    unique(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(toString.call(arr[i]) == toString.call(arr[j])){
                if(JSON.stringify(arr[i]) == JSON.stringify(arr[j])){
                    arr.splice(j,1);
                    j--;
                }

            }
        }
    }
     return arr;},
     //统计类别
    calculatetype(){
      for(let i = 0; i < this.starbooks.length; i++){
        this.filter[i]={"text":this.starbooks[i].type,"value":this.starbooks[i].type}
      }
      this.unique(this.filter)
      console.log('类别',this.filter)
    },
    //查找书籍列表函数
    getData() {
      nameFindBook({"user_name":this.$store.state.user_name,"pageNum":this.pageNum,"keyword":this.keyword}).then(
        (res) => {
          this.starbooks = res.data.bookList;
          this.calculatetype()
        },
        (err) => {
          this.$message.error("系统异常，请稍后重试");
        }
      );
      
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped src='../../../static/css/starBook.css'>
</style>
