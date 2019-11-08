function perform(anyMethod) {
    return function () {
        wrapper.forEach(wrapper => { wrapper.initialize() });
        anyMethod(); 
        wrapper.forEach(wrapper => { wrapper.close() });
    }
        
}
let newFn=perform(function () {
    console.log('say');

}, [{
    initialize() {
        console.log('wrapper1 beforeSay');

    },
    close() {
        console.log('wrapper1 close');

    }
},{
    initialize() {
        console.log('wrapper2 beforeSay');

    },
    close() {
        console.log('wrapper2 close');

    }
}])
newFn();