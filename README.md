# 基于vue+bootstrap的pizza点餐系统

## 前言
此项目原型是我在网上购买的项目实战课程,视频课程中的数据是通过野狗云调用的,但是目前野狗云新用户无法注册。所以这个项目中页面设计和购物车菜单中的逻辑是视频课程代码，另外的登录注册和管理界面的代码是我自己个人逻辑实现的。
因为无法调用云数据库，所以我就把数据的增删改查放在Vuex中来调用实现。

**技术栈:**
Vue+Vue-Router+Vue-CLI+VueX+Bootstrap

**项目进行**
```
git clone https://github.com/kawaii7/Pizza.git
cd Pizza
npm install
npm run serve
```

下面主要介绍我自己实现的一些功能。

进入界面首先一个功能是如果不登录账号的话我们是进不去菜单管理等界面的，只能先登录或者注册。这块是应用了路由的全局导航守卫。
![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/1.gif)

进入登录页
首先如果有表单项目没有填写会提示我们输入
![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/2.gif)

但是登录的时候如果我们输入的账号在数据库（实际上是存储在vuex中的账号密码，我这里只是模拟了这个功能）中不存在。会提示我们该账号没有注册，先注册，然后自动跳转到注册界面
![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/3.gif)

进入注册页
在注册界面中如果有表单项目没有填写同样会提示我们。如果有两次密码确认输入不一致会提示我们。当我们注册信息填写正确，会提示我们，这时候账号密码信息就存在Vuex中了，界面会自动跳转到登录界面
![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/4.gif)

在登录界面如果有表单的项目未填写或者注册的账号密码输入错误会提示，登录成功会跳转到首页
![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/5.gif)

右上角会有登录的账号信息和退出登录选项，点击退出会把登录状态改成false。当然各种功能界面也都进不去了，必须登录才可以进去。
![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/6.gif)

在管理界面中右侧有目前存在菜单中的品种，这是在Vuex中初始化的pizza。在左侧我们可以添加新pizza品种到菜单中，点击添加会新添加的pizza品种添加到vuex状态中,当我们填写好新的pizza品种在菜单页和右侧菜单管理中就存在了。

![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/7.gif)

右侧管理菜单中点击删除会把当前的pizza在vuex中删除。vue的双向绑定就会帮助我们在操作视图的时候同时更新数据。当我们删除pizza品种后，菜单也就显示当前存在的pizza品种,购物车模块的代码是视频课程代码，主要可以实现pizza的添加和购物车的计算。

![enter image description here](https://github.com/kawaii7/Vue/blob/master/images/Pizza/8.gif)

