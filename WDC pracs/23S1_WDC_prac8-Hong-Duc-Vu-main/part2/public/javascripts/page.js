const vueinst = Vue.createApp({
    data() {
        return {
            first_name: '',
            last_name: '',
            info: [
                { first_name: 'Some', last_name: 'Actor' }
            ]
        };
    },

    mounted() { // this function will be run when the web page loads
        let req = new XMLHttpRequest();

        req.onreadystatechange = function () {
            if (req.readyState === 4 && req.status === 200) {
                // console.log("success");
                vueinst.info = JSON.parse(req.responseText);
            }
        };

        req.open('GET', '/get-actor', true);
        req.send();
    },

    methods: {
        addActor(){
            let req = new XMLHttpRequest();
            let actor_name = {
                first_name: vueinst.first_name,
                last_name: vueinst.last_name
            };

            // req.onreadystatechange = function () {
            //     if (req.readyState === 4 && req.status === 200) {
            //         // console.log("success");
            //         //vueinst.info = JSON.parse(req.responseText);
            //         //alert("add actor successful");
            //     }
            // };

            req.open('POST', '/add-actor', true);
            req.setRequestHeader('Content-Type','application/json');
            req.send(JSON.stringify(actor_name));
        }
    }

}).mount('#app');

