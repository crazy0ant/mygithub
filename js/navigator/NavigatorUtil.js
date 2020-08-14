
export default class NavigatorUtil {

    /**
     * 重置到首页
     * @param params
     */
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate('Main')
    }
}
