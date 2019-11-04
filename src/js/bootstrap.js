import VueRouter from 'vue-router';
import VueCodeMirror from 'vue-codemirror-lite';
import Base from './components/Base';
import BasicConcepts from './components/Pages/BasicConcepts';
import Example from './components/Example'
import UseTheCrapOutOfSvgs from "./components/Pages/UseTheCrapOutOfSvgs";
import Breakpoints from "./components/Pages/Breakpoints";
import NavigationItem from "./components/NavigationItem";
import Zondicon from 'vue-zondicons'
import jQuery from 'jquery';
import ConsistentWhitespace from "./components/Pages/ConsistentWhitespace";
import UseExtraDivsDude from "./components/Pages/UseExtraDivsDude";
import Header from "./components/Header";
import CondenseUtilities from "./components/Pages/CondenseUtilities";
import FloatsVsFlexbox from "./components/Pages/FloatsVsFlexbox";
import CustomStyles from "./components/Pages/CustomStyles";

window.$ = window.jQuery = jQuery;
window.CodeMirror = VueCodeMirror.CodeMirror;

export default (Vue) => {
    Vue.use(VueCodeMirror);
    Vue.use(VueRouter);
    Vue.component('Header', Header);
    Vue.component('zondicon', Zondicon);
    Vue.component('example-code', Example);
    Vue.component('navigation-item', NavigationItem);

    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Base,
                children: [
                    {
                        path: 'use-svgs',
                        component: UseTheCrapOutOfSvgs
                    },
                    {
                        path: 'condense-utilities',
                        component: CondenseUtilities
                    },
                    {
                        path: 'breakpoints',
                        component: Breakpoints
                    },
                    {
                        path: 'consistent-whitespace',
                        component: ConsistentWhitespace
                    },
                    {
                        path: 'use-extra-divs',
                        component: UseExtraDivsDude
                    },
                    {
                        path: 'floats-vs-flexbox',
                        component: FloatsVsFlexbox
                    },
                    {
                        path: 'custom-styles',
                        component: CustomStyles
                    },
                    {
                        path: '*',
                        component: BasicConcepts
                    },
                ],
            },
        ]
    })

    return {
        router,
    }
}