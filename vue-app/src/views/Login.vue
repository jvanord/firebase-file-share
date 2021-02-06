<template>
	<v-container class="pa-5 mt-5">
		<v-row>
			<v-col class="pa-3 col-12 col-md-6">
				<Signin />
			</v-col>
			<v-col class="pa-3 col-12 col-md-6">
				<Signup />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';

export default Vue.extend({
	components: {
		Signin,
		Signup,
	},
});
</script>