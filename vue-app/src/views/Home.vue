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
			<v-list v-if="!loading" dense>
				<v-lazy v-for="file in myFiles" :key="file.id">
					<v-card class="pa-2 ma-1">
						<v-list-item>
							<v-list-item-content>
								{{ file.name }}
							</v-list-item-content>
							<v-list-item-icon>
								<v-icon
									color="primary darken-2"
									@click="onDownloadClick(file.fullPath)"
								>
									mdi-download</v-icon
								>
								<v-icon color="red darken-4" @click="onDeleteClick(file.fullPath)">
									mdi-delete
								</v-icon>
							</v-list-item-icon>
						</v-list-item>
					</v-card>
				</v-lazy>
			</v-list>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import VuetifyLogo from '../../../web/components/VuetifyLogo.vue';
import firebase from 'firebase';

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
		...mapActions({
			deleteFile: 'file/delete',
			reload: 'file/load',
			download: 'file/download',
		}),
		onDeleteClick: function (fileName: string) {
			console.log('delete clicked: ' + fileName);
			this.deleteFile(fileName);
		},
		onDownloadClick: async function (fileName: string) {
			var match: firebase.storage.Reference[] = this.myFiles.filter(
				(f: firebase.storage.Reference) => f.fullPath == fileName,
			);
			if (!match.length) return;
			let url = await match[0].getDownloadURL();
			let data = await this.download(url);
			var fileURL = window.URL.createObjectURL(data);
			var fileLink = document.createElement('a');
			fileLink.href = fileURL;
			fileLink.setAttribute('download', fileName);
			document.body.appendChild(fileLink);
			fileLink.click();
		},
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