export default {
    data: () => ({
        mixinTitle: "homework",
    }),
    computed: {
        router() {
            return this.$router.currentRoute;
        }
    },
    methods: {
        setPageTitle(pageTitle = "Vue3") {
            document.title = pageTitle;
        }
    },
    watch: {
        $route(to) {
            this.setPageTitle(to.meta.title);
        }
    },
    filters :{
        nativeDate(data){
            return new Date(data).toLocaleString();
        }
    }
};
