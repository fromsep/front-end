<template>
  <div id="app">
      <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide">
        <div class="mdui-toolbar mdui-color-indigo">
          <a href="javascript:;" class="mdui-btn mdui-btn-icon" @click="open"><i class="mdui-icon material-icons">menu</i></a>
          <a href="javascript:;" class="mdui-typo-title">文章区</a>
          <div class="mdui-toolbar-spacer"></div>
          <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
          <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
          <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
        </div>
        <div class="mdui-tab mdui-color-indigo mdui-tab-full-width" mdui-tab>
          <a href="#tab1" class="mdui-ripple mdui-ripple-white">综合</a>
          <a href="#tab2" class="mdui-ripple mdui-ripple-white">游戏</a>
          <a href="#tab3" class="mdui-ripple mdui-ripple-white">动漫</a>
          <a href="#tab4" class="mdui-ripple mdui-ripple-white">动漫</a>
        </div>
      </div>

      <div class="mdui-container-fluid">
        <div id="tab1">
          <ul class="mdui-list">
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar1.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Brunch this weekend?</div>
                <div class="mdui-list-item-text mdui-list-item-two-line"><span class="mdui-text-color-black">All Connors</span> - I'll be in your neighborhood ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar2.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Summer BBQ</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">to Alex, Scott, Jennifer</span> - Wish I could ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar3.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Oui oui</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">Sandra Adams</span> - Do you have Paris reco ...</div>
              </div>
            </li>
                        <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar1.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Brunch this weekend?</div>
                <div class="mdui-list-item-text mdui-list-item-two-line"><span class="mdui-text-color-black">All Connors</span> - I'll be in your neighborhood ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar2.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Summer BBQ</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">to Alex, Scott, Jennifer</span> - Wish I could ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar3.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Oui oui</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">Sandra Adams</span> - Do you have Paris reco ...</div>
              </div>
            </li>
                        <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar1.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Brunch this weekend?</div>
                <div class="mdui-list-item-text mdui-list-item-two-line"><span class="mdui-text-color-black">All Connors</span> - I'll be in your neighborhood ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar2.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Summer BBQ</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">to Alex, Scott, Jennifer</span> - Wish I could ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar3.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Oui oui</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">Sandra Adams</span> - Do you have Paris reco ...</div>
              </div>
            </li>
                                    <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar1.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Brunch this weekend?</div>
                <div class="mdui-list-item-text mdui-list-item-two-line"><span class="mdui-text-color-black">All Connors</span> - I'll be in your neighborhood ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar2.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Summer BBQ</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">to Alex, Scott, Jennifer</span> - Wish I could ...</div>
              </div>
            </li>
            <li class="mdui-divider-inset mdui-m-y-0"></li>
            <li class="mdui-list-item">
              <div class="mdui-list-item-avatar"><img src="//www.mdui.org/docs/assets/docs/img/avatar3.jpg"/></div>
              <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">Oui oui</div>
                <div class="mdui-list-item-text mdui-list-item-one-line"><span class="mdui-text-color-black">Sandra Adams</span> - Do you have Paris reco ...</div>
              </div>
            </li>
          </ul>
        </div>
        <div id="tab2">
          <p>tab 2</p>
          <p>tab 2</p>
        </div>
        <div id="tab3">
          <p>tab 3</p>
          <p>tab 3</p>
        </div>
        <div id="tab4">
          <p>tab 3</p>
          <p>tab 3</p>
        </div>
      </div>

      <!-- 侧栏 -->
      <div class="mdui-drawer" id="drawer">
        <ul class="mdui-list">
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
            <div class="mdui-list-item-content">Inbox</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">star</i>
            <div class="mdui-list-item-content">Starred</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
            <div class="mdui-list-item-content">Sent mail</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">drafts</i>
            <div class="mdui-list-item-content">Drafts</div>
          </li>
          <li class="mdui-subheader">Subheader</li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">email</i>
            <div class="mdui-list-item-content">All mail</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
            <div class="mdui-list-item-content">Trash</div>
          </li>
          <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons">error</i>
            <div class="mdui-list-item-content">Spam</div>
          </li>
        </ul>
      </div>
    <!-- <router-link to="/index">Index</router-link>
    <div>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from './pages/Index'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Index
  },
  methods: {
    open() {
      var inst = new this.$mdui.Drawer('#drawer');
      inst.open();
    }
  }
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
