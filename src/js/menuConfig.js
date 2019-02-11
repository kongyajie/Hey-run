const config = [
  {
    title: '欢迎',
    key: 'welcome',
    icon: 'h-icon-home',
    codeUrl: 'basic/welcome.js'
  },
  {
    title: '按钮示例',
    key: 'button',
    icon: 'h-icon-home',
    children: [
      {
        title: '按钮-1',
        key: 'button1',
        codeUrl: 'basic/button1.js'
      },
      {
        title: '按钮-2',
        key: 'button2',
        codeUrl: 'basic/button2.js'
      }
    ]
  },
  {
    title: '消息示例',
    key: 'message',
    icon: 'h-icon-home',
    children: [
      {
        title: '消息-1',
        key: 'message1',
        codeUrl: 'message/message1.js'
      },
      {
        title: '消息-2',
        key: 'message2',
        codeUrl: 'message/message2.js'
      }
    ]
  }
]

export default config;