<template>
	<v-snackbar
		v-model="getError"
		:timeout="-1"
		:value="true"
		absolute
		top
		right
		color="error"
		outlined
	>
		{{ getError }}
		<template v-slot:action="{ attrs }">
			<v-btn color="error" text v-bind="attrs" @click="clearError">
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</template>
	</v-snackbar>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
export default Vue.extend({
	data: () => ({}),
	methods: {
		...mapActions(['clearError']),
	},
	computed: {
		...mapGetters(['getError']),
	},
});
</script>