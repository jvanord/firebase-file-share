<template>
	<div class="home">
		<v-container class="pa-5">
			<h1 class="text-center mb-5">Your Files</h1>

			<div v-if="loading" class="pa-10 text-center">
				<v-progress-circular color="primary" indeterminate></v-progress-circular>
			</div>

			<v-card v-if="empty && !loading" class="pa-4 text-center">
				<v-card-text>
					<p>
						You have no files yet to view.
						<router-link to="/upload">Upload</router-link> one now.
					</p>
				</v-card-text>
			</v-card>

			<v-lazy v-for="file in myFiles" :key="file.id">
				<v-card class="pa-2 ma-1">
					{{ file.name }}
				</v-card>
			</v-lazy>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import VuetifyLogo from '../../../web/components/VuetifyLogo.vue';
export default Vue.extend({
	name: 'Home',
	components: { VuetifyLogo },
	mounted() {
		this.$store.dispatch('file/load');
		//this.hideLoading(2000);
	},
	data: () => ({
		//loading: true,
	}),
	computed: {
		...mapGetters({ myFiles: 'file/myFiles', loading: 'file/loading' }),
		empty(): boolean {
			return !this.myFiles.length;
		},
	},
	methods: {
		hideLoading: function (timeout: number | undefined) {
			let _this = this;
			if (timeout)
				setTimeout(function () {
					_this.loading = false;
				}, timeout);
			else _this.loading = false;
		},
	},
});
</script>