import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* 导航栏 */}
      <nav className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gradient">Tailwind Demo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">功能</a>
              <a href="#components" className="text-gray-700 hover:text-primary-600 transition-colors">组件</a>
              <a href="#examples" className="text-gray-700 hover:text-primary-600 transition-colors">示例</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 英雄区域 */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            欢迎使用
            <span className="text-gradient block mt-2">Tailwind CSS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            使用现代化的CSS框架构建美观、响应式的用户界面。支持TypeScript和函数式编程。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              开始使用
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              查看文档
            </button>
          </div>
        </section>

        {/* 功能特性 */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">核心特性</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "实用优先",
                description: "使用功能类快速构建自定义设计，无需编写自定义CSS。"
              },
              {
                icon: "📱",
                title: "响应式设计",
                description: "内置响应式断点，轻松创建移动端友好的界面。"
              },
              {
                icon: "⚡",
                title: "高性能",
                description: "只生成你使用的CSS，确保最小的包体积。"
              }
            ].map((feature, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 组件展示 */}
        <section id="components" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">组件库</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 按钮组件 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">按钮</h4>
              <div className="space-y-2">
                <button className="btn-primary w-full">主要按钮</button>
                <button className="btn-secondary w-full">次要按钮</button>
              </div>
            </div>

            {/* 徽章组件 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">徽章</h4>
              <div className="space-y-2">
                <span className="badge badge-primary">主要</span>
                <span className="badge badge-success">成功</span>
                <span className="badge badge-warning">警告</span>
                <span className="badge badge-error">错误</span>
              </div>
            </div>

            {/* 输入框组件 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">输入框</h4>
              <input 
                type="text" 
                placeholder="输入内容..." 
                className="input-field"
              />
            </div>

            {/* 卡片组件 */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">卡片</h4>
              <div className="card p-4">
                <p className="text-sm text-gray-600">这是一个示例卡片</p>
              </div>
            </div>
          </div>
        </section>

        {/* 示例展示 */}
        <section id="examples" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">动画示例</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card animate-fade-in">
              <h3 className="text-lg font-semibold mb-2">淡入动画</h3>
              <p className="text-gray-600">使用 animate-fade-in 类</p>
            </div>
            <div className="card animate-slide-up">
              <h3 className="text-lg font-semibold mb-2">滑入动画</h3>
              <p className="text-gray-600">使用 animate-slide-up 类</p>
            </div>
            <div className="card animate-scale-in">
              <h3 className="text-lg font-semibold mb-2">缩放动画</h3>
              <p className="text-gray-600">使用 animate-scale-in 类</p>
            </div>
          </div>
        </section>

        {/* 颜色展示 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">颜色系统</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`w-16 h-16 mx-auto rounded-lg mb-2 bg-primary-${shade}`}
                ></div>
                <span className="text-sm text-gray-600">{shade}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Tailwind CSS Demo. 使用 Next.js + TypeScript + Tailwind CSS 构建。
          </p>
        </div>
      </footer>
    </div>
  );
}
