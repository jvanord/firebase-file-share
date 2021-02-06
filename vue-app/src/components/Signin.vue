<template>
	<v-card class="pa-4">
		<v-card-title class="justify-center text-center">Sign In</v-card-title>
		<v-form ref="form" v-model="valid">
			<v-card-text>
				<v-text-field
					v-model="email"
					label="Email Address"
					hint="email@example.com"
					prepend-inner-icon="mdi-email"
					:rules="emailRules"
					clearable
					filled
					required
				></v-text-field>
				<v-text-field
					v-model="password"
					label="Password"
					hint="At least 8 characters"
					prepend-inner-icon="mdi-lock"
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="showPassword = !showPassword"
					:type="showPassword ? 'text' : 'password'"
					:rules="passwordRules"
					filled
					required
				></v-text-field>
			</v-card-text>
			<v-card-actions>
				<v-btn :disabled="!valid && !busy" color="primary" @click="signIn">Sign In</v-btn>
				<v-btn color="" @click="reset">Reset</v-btn>
			</v-card-actions>
			<v-progress-linear indeterminate color="primary" :active="busy"> </v-progress-linear>
		</v-form>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
export default Vue.extend({
	name: 'Signin',
	data: () => ({
		valid: true,
		busy: false,
		email: '',
		emailRules: [
			(v: string) => !!v || 'E-mail is required',
			(v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		],
		password: '',
		passwordRules: [
			(v: string) => !!v || 'Password is required',
			(v: string) => (v && v.length >= 8) || 'Password must be at least 8 characters',
		],
		showPassword: false,
	}),
	computed: {
		form(): Vue & { validate: () => boolean; reset: () => void } {
			return this.$refs.form as Vue & {
				validate: () => boolean;
				reset: () => void;
			};
		},
	},
	methods: {
		...mapActions(['signInAction']),
		signIn() {
			this.busy = true;
			this.signInAction({
				email: this.email,
				password: this.password,
			}).then((response: any) => {
				console.log(response);
				this.form.reset();
				this.busy = false;
				this.$router.replace(<string>this.$route.query.r || '/');
			});
		},
		validate() {
			this.form.validate();
		},
		reset() {
			this.form.reset();
		},
	},
});
</script>