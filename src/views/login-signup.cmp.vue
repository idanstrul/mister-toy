<template>
    <section class="login-signup">
        <pre v-if="loggedinUser">
            {{ loggedinUser }}
        </pre>
        <div v-else>
            <div v-if="!isInSignup" class="login-form">
                Log-in:
                <form @submit.prevent="login">
                    <input type="text" placeholder="User name" v-model="userCred.username"/>
                    <input type="text" placeholder="Password" v-model="userCred.password"/>
                    <button>Log-in</button>
                </form>Don't have a user yet?
                <button class="link" @click="isInSignup = true">Sign-up</button>
            </div>
            <div v-else class="signup-form">
                Sign-up:
                <form @submit.prevent="signup">
                    <input type="text" placeholder="Full name" v-model="userCred.fullName"/>
                    <input type="text" placeholder="User name" v-model="userCred.username"/>
                    <input type="text" placeholder="Password" v-model="userCred.password"/>
                    <button>Sign-up</button>
                </form>Already have a user?
                <button class="link" @click="isInSignup = false">Log-in</button>
            </div>
        </div>
        <pre>
            {{users}}
            {{userCred}}
        </pre>
        <button @click="loadUsers">loadUsers</button>
    </section>
</template>

<script>
export default {
    name: 'login-signup',
    data() {
        return {
            isInSignup: false,
            userCred: {
                fullName: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            console.log("Loging in user: ", this.userCred);
            this.$store.dispatch({ type: 'login', userCred: this.userCred})
        },
        signup(){
            console.log("Signing up user: ", this.userCred);
        },
        loadUsers(){
            this.$store.dispatch('loadUsers')
        }
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser;
        },
        users(){
            return this.$store.getters.users
        }
    }
}
</script>

<style>
</style>