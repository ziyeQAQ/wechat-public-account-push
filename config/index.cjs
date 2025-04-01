/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx520ffbad36548a38',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e9822cd9556754e34c1efdea8b201dfd',

  PROVINCE: '四川',
  CITY: '宜宾',

  USERS: [
    {
      // 想要发送的人的名字
      name: '巧巧',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojdJP62CduzIgsYfuG_bve8DrALw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'LL8mbZdwu4DnwmDY9d6nZ7nsHHwxRUIE0_MYhasGfB4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '6-11',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '巧巧', year: '2006', date: '05-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '巧巧', year: '2006', date: '06-11',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '08-02',
        },
      ],
      // 我们在分开已经有xxxx天了的配置
      customizedDateList: [
        // 分开的日子
        { keyword: 'love_day', date: '2024-12-26' },
        // 纪念日
        { keyword: 'marry_day', date: '2025-08-02' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'LL8mbZdwu4DnwmDY9d6nZ7nsHHwxRUIE0_MYhasGfB4',

  CALLBACK_USERS: [
    {
      name: '紫夜',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojdJP65KD3VyCTdMdGWGUBLrPM6U',
    }
  ],

}

module.exports = USER_CONFIG

