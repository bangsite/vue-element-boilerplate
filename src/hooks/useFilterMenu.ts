import type { RouteMeta, RouteRecordRaw } from "vue-router";

interface Route {
    meta?: RouteMeta;
    children?: RouteRecordRaw[];
}


export const useFilterMenu = (routers: Route[]) => {
    const filterChildren = (children: Route[])=>{
        return children.filter(child=>!child.meta?.hidden);
    };

    return routers.reduce((filteredRoutes, route)=>{
        if (!route.meta?.hidden) {
            // copy route
            const newRoute={...route};

            // filter children
            if (newRoute.children && newRoute.children.length > 0){
                newRoute.children=filterChildren(newRoute.children);
            }

            // add route filtered in array
            filteredRoutes.push(newRoute);

        }
        return filteredRoutes;
    }, [] as Route[])
};
export const useRenderMenuItem = () => {
    const renderMenuItem = (routers: AppRouteRecordRaw[]) => {
        return routers.map((item) => {
            const meta = (item.meta ?? {}) as RouteMeta;

            if (!meta.hidden) {
                const isChild = hasOneShowingChild(item.children, item);
                // const fullPath = isUrl(item.path) ? item.path : pathResolve(parentPath, item.path);

                return {
                    isChild,
                };
            }
        });
    };

    return {
        renderMenuItem,
    };
};
