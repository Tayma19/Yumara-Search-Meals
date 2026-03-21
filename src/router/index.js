
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByIngredient from "../views/MealsByIngredint.vue";
import MealsByLetter from "../views/MealsByLatter.vue";
import MealsByName from "../views/MealsByName.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredints.vue";

const routes = [

    {
        path: '/',
        component: DefaultLayout,
        children:[
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: { title: 'Yumara - Home' },
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName,
                meta: { title: 'Yumara - Search Meals by Name' },
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
                meta: { title: 'Yumara - Meals by Letter' },
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient,
                meta: { title: 'Yumara - Meals by Ingredient' },
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients,
                meta: { title: 'Yumara - Ingredients' },
            },
            {
                 path:'meal/:id',
                 name: 'mealDetails',
                 component: MealDetails,
                 meta: { title: 'Yumara - Meal Details' },
            },
        ]
    },
    {
        path: "/guest",
        component: GuestLayout,
        meta: { title: 'Yumara - Guest' },
    },
];
    

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;