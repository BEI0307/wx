/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx549f0bd7c1de7966',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '56291c11a379b476436a45ac9356f9e3',

  PROVINCE: '广东',
  CITY: '汕头',

  USERS: [
    {
      // 想要发送的人的名字
      name: '困',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oeGip6CwLVEumMnaCu_M_RzyhqRs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'gWnYn5dMtt4qGb9ChNN6Iqn70AXiYo9CI902aTnDWG8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小群',year: '2004', date: '04-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小洋', year: '2003',date: '03-07',
        },
        {
          type: '节日', name: '纪念日', year: '2022',date: '09-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-20', },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'gWnYn5dMtt4qGb9ChNN6Iqn70AXiYo9CI902aTnDWG8',

  CALLBACK_USERS: [
    {
      name: 'BEI',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oeGip6LoIAFHw0_0Ven0cRNdo5dk',
    }
  ],

}

module.exports = USER_CONFIG

