var is_initialized = false;

function Router() {
    return new Gexpress.App();
}

function Model(classProps, instanceProps) {
    if (!is_initialized) {
        Tamotsu.initialize();
    }
    return Tamotsu.Table.define(classProps, instanceProps);
}

function Collect() {
    return App.makeCollection(...arguments);
}

function Str() {
    return App.makeStr(...arguments)
}

function Moment() {
    return App.makeMoment(...arguments)
}

function Lodash() {
    return App.makeLodash(...arguments);
}