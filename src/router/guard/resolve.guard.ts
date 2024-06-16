import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

const executeGuards = (
    guards: any,
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    const guardsLeft = guards.slice(0);
    const nextGuard = guardsLeft.shift();

    if (nextGuard === undefined) {
        next();
        return;
    }

    nextGuard(to, from, (nextArg: undefined) => {
        if (nextArg === undefined) {
            executeGuards(guardsLeft, to, from, next);
            return;
        }
        next(nextArg);
    });
};

export const ResolveGuard = (
    guards: ((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => any)[]
) => {
    if (Array.isArray(guards)) {
        return (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
            return executeGuards(guards, to, from, next);
        };
    } else throw new Error("Guards must be an array");
};
