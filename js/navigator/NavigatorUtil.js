
export default class NavigatorUtil {

    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的页面名
     */
    static goPage(params,page){
        const navigation = NavigatorUtil.navigation;
        if(!navigation){
            console.log('NavigationUtil.navigation can not be null')
        }
        navigation.navigate(page,params);
    }

    /**
     * 重置到首页
     * @param params
     */
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate('Main')
    }
}
