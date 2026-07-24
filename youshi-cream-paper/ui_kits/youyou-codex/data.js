// Fake content for the 祐识 · 奶油宣纸 Codex UI kit. No real people / fan content.
window.YY_DATA = {
  model: { name: '祐 · 均衡', options: ['祐 · 轻盈', '祐 · 均衡', '祐 · 深思'] },
  nav: [
    { id: 'new', icon: 'square-pen', label: '新建任务' },
    { id: 'scheduled', icon: 'calendar', label: '已安排' },
    { id: 'skills', icon: 'package', label: '技能' },
    { id: 'sites', icon: 'grid', label: '站点' },
    { id: 'pr', icon: 'git-pull-request', label: '拉取请求' },
    { id: 'chat', icon: 'message', label: '聊天', badge: 3 },
  ],
  projects: [
    { id: 'p1', label: '奶油宣纸小站', open: true, children: [
      { id: 'p1a', label: '首页横幅设计' },
      { id: 'p1b', label: '手账组件库整理' },
      { id: 'p1c', label: '一起写代码打卡页' },
    ]},
    { id: 'p2', label: '公域内容整理' },
    { id: 'p3', label: '私域灵感库' },
  ],
  tasks: [
    { id: 't1', label: '做今日手账', done: true },
    { id: 't2', label: '学习一点新技能', done: false },
    { id: 't3', label: '拍一张氛围照片', done: false },
    { id: 't4', label: '写晚安日记', done: false },
  ],
  actions: [
    { id: 'a1', icon: 'code', title: '探索并理解代码', accent: 'sage', intent: '帮我读一遍这个项目，讲讲整体结构。' },
    { id: 'a2', icon: 'wrench', title: '构建新功能、应用或工具', accent: 'gold', intent: '我想做一个新的手账卡片组件。' },
    { id: 'a3', icon: 'clipboard-check', title: '审查代码并提出修改建议', accent: 'rose', intent: '帮我审查一下首页横幅的代码。' },
    { id: 'a4', icon: 'refresh', title: '修复问题和失败', accent: 'sage', intent: '页面在移动端会错位，帮我修一下。' },
  ],
  chat: [
    { from: 'assistant', text: '好呀～我先把「奶油宣纸小站」整体看了一遍：首页横幅、手账组件库、打卡页三块。当前只切到了浅色基础主题，正式注入还没接上，我们一步步来。' },
    { from: 'user', text: '重启后主题回来了吗？' },
    { from: 'assistant', text: '回来啦 ♡ 截图里的任务页背景、侧栏和输入框都是新主题的实时效果。剩下最后三项：正式版复验、横幅验收、生成打包。我继续做，完成前不会把「看起来恢复了」当成已交付。' },
    { from: 'user', text: '辛苦啦，那就继续～' },
  ],
  toolRuns: [
    { icon: 'refresh', label: '运行了多个命令' },
    { icon: 'image', label: '已查看 1 张图像' },
    { icon: 'code', label: '正在运行 ./scripts/apply-cream-skin.sh' },
  ],
  env: { name: '子智能体', status: '1 完成' },
  sources: [
    { id: 's1', label: 'cream-skin-f18600.patch' },
    { id: 's2', label: 'cream-skin-a0d528.patch' },
    { id: 's3', label: 'cream-skin-15c8f8.patch' },
  ],
  replies: [
    '收到～我先梳理一下步骤，再动手改，稳稳的。',
    '好的呀 ♡ 我这就去处理，完成后同步给你。',
    '明白啦，我先看看相关文件再回来。',
  ],
};
