const MainStore = () => {
    return {
        IsLogin: false,
        SideBarStatus: false,

        Set_SideBar_Status() {
            this.SideBarStatus = !this.SideBarStatus;
            console.log(this.SideBarStatus);
        },

        SetIsLogin() {
            console.log(this.IsLogin);
            this.IsLogin = !this.IsLogin;
        }
    };
};

export default MainStore;

export type TStore = ReturnType<typeof MainStore>;
