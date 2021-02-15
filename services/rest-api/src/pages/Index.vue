<template>
  <q-page class="flex flex-center">

    <div id="content" style="width: 100%;">
      Powered by :zap:
    <br />
      your metamask address: {{accounts}}
    </div>


  </q-page>
</template>

<script>
  import { ethers } from 'ethers'

export default {
  name: 'PageIndex',
  components: {
  },
  data () {
    return {
      status:"online",
      accounts:""
    }
  },
  mounted: async function () {

    //detect metamask
    const newAccounts = await ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log("metamask accounts: ",newAccounts)
    this.accounts = newAccounts.toString()

  },
  methods: {
  },
}
</script>
