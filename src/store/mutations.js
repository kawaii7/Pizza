export const addition = (state, payload) => {//添加商品
    state.getMenuItems.push(payload);
};
export const register = (state, payload) => {//提交注册账号
    state.account.push(payload);

};
export const accountState = (state, payload) => {
    const data = state.account;
    const users = [];
    for (let index in data) {
        const user = data[index];
        users.push(user)
    }

    let result = users.filter((user) => {
        return user.email === payload.email
    });
    let result2 = users.filter((user) => {
        return user.email === payload.email && user.password === payload.password
    });
    if (result.length === 0) {//如果注册邮箱不存在
        alert('此账号还未注册!请先注册');
        payload.router.push({name: "registerLink"})//跳转到注册界面
    } else if (result2 != null && result2.length > 0) {//账号密码都正确
        alert("登录成功");
        state.currentUser = payload.email;
        state.isLogin = true;
        payload.router.push({name: "homeLink"})
    } else {
        alert("账号或密码错误!")
    }

};
export const logout = (state) => {
    state.isLogin = false
};