'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [avgOrderValue, setAvgOrderValue] = useState(100);
  const [ordersPerHour, setOrdersPerHour] = useState(50);
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const costOfDowntime = avgOrderValue * ordersPerHour;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-gray-900 font-bold text-xl">Vigil</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
            <a href="https://vigil-waitlist.vercel.app" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-20 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your uptime monitor is <span className="text-blue-600">lying to you.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Traditional uptime monitoring only tells you if your server is online. Vigil shows you what's actually broken—failures your customers see.
            </p>
            <div className="flex gap-4">
              <a href="https://vigil-waitlist.vercel.app" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Get Started
              </a>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600 font-semibold">Dashboard Preview</p>
              <p className="text-sm text-gray-500 mt-2">(Coming soon)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Downtime Calculator */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Cost of Downtime Calculator</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Average Order Value</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Orders per Hour</label>
                <input
                  type="number"
                  value={ordersPerHour}
                  onChange={(e) => setOrdersPerHour(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <p className="text-gray-600 text-sm mb-2">1 hour of downtime costs:</p>
              <p className="text-5xl font-bold text-blue-600">${costOfDowntime.toLocaleString()}</p>
              <p className="text-gray-600 text-sm mt-2">Are you protecting this revenue?</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How Vigil Works</h2>
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {[
            { num: 1, title: 'Record', desc: 'Lightweight script captures user sessions' },
            { num: 2, title: 'Replay', desc: 'Replay critical flows (checkout, signup)' },
            { num: 3, title: 'Detect', desc: 'AI detects failures automatically' },
            { num: 4, title: 'Screenshot', desc: 'Capture what users actually saw' },
            { num: 5, title: 'Alert', desc: 'Get notified in Slack/Email instantly' },
          ].map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🕷️', title: 'Whole-Site Crawling', desc: 'Automatically crawl every page to catch broken links, missing content, and 404s' },
              { icon: '🎬', title: 'Transaction Replay', desc: 'Replay checkout & signup flows to detect failures before customers do' },
              { icon: '⚡', title: 'Instant Visual Alerts', desc: 'Get notified within seconds with screenshots showing exactly what broke' },
              { icon: '🔍', title: 'Session Replay', desc: 'See exactly what users experienced when something breaks' },
              { icon: '📊', title: 'Analytics', desc: 'Track failure frequency, impact, and trends over time' },
              { icon: '🔗', title: 'Integrations', desc: 'Slack, Email, Webhooks, PagerDuty, and more' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Failure Stories */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Real Failure Scenarios</h2>
        <div className="space-y-6">
          {[
            { title: 'E-commerce Checkout Broken', loss: '$500k/month', story: 'Payment processor integration fails silently. Customers see "Processing..." forever. You don\'t find out for 2 hours.' },
            { title: 'SaaS Dashboard 500 Error', loss: '$100k/month', story: 'New deploy causes internal server error. Enterprise users can\'t access accounts. Support buried in tickets.' },
            { title: 'Lead Gen Form Broken', loss: '$50k/month', story: 'Form validation errors prevent submissions. Leads disappear. You find out when sales asks why pipeline is empty.' },
          ].map((scenario, i) => (
            <div key={i} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{scenario.title}</h3>
                <span className="text-red-600 font-bold text-lg">{scenario.loss}</span>
              </div>
              <p className="text-gray-700">{scenario.story}</p>
              <p className="text-red-600 font-semibold mt-3">💔 Don't let this be you</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 mb-12">Billed annually = 2 months free</p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingPeriod === 'monthly' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingPeriod === 'annual' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Annual <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Save 2 mo</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Growth', price: billingPeriod === 'monthly' ? 50 : 600, features: ['5 Monitored Sites', '2 Users', 'Email Alerts', 'Basic Crawling', 'Email Support'] },
              { name: 'Business', price: billingPeriod === 'monthly' ? 150 : 1800, features: ['20 Monitored Sites', '5 Users', 'Slack/Email Alerts', 'Full Crawling', 'Transaction Replay', 'Phone Support'], highlight: true },
              { name: 'Pro', price: billingPeriod === 'monthly' ? 300 : 3600, features: ['Unlimited Sites', 'Unlimited Users', 'All Alerts', 'Priority Support', 'Custom Integrations', 'SLA Guarantee'] },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 border-2 transition ${
                  plan.highlight ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50' : 'border-gray-200 bg-white'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>
                <button className={`w-full py-3 font-semibold rounded-lg transition mb-6 ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-gray-300 text-gray-900 hover:border-blue-600'
                }`}>
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-gray-700 flex items-center gap-2">
                      <span className="text-blue-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'How is Vigil different from Pingdom/UptimeRobot?', a: 'Traditional uptime monitors only check if your server responds. Vigil actually visits your pages, runs your forms, and checks your transactions—seeing what users actually experience.' },
            { q: 'Do I need to modify my code?', a: 'No. Vigil installs with a single script tag. No code changes required. It works with any website.' },
            { q: 'Can I self-host Vigil?', a: 'Yes! Vigil is built on OpenReplay and can be self-hosted on your own servers. Enterprise plans available.' },
            { q: 'How fast are your alerts?', a: 'Most alerts fire within 5-30 seconds of detecting a failure, depending on your monitoring frequency.' },
            { q: 'What about privacy?', a: 'Vigil is GDPR and SOC2 compliant. Screenshots are blurred by default and stored securely.' },
            { q: 'When does Vigil launch?', a: 'We\'re targeting April 2026. Early waitlist members get lifetime 50% discount.' },
          ].map((item, i) => (
            <details key={i} className="group bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
              <summary className="font-semibold text-gray-900 flex items-center justify-between">
                {item.q}
                <span className="text-blue-600 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-700 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8">Built on trusted open-source technology</p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="text-center">
              <div className="text-3xl mb-2">🔓</div>
              <p className="text-sm text-gray-700 font-semibold">Open-Source</p>
              <p className="text-xs text-gray-600">Built on OpenReplay</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔐</div>
              <p className="text-sm text-gray-700 font-semibold">GDPR Compliant</p>
              <p className="text-xs text-gray-600">Privacy by default</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-sm text-gray-700 font-semibold">SOC2 Type II</p>
              <p className="text-xs text-gray-600">Enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stop losing money to silent failures</h2>
          <p className="text-xl text-blue-100 mb-8">Join 200+ companies protecting their revenue with Vigil</p>
          <a href="https://vigil-waitlist.vercel.app" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Join the Waitlist →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-white font-bold mb-2">Vigil</p>
              <p className="text-sm">Made with ❤️ on OpenReplay</p>
            </div>
            <div>
              <p className="text-white font-bold text-sm mb-4">Product</p>
              <a href="#" className="block text-sm hover:text-white transition mb-2">Features</a>
              <a href="#" className="block text-sm hover:text-white transition">Pricing</a>
            </div>
            <div>
              <p className="text-white font-bold text-sm mb-4">Legal</p>
              <a href="#" className="block text-sm hover:text-white transition mb-2">Privacy Policy</a>
              <a href="#" className="block text-sm hover:text-white transition">Terms of Service</a>
            </div>
            <div>
              <p className="text-white font-bold text-sm mb-4">Community</p>
              <a href="https://github.com" className="block text-sm hover:text-white transition mb-2">GitHub</a>
              <a href="https://twitter.com" className="block text-sm hover:text-white transition">Twitter</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © 2026 Vigil. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
