// https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 打包配置
        'chore', // 依赖
        'ci', // 构建流水线
        'docs', // 文档
        'feat', // 特性、新功能
        'fix', // 修复
        'perf', // 性能优化
        'refactor', // 重构
        'revert', // 回退
        'style', // 代码格式化
        'test', // 测试
        'wip', // 开发中
        'ui', // 样式
      ],
    ],
  },
}
