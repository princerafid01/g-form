<template>
  <v-app>
    <v-main>
      <Signin/>
    </v-main>
  </v-app>
</template>

<script>
import Signin from './components/Signin';

export default {
  name: 'App',

  components: {
    Signin,
  },

  data: () => ({
    //
  }),
};
</script>
