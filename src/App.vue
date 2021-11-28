<script>
import { onBeforeMount, ref } from "@vue/runtime-core";

const title = ref("Vue 3 ");

onBeforeMount(() => {
	title.value = "ok";
});
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/"> {{ mixinTitle }} {{ $store.state.count }} </router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" tag="a" to="/test-page">Link</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" tag="a" to="/dynamic-page/1">Dynamic</router-link>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Dropdown
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li>
								<router-link class="dropdown-item" tag="a" to="/dynamic-page/1"
									>Dynamic Page</router-link
								>
							</li>
							<li>
								<router-link class="dropdown-item" tag="a" to="/dynamic-page/1"
									>Another action</router-link
								>
							</li>
							<li><a class="dropdown-item" @click="showModal">Show modal</a></li>
						</ul>
					</li>
				</ul>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>

	<router-view />
</template>
<style>
</style>
