
export function buildRoutePath(path){
    const routeParamtersRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParamtersRegex, '(?<id>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}`) 

    return pathRegex
}