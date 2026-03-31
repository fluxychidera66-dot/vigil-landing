'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const plans = [
    {
      name: 'Growth',
      monthly: 50,
      annual: 600,
      features: ['Up to 10 sites', 'Hourly crawls', '7-day retention', 'Email alerts']
    },
    {
      name: 'Business',
      monthly: 150,
      annual: 1800,
      features: ['Up to 50 sites', 'Hourly crawls', '30-day retention', 'Slack + Email alerts', 'Transaction replay']
    },
    {
      name: 'Pro',
      monthly: 300,
      annual: 3600,
      features: ['Unlimited sites', 'Real-time crawls', '90-day retention', 'Custom webhooks', 'Priority support']
    }
  ];

  const flowSteps = [
    { num: 1, title: 'Record', desc: 'Vigil records user sessions on your site' },
    { num: 2, title: 'Replay', desc: 'Every hour, transactions are replayed' },
    { num: 3, title: 'Detect', desc: 'Failures are identified instantly' },
    { num: 4, title: 'Screenshot', desc: 'Blurred screenshots show what went wrong' },
    { num: 5, title: 'Alert', desc: 'You get notified via Slack/email/webhook' }
  ];

  const faqs = [
    {
      q: 'What makes Vigil different from Pingdom or UptimeRobot?',
      a: 'Traditional uptime monitors only check if your server is responding. Vigil goes deeper—it replays actual user transactions (checkouts, signups, searches) to catch failures that don\'t show up as server downtime. You get transaction-level visibility.'
    },
    {
      q: 'How long does it take to install?',
      a: 'Just copy and paste a script tag into your HTML. No backend changes required. Works with any tech stack. Installation takes less than 2 minutes.'
    },
    {
      q: 'Can I self-host Vigil?',
      a: 'Yes. Vigil is built on OpenReplay, which is open-source. Enterprise self-hosting is available for Pro tier customers.'
    },
    {
      q: 'Is my data GDPR compliant?',
      a: 'Yes. All data is encrypted in transit and at rest. We comply with GDPR, SOC 2, and other enterprise standards. Session recordings are stored securely in your Supabase database.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Vigil</h1>
          <a href="/waitlist" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Join Waitlist</a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Your uptime monitor is lying to you.</h1>
              <p className="text-xl text-gray-600 mb-8">Pingdom says your site is up. But your checkout is broken. Your API times out. Your search is down.</p>
              <p className="text-lg text-gray-600 mb-8">Vigil catches what traditional monitors miss: transaction-level failures that cost you real revenue.</p>
              <div className="flex gap-4">
                <a href="/waitlist" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-bold">Join Early Access</a>
                <a href="#features" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-bold">Learn More</a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="animate-pulse text-center">
                <p className="text-gray-600 font-mono">Dashboard Demo</p>
                <p className="text-gray-500 text-sm mt-2">(launches April 2026)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What's One Hour of Downtime Worth?</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold mb-2">Average Order Value</label>
                <div className="flex items-center gap-2">
                  <span>$</span>
                  <input type="number" defaultValue="100" min="1" max="10000" 
                         className="flex-1 border border-gray-300 px-3 py-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Orders Per Hour</label>
                <input type="number" defaultValue="20" min="1" max="1000" 
                       className="w-full border border-gray-300 px-3 py-2 rounded" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-6 text-center">
              <p className="text-sm mb-1">Cost of 1 Hour Downtime</p>
              <p className="text-4xl font-bold">$2,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Vigil Works</h2>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {flowSteps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">{step.num}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center text-2xl text-gray-300 mb-8 hidden md:flex">
            <span>→</span> <span>→</span> <span>→</span> <span>→</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Vigil Catches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '🛒', title: 'Broken Checkouts', desc: 'Detect when payment processing fails or form submission breaks' },
              { icon: '🔍', title: 'Failed Searches', desc: 'Know instantly when search indexing or API queries fail' },
              { icon: '📊', title: 'API Timeouts', desc: 'Monitor third-party integrations and detect rate limit issues' },
              { icon: '⏱️', title: 'Slow Transactions', desc: 'Catch when critical flows exceed acceptable speed thresholds' },
              { icon: '🔐', title: 'Auth Failures', desc: 'Monitor login, signup, and password reset flows' },
              { icon: '📱', title: 'Cross-Device Issues', desc: 'Test mobile, tablet, and desktop experiences separately' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <div className="flex justify-center gap-4">
              <button onClick={() => setBillingCycle('monthly')} 
                      className={`px-6 py-2 rounded-lg font-bold ${billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                Monthly
              </button>
              <button onClick={() => setBillingCycle('annual')}
                      className={`px-6 py-2 rounded-lg font-bold ${billingCycle === 'annual' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                Annual (Save 2 months!)
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-lg p-8 transition ${i === 1 ? 'ring-2 ring-blue-600 shadow-lg' : 'border border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  ${billingCycle === 'monthly' ? plan.monthly : Math.floor(plan.annual / 12)}<span className="text-lg text-gray-600">/mo</span>
                </div>
                <button className={`w-full py-3 rounded-lg font-bold mb-6 transition ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions?</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                        className="w-full text-left p-4 font-bold hover:bg-gray-50 flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-400">{expandedFaq === i ? '−' : '+'}</span>
                </button>
                {expandedFaq === i && (
                  <div className="p-4 border-t border-gray-100 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Credibility */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Enterprise-Grade</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">🔓</div>
              <h3 className="font-bold mb-2">Built on OpenReplay</h3>
              <p className="text-gray-600 text-sm">Open-source Session Replay. Transparent, auditable code.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">GDPR & SOC 2</h3>
              <p className="text-gray-600 text-sm">Enterprise compliance and data security standards met.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Self-Hostable</h3>
              <p className="text-gray-600 text-sm">Deploy Vigil on your own infrastructure for maximum control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Stop Guessing. Start Knowing.</h2>
          <p className="text-xl mb-8 text-blue-50">Get alerted the moment a transaction fails, not when customers complain.</p>
          <a href="/waitlist" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-bold text-lg">
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-gray-300">
        <div className="max-w-5xl mx-auto text-center space-y-4 text-sm">
          <p>Made with ❤️ on OpenReplay</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/fluxychidera66-dot/vigil-app" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
          <p>© 2026 Vigil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
