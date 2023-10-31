const { createApp } = Vue;

createApp({
  data() {
    return {
      baseUrl: "http://localhost:3000",
      products: [],
      categories: [],
      messageError: '',
      page: "login",
      subPage: "",
      register: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    changePage(to) {
      this.page = to;
    },
    changeSubPage(to){
        this.subPage = to;
    },
    createUser() {
      console.log(this.register.username);
      console.log(this.register.email);
      console.log(this.register.password);
      console.log(this.register.phoneNumber);
      console.log(this.register.address);
    },
    async getLogin() {
      try {
        const login = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: this.login,
        });
        localStorage.setItem("access_token", login.data.token);
        this.page = "main";
        this.subPage = "dashboard";
      } catch (error) {
        console.log(error.response.data.message, `<<< ERROR`);
      }
    },
    getLogout() {
      localStorage.clear();
      this.page = "login";
      this.subPage = "";
    },
    async fetchProducts() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/products",
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.products = data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async fetchCategories(){
        try {
            const { data } = await axios({
                url: this.baseUrl + "/categories",
                method: "get",
                headers: {
                  access_token: localStorage.getItem("access_token"),
                },
              });
              this.categories = data;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
  },
  created() {
    if (localStorage.access_token) {
      (this.page = "main"), (this.subPage = "dashboard");
      this.fetchProducts();
      this.fetchCategories()      
    }
  },
  watch: {
    'login.password'(newValue, oldValue){
        if(newValue.length < 5 && newValue.length > 0){
            this.messageError = "Weak password"
        }else{
            this.messageError = ""
        }
      }
  },
  computed: {
    toRupiah(value){
        const rupiah = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        })
        return rupiah.format(value)
    }
  }
}).mount("#app");
