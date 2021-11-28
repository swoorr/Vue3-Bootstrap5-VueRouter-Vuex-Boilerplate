<script setup>
import { onBeforeMount, onMounted, ref } from "@vue/runtime-core";

const title = ref("merhaba");

onBeforeMount(() => {
	title.value = "ok";
});
</script>

<template>
	<div class="container">
		<div
			class="toast align-items-center text-white bg-primary border-0 d-block"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div class="d-flex">
				<div class="toast-body">Hello, world! This is a toast message.</div>
				<button
					type="button"
					class="btn-close btn-close-white me-2 m-auto"
					data-bs-dismiss="toast"
					aria-label="Close"
				></button>
			</div>
		</div>

		<div class="dropdown">
			<button
				class="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenuButton1"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Check Bootstrap
			</button>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				<li><a class="dropdown-item" href="#">Action</a></li>
				<li><a class="dropdown-item" href="#">Another action</a></li>
				<li><a class="dropdown-item" href="#">Something else here</a></li>
			</ul>
		</div>
		<div class="container">test-page {{ title }}</div>
	</div>
</template>