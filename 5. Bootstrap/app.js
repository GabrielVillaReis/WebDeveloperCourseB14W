Vue.createApp({
    data() {
        return {
            registers: [{
                id: 0,
                email: "test@gmail.com",
                password: "123456",
                checkbox: true
            }
            ],
            x: "",
            y: "",
            z: false,
            id: 1
        };
    },
    methods: {
        addReg() {
            this.registers.push({ id: this.id, email: this.x, password: this.y, checkbox: this.z });
            this.id++;
        },
        checkBoxClick() {
            this.z = !this.z
        }
    }
}).mount("#app");