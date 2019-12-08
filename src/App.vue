<script>
import api from "@/utils/api/home.js";
export default {
  globalData: {
	  text: "你好2019"
  },
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log(api);
    api.getList({keywords: "海阔天空"}).then(res => {
      console.log(res);
    })
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
/*每个页面公共css */
page {
  width: 100%;
  height: 100%;
  background-color: #CE3D3A;
}
</style>
