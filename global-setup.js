// global-setup.js

global.Cypress = {
    env(name) {
        // get environment variable from system
        return process.env[name];
    }
}

global.cy = {
    wait(time) {
        console.log(`Waiting for ${time}ms`);
    },
    reload() {
        console.log("Reloading page");
    },
    url() {
        return new Promise((resolve) => {
            resolve("http://localhost:3000/a/b/c");
        });
    },
    get(selector) {
        return {
            should(callback) {
                console.log(`Validating selector ${selector}`);
            },
            click() {
                console.log(`Clicking on ${selector}`);
            }
        }
    }
}

global.describe = function(description, tags, fn) {
    console.log(`Description: ${description}`, tags);
    fn();
};

global.beforeEach = function(fn) {
    fn();
}

global.it = function(description, fn) {
    console.log(`It: ${description}`);
    fn();
}
