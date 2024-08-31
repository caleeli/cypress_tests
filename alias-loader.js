export function resolve(specifier, context, defaultResolve) {
    // @pages
    if (specifier.startsWith('@pages/')) {
        const newSpecifier = specifier.replace('@pages/', './pages/') + '.js';
        return defaultResolve(newSpecifier, context);
    }
    // @helpers
    if (specifier.startsWith('@helpers/')) {
        const newSpecifier = specifier.replace('@helpers/', './helpers/') + '.js';
        return defaultResolve(newSpecifier, context);
    }

    return defaultResolve(specifier, context);
}
