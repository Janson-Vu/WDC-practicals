const vueinst = Vue.createApp({
    data(){
        return {
            all_posts: [{ title: "", content: "" }],
            post_title: '',
            post_content: ''
        };
    },

    methods: {
        makePost(){
            let post_data = {title: this.post_title, content: this.post_content};
            let req = new XMLHttpRequest();

            req.open('POST', '/users/addpost', true);
            req.setRequestHeader('Content-type', 'application/json');
            req.send(JSON.stringify(post_data));
        },

        getPosts(){
            let req = new XMLHttpRequest();
            req.onreadystatechange = function(){
                if (req.readyState === 4 && req.status === 200){
                    let result = JSON.parse(req.responseText);
                    vueinst.all_posts = result;
                }
            };

            req.open('GET', '/users/getposts', true);
            req.send();
        }
    }
}).mount('#app');