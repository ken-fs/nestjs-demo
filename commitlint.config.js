module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 自定义规则
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',     // 新功能
          'fix',      // 修复bug
          'docs',     // 文档修改
          'style',    // 代码格式修改，不影响代码运行
          'refactor', // 重构
          'perf',     // 性能优化
          'test',     // 测试相关
          'build',    // 构建系统或外部依赖项
          'ci',       // CI配置和脚本
          'chore',    // 其他不修改src或测试文件的更改
          'revert',   // 回滚之前的提交
          'wip',      // 进行中的工作
          'ui'        // UI更新
        ]
      ],
      'type-case': [2, 'always', 'lower-case'], // 类型必须小写
      'type-empty': [2, 'never'],               // 类型不能为空
      'subject-empty': [2, 'never'],            // 主题不能为空
      'subject-full-stop': [2, 'never', '.'],   // 主题不能以.结尾
      'header-max-length': [2, 'always', 72]    // 头部最大长度
    }
  }; 