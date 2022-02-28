<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer
          v-model="drawer"
          app
          clipped
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{ icon.mdiViewDashboard }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{ icon.mdiCog }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
          app
          clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Jvmm Manager</v-toolbar-title>
      </v-app-bar>

      <v-container
          class="fill-height pa-0 ma-0"
          fluid
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-container>

      <v-footer app>
        <span>&copy; 2022</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import {mdiViewDashboard, mdiCog} from "@mdi/js";

export default {
  name: "Index",
  components: {},
  data: () => ({
    drawer: null,
    icon: {
      mdiViewDashboard, mdiCog
    }
  })
}
</script>

<style scoped>

</style>