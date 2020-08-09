<template>
    <div>
        <v-app-bar light>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-toolbar-title color="indigo" class="float-left">G-Form</v-toolbar-title>
                        <v-btn  color="success" dark class="float-right" @click="signout">Switch to another Account</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

    <div class="main">
        <v-container>
            <h1 class="text-center my-5 w-100">Google Sheets</h1>
            <v-row>
                <v-col cols="4" v-for="(sheet , index) in sheets" :key="index">
                     <v-card>
                        <v-card-text>
                            <p class="display-1 text--primary">
                                {{ sheet.name }}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>

    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                sheets_url: "https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.spreadsheet'",
                sheets: null
            }
        },
        props: {
            access_token: {
                type: String,
            },
        },
        methods: {
            signout() {
                this.$gAuth.signOut()
                this.$router.push('/')
            }
        },
        mounted () {
            axios.get(this.sheets_url , {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${this.access_token}`
                }
            })
            .then(({data}) => {
                this.sheets = data.files
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>