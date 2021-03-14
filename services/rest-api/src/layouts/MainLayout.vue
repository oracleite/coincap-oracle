<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-img height=50px width=50px src="../assets/zap.png"></q-img>
        <q-toolbar-title>
          Oracles.cc
        </q-toolbar-title>
        <q-btn label="Get Zap" color="success" @click="alert = true" />
        <q-icon name="api" size="36px"></q-icon>
        <div>API v{{ $q.version }}</div>

      </q-toolbar>
    </q-header>

    <q-page-container>


      <q-dialog v-model="alert" align="center"  style="min-width:450px;">
        <q-card style="min-width:450px;">
          <q-card-section>
            <div class="text-h6">Buy Zap on Uniswap</div>
          </q-card-section>

          <q-card-section>
            <iframe
                    src="https://app.uniswap.org/#/swap?outputCurrency=0x6781a0f84c7e9e846dcb84a9a5bd49333067b104"
                    height="660px"
                    width="100%"
                    style="
          border: 0;
          margin: 0 auto;
          display: block;
          border-radius: 10px;
          max-width: 800px;
          min-width: 300px;
        "
                    id="myId"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import AppModal from '../components/Dialog';
const axios = require('axios')
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'MainLayout',

  components: {
    AppModal,
  },
  data() {
    return {
      alert: false,
      isLoggedIn: false,
    }
  },
  computed: {
  },
  async mounted() {
    try{
      this.showModal('BuyZap')
      console.log("process.env",process.env)
      const newAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      console.log("newAccounts: ",newAccounts)

    }catch(e){
      console.error(e)
    }
  },
  methods: {
    ...mapMutations(['showModal', 'hideModal']),
    onItemClick () {
      console.log('Clicked on an Item')
    },
    onLogin () {
      console.log('onlogin')

    },
    onLogout () {
      console.log('logging out')

    }
  }
}
</script>
