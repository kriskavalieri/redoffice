export default {
    parseMenuRoutes(routes) {
        let _routes = []
        routes.map(route => {
            if (route.meta && route.meta.menu) {
                let menu = route.meta.menu
                _routes.push({
                    name: route.name,
                    path: route.path,
                    title: menu.title || route.name,
                    newWindow: menu.newWindow || false,
                    iconClass: menu.iconClass || "",
                    children: route.children || [],
                    expanded: false
                })
            }
        })
        return _routes
    }
}