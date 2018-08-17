import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "@/components/Movies";
import MovieDetails from "@/components/MovieDetails";
import NotFound from "@/components/NotFound";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/movies",
      component: Movies,
      name: "Movies"
    },
    {
        path: '/movie/:id',
        component: MovieDetails,
        name: 'MovieDetails'
    },
    {
        path: '*',
        component: NotFound,
        name: 'NotFound'
    }
  ]
});
