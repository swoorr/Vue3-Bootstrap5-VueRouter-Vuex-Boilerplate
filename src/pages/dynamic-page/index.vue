<template>
	<div class="container">
		<!-- {{ router.params.id }} -->
		<hr />
		store
		{{ $store.state.count }}
		<span class="btn btn-primary" @click="$store.commit('increment')">++</span>
		<span class="btn btn-danger" @click="$store.commit('downcrease')">--</span>
	</div>
</template>