import { Refill } from './pages/Refill';
import Auth from "./pages/Auth"
import Chat from "./pages/Chat"
import Main from "./pages/Main"

import Support from "./pages/Support"
import Withdraw from "./pages/Withdraw"
import { CHAT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REFERALS_ROUTE, REFILL_ROUTE, REGISTRATION_ROUTE, SUPPORT_ROUTE, WITHDRAW_ROUTE } from "./utils/const"
import Refiral from './pages/Refiral';

export const authRoutes = [
    {
        path: CHAT_ROUTE,
        Component : Chat
    },

    {
        path: REFILL_ROUTE,
        Component : Refill
    },

    {
        path : SUPPORT_ROUTE,
        Component : Support
    },

    {
        path : WITHDRAW_ROUTE,
        Component : Withdraw
    },

    {
        path : REFERALS_ROUTE,
        Component : Refiral
    },

    {
        path : MAIN_ROUTE,
        Component : Main
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component : Auth,
    },

    {
        path: REGISTRATION_ROUTE,
        Component : Auth,
    },
]