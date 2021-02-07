<template>
	<v-container class="pa-7">
		<v-card class="pa-2">
			<v-card-title>Upload a New File</v-card-title>
			<v-card-subtitle>Choose a file to upload to the server ...</v-card-subtitle>
			<v-form ref="form">
				<v-card-text>
					<v-file-input v-model="file"></v-file-input>
				</v-card-text>
				<v-card-actions>
					<v-btn text color="primary" :disabled="!file" @click="onUploadClick"
						>Upload</v-btn
					>
				</v-card-actions>
			</v-form>
		</v-card>
		<v-snackbar v-model="success" color="success" absolute top right outlined :timeout="2500">
			{{ successMessage }}
		</v-snackbar>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
export default Vue.extend({
	data: () => ({ file: null, successMessage: '' }),
	computed: {
		success: {
			get: function () {
				return !!this.successMessage;
			},
			set: function (val) {
				if (!val) this.successMessage = '';
			},
		},
	},
	watch: {
		file: function (file) {
			console.log(file);
		},
	},
	methods: {
		...mapActions({ addFile: 'file/add' }),
		onUploadClick: function () {
			this.addFile(this.file);
			this.file = null;
			this.successMessage = 'File uploaded successfully!';
		},
	},
});
</script>