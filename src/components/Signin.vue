<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1>Sign up and start editing on your google sheet</h1>
        <v-btn color="primary" @click="onGoogleAuthSuccess">
          <v-icon>mdi-pencil</v-icon>Sign in
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signin",

  data() {
    return {
      isInit: false,
      isSignIn: false,
      clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID
    };
  },
  methods: {
    async SignUpUser() {
        const client = window.google.accounts.oauth2.initTokenClient({
            client_id: this.clientId,
            scope:
            "https://www.googleapis.com/auth/spreadsheets \
            https://www.googleapis.com/auth/drive \
            https://www.googleapis.com/auth/drive.file",
            callback: "", // defined at request time
        });
        const tokenResponse = await new Promise((resolve, reject) => {
            try {
                // Settle this promise in the response callback for requestAccessToken()
                client.callback = (resp) => {
                    if (resp.error !== undefined) {
                    reject(resp);
                    }

                    // console.log("client resp",resp);
                    resolve(resp);
                };
                // console.log("client",client);
                client.requestAccessToken({ prompt: "consent" });
            } catch (err) {
                console.log(err);
            }
        });
        return tokenResponse;
    },
    async onGoogleAuthSuccess(){
      try {
        const data = await this.SignUpUser();
        this.isSignIn = true;
        window.localStorage.setItem('access_token', data.access_token);

        this.$router.push({name : 'home',  params : {'access_token' : data.access_token}});
      } catch (error) {
        //on fail do something
        console.error(error);
      }
        
    }
  },
  mounted() {
	if(window.localStorage.getItem('access_token')){
        this.$router.push({name : 'home',  params : {'access_token' : window.localStorage.getItem('access_token')}});
	}
  },
};
</script>
