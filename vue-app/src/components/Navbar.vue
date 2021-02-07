<template>
	<v-app-bar app color="primary" dark>
		<div class="d-flex align-center">
			<v-img
				alt="Vuetify Logo"
				class="shrink mr-2"
				contain
				src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
				transition="scale-transition"
				width="40"
			/>

			<v-img
				alt="Vuetify Name"
				class="shrink mt-1 hidden-sm-and-down"
				contain
				min-width="100"
				src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
				width="100"
			/>
		</div>

		<v-spacer></v-spacer>

		<v-btn text color="error" @click="testError('Test')">
			<v-icon>mdi-test</v-icon>
		</v-btn>

		<v-btn text v-if="isAuthenticated" to="/">
			<span class="mr-2 d-none d-sm-flex">Home</span>
			<v-icon>mdi-home</v-icon>
		</v-btn>

		<v-btn text v-if="isAuthenticated" to="/upload">
			<span class="mr-2 d-none d-sm-flex">Upload</span>
			<v-icon>mdi-upload</v-icon>
		</v-btn>

		<v-btn text v-if="isAuthenticated" @click="signOut">
			<span class="mr-2 d-none d-sm-flex">Logout</span>
			<v-icon>mdi-logout</v-icon>
		</v-btn>

		<v-btn text v-if="!isAuthenticated" to="/login">
			<span class="mr-2">Sign In</span>
			<v-icon>mdi-login</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
	data: () => ({}),
	computed: {
		...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
	},
	methods: {
		...mapActions({ signOut: 'auth/signOut', testError: 'testError' }),
	},
});
</script>