/* ============================================================
   NEXUS 360 — Customer Intelligence Platform
   Application Logic
   ============================================================ */

'use strict';

// ── Data ─────────────────────────────────────────────────────
const CUSTOMERS = [
  {
    id: 'rajesh-sharma',
    name: 'Rajesh Sharma',
    initials: 'RS',
    gradient: 'linear-gradient(135deg,#6366f1,#a855f7)',
    segment: 'Premium',
    products: ['Term Life', 'Motor'],
    policy: 'TL-2891',
    city: 'Mumbai',
    churnRisk: 92,
    churnLevel: 'high',
    ltv: '₹8.4L',
    sentiment: 'negative',
    sentimentScore: 34,
    tenure: '6 years',
    lastContact: '12 Sep 2026',
    email: 'rajesh.sharma@email.com',
    phone: '+91 98765 43210',
    nextAction: 'Offer Loyalty Top-Up Plan',
    confidence: 94,
    transcriptSummary: 'Customer expressed frustration about claim delay in 3 out of last 4 calls. Mentioned competitor offers twice. High risk of lapse at renewal.',
    timeline: [
      { type: 'danger', date: '28 Sep 2026', title: 'Claim Rejection Complaint', body: 'Called regarding rejected motor claim. Sentiment score: 18/100. Escalated to L2.' },
      { type: 'warn', date: '15 Sep 2026', title: 'Renewal Reminder Sent', body: 'Auto-email sent for TL-2891 renewal due Nov 2026. No response yet.' },
      { type: 'active', date: '01 Sep 2026', title: 'NBA: Loyalty Offer Generated', body: 'Cortex AI recommended premium loyalty top-up plan. Confidence: 94%.' },
      { type: 'success', date: '20 Aug 2026', title: 'Policy Upgraded (Motor)', body: 'Upgraded from third-party to comprehensive. Premium: ₹18,400.' },
    ],
    tags: ['#retention-priority', '#claim-issue', '#renewal-due'],
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    initials: 'PN',
    gradient: 'linear-gradient(135deg,#06b6d4,#6366f1)',
    segment: 'Growth',
    products: ['Home Loan', 'Term Life'],
    policy: 'HL-5540',
    city: 'Bangalore',
    churnRisk: 87,
    churnLevel: 'high',
    ltv: '₹5.1L',
    sentiment: 'negative',
    sentimentScore: 42,
    tenure: '3 years',
    lastContact: '25 Sep 2026',
    email: 'priya.nair@email.com',
    phone: '+91 87654 32109',
    nextAction: 'Proactive Retention Call — EMI Restructure Offer',
    confidence: 91,
    transcriptSummary: 'Customer has delayed EMI 2 months in a row. Cited job transition as reason. Responded positively to previous agent call. EMI restructure likely to retain.',
    timeline: [
      { type: 'danger', date: '25 Sep 2026', title: 'EMI Missed — 2nd Month', body: 'Second consecutive missed EMI on HL-5540. Auto-alert triggered.' },
      { type: 'warn', date: '24 Aug 2026', title: 'EMI Missed — 1st Month', body: 'First EMI miss logged. Outbound call scheduled.' },
      { type: 'success', date: '10 Aug 2026', title: 'Retention Call — Positive Outcome', body: 'Agent call resulted in customer commitment. Sentiment improved to 65.' },
      { type: 'active', date: '01 Jul 2026', title: 'Term Life Cross-Sell Success', body: 'Successfully cross-sold term life ₹75L cover. Premium ₹12,800/yr.' },
    ],
    tags: ['#emi-at-risk', '#job-transition', '#cross-sell-opportunity'],
  },
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    initials: 'AM',
    gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    segment: 'Premium',
    products: ['Motor', 'Health', 'Term'],
    policy: 'MT-3301',
    city: 'Delhi',
    churnRisk: 76,
    churnLevel: 'medium',
    ltv: '₹11.2L',
    sentiment: 'neutral',
    sentimentScore: 55,
    tenure: '9 years',
    lastContact: '20 Sep 2026',
    email: 'arjun.mehta@email.com',
    phone: '+91 76543 21098',
    nextAction: 'Expedite Claim + Offer VIP Service Bundle',
    confidence: 88,
    transcriptSummary: 'Long-tenure customer. Complaint filed about slow health claim processing. 9-year relationship at risk. VIP treatment and expedited claim resolution recommended.',
    timeline: [
      { type: 'warn', date: '20 Sep 2026', title: 'Health Claim Pending — 45 days', body: 'Claim #HC-8821 still processing. Customer called twice to follow up.' },
      { type: 'danger', date: '08 Sep 2026', title: 'Formal Complaint Lodged', body: 'Written complaint submitted via email. Escalated to claims manager.' },
      { type: 'success', date: '15 Aug 2026', title: 'Motor Policy Renewed', body: 'Renewed comprehensive motor plan. No issues. Positive interaction.' },
      { type: 'active', date: '01 Jun 2026', title: 'NBA: VIP Bundle Identified', body: 'Cortex NBA identified bundled VIP tier upgrade as retention play.' },
    ],
    tags: ['#long-tenure', '#claim-delay', '#vip-candidate'],
  },
  {
    id: 'sneha-kulkarni',
    name: 'Sneha Kulkarni',
    initials: 'SK',
    gradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
    segment: 'Growth',
    products: ['ULIP', 'Health'],
    policy: 'UP-1122',
    city: 'Pune',
    churnRisk: 71,
    churnLevel: 'medium',
    ltv: '₹3.8L',
    sentiment: 'neutral',
    sentimentScore: 49,
    tenure: '2 years',
    lastContact: '18 Sep 2026',
    email: 'sneha.kulkarni@email.com',
    phone: '+91 65432 10987',
    nextAction: 'Fund Switch Advisory + Loyalty Bonus Communication',
    confidence: 82,
    transcriptSummary: 'ULIP performance underperforming benchmark. Customer asked about exit options in last call. Fund switch to better-performing fund + loyalty bonus could retain.',
    timeline: [
      { type: 'warn', date: '18 Sep 2026', title: 'NAV Inquiry Call', body: 'Customer asked about ULIP NAV performance and exit options.' },
      { type: 'active', date: '05 Sep 2026', title: 'NBA: Fund Switch Recommended', body: 'Cortex identified better-performing fund. Advisory scheduled.' },
      { type: 'success', date: '20 Jul 2026', title: 'Health Policy Renewal — Smooth', body: 'Health plan renewed without issues. Positive experience.' },
    ],
    tags: ['#ulip-underperform', '#advisory-needed', '#loyalty-bonus'],
  },
  {
    id: 'vikram-desai',
    name: 'Vikram Desai',
    initials: 'VD',
    gradient: 'linear-gradient(135deg,#a855f7,#6366f1)',
    segment: 'Premium',
    products: ['Term Life', 'Motor', 'Health', 'ULIP'],
    policy: 'TL-1001',
    city: 'Ahmedabad',
    churnRisk: 18,
    churnLevel: 'low',
    ltv: '₹18.6L',
    sentiment: 'positive',
    sentimentScore: 88,
    tenure: '12 years',
    lastContact: '30 Sep 2026',
    email: 'vikram.desai@email.com',
    phone: '+91 54321 09876',
    nextAction: 'Refer-a-Friend Program + Wealth Advisory Upsell',
    confidence: 96,
    transcriptSummary: 'Highly satisfied long-tenure customer. NPS score 9/10. Runs SME, potential corporate policy opportunity. Referral program ideal next action.',
    timeline: [
      { type: 'success', date: '30 Sep 2026', title: 'Annual Review Call — NPS 9', body: 'Excellent annual review. Customer expressed high satisfaction. NPS: 9.' },
      { type: 'active', date: '15 Sep 2026', title: 'NBA: Referral + Wealth Upsell', body: 'Cortex identified referral + wealth management advisory opportunity.' },
      { type: 'success', date: '01 Aug 2026', title: 'All 4 Policies Renewed', body: 'Smooth multi-policy renewal. Total annual premium: ₹3.2L.' },
    ],
    tags: ['#ambassador', '#wealth-upsell', '#referral-candidate'],
  },
];

const NBA_ACTIONS = [
  { icon: '🎯', customer: 'Rajesh Sharma', action: 'Offer Loyalty Top-Up Plan', category: 'Upsell', confidence: 94, urgency: 'high', impact: '₹42,000/yr', reason: 'High churn risk + 6yr tenure + renewal due Nov 2026', tagClass: 'tag-indigo' },
  { icon: '📞', customer: 'Priya Nair', action: 'Proactive Retention Call — EMI Restructure', category: 'Retain', confidence: 91, urgency: 'high', impact: '₹28,500/yr', reason: '2 consecutive EMI misses + job transition signal', tagClass: 'tag-rose' },
  { icon: '📋', customer: 'Arjun Mehta', action: 'Expedite Claim + VIP Bundle Offer', category: 'Service', confidence: 88, urgency: 'high', impact: '₹1.12L/yr', reason: '9yr tenure + claim pending 45 days + complaint filed', tagClass: 'tag-amber' },
  { icon: '💡', customer: 'Sneha Kulkarni', action: 'Fund Switch Advisory + Loyalty Bonus', category: 'Retain', confidence: 82, urgency: 'medium', impact: '₹38,000/yr', reason: 'ULIP underperformance + exit intent signal in transcript', tagClass: 'tag-cyan' },
  { icon: '🤝', customer: 'Vikram Desai', action: 'Refer-a-Friend + Wealth Advisory', category: 'Upsell', confidence: 96, urgency: 'low', impact: '₹3.2L+/yr', reason: 'NPS 9 + SME owner + 12yr tenure = referral champion', tagClass: 'tag-emerald' },
  { icon: '📊', customer: 'Meera Iyer', action: 'Portfolio Rebalancing Advisory', category: 'Cross-Sell', confidence: 79, urgency: 'medium', impact: '₹55,000/yr', reason: 'Single product + high income bracket + investment capacity', tagClass: 'tag-indigo' },
  { icon: '🔔', customer: 'Rohit Gupta', action: 'Auto Renewal Opt-In Campaign', category: 'Retain', confidence: 85, urgency: 'medium', impact: '₹22,000/yr', reason: 'Policy expires in 45 days + digital engagement dropped 60%', tagClass: 'tag-amber' },
];

const CHAT_INITIAL = [
  {
    role: 'ai',
    text: 'Hi! I\'m your Nexus 360 AI Copilot, powered by Snowflake Cortex Analyst. I have real-time access to your customer data, call transcripts, policy records, and NBA engine.\n\nAsk me anything — from individual customer insights to portfolio-wide trends.',
    time: 'Just now',
  },
  {
    role: 'ai',
    text: '📊 Quick snapshot: You have <strong>2,847 high-churn customers</strong> requiring action today, with <strong>₹24.8Cr</strong> of annual premium at risk. <strong>9,134 NBA actions</strong> are pending across your portfolio.',
    time: 'Just now',
    isHtml: true,
  },
];

const AI_RESPONSES = {
  churn: {
    text: '🔍 <strong>Top 5 Churn Risk Customers (This Week)</strong><br/><br/>1. <strong>Rajesh Sharma</strong> — 92% risk · 3 missed calls · Renewal due Nov 2026<br/>2. <strong>Priya Nair</strong> — 87% risk · 2 EMI misses · Job transition signal<br/>3. <strong>Arjun Mehta</strong> — 76% risk · Claim pending 45d · Complaint filed<br/>4. <strong>Sneha Kulkarni</strong> — 71% risk · ULIP underperform · Exit intent<br/>5. <strong>Rohit Gupta</strong> — 68% risk · Policy lapse in 45d<br/><br/><em>Source: Cortex ML churn model · 91.2% confidence · Updated 30 min ago</em>',
    isHtml: true,
  },
  upsell: {
    text: '💎 <strong>Premium Segment Upsell Opportunities</strong><br/><br/>Found <strong>3,654 upsell-ready customers</strong> in the premium segment:<br/><br/>• <strong>Wealth Advisory Add-on</strong>: 1,240 customers · Avg. uplift ₹28K<br/>• <strong>Critical Illness Rider</strong>: 980 customers · Avg. uplift ₹12K<br/>• <strong>Top-Up Sum Assured</strong>: 850 customers · Avg. uplift ₹18K<br/>• <strong>ULIP Switch + Top-up</strong>: 584 customers · Avg. uplift ₹35K<br/><br/>Estimated total revenue opportunity: <strong>₹8.4Cr</strong><br/><br/><em>Recommendation confidence: 87-96% · Generated by Cortex NBA model</em>',
    isHtml: true,
  },
  sentiment: {
    text: '📉 <strong>Sentiment Trend — Home Loan Portfolio</strong><br/><br/>Sentiment has <strong>declined from 74 → 61</strong> this week across 1,240 call transcripts.<br/><br/>Key drivers identified by Cortex Document Parse:<br/>• <strong>EMI pressure</strong> — mentioned in 42% of negative calls<br/>• <strong>Processing delays</strong> — 28% of calls<br/>• <strong>Rate increase concerns</strong> — 19% of calls<br/><br/>Recommended action: <strong>Proactive outbound call campaign</strong> with EMI restructure offer for at-risk customers.<br/><br/><em>Analyzed via CoCo CLI parse-docs · 1,240 transcripts · 95% accuracy</em>',
    isHtml: true,
  },
  rajesh: {
    text: '👤 <strong>Rajesh Sharma — Last 5 Interactions</strong><br/><br/><strong>1. 28 Sep 2026</strong> — Inbound Call (8m 42s)<br/>   Complaint about rejected motor claim. Tone: Very Frustrated. Sentiment: 18/100<br/><br/><strong>2. 15 Sep 2026</strong> — Outbound SMS<br/>   Renewal reminder for TL-2891. No response.<br/><br/><strong>3. 01 Sep 2026</strong> — AI Action Generated<br/>   Cortex NBA recommended loyalty top-up plan. Confidence: 94%<br/><br/><strong>4. 20 Aug 2026</strong> — Policy Upgrade<br/>   Motor upgraded to comprehensive. Positive experience.<br/><br/><strong>5. 10 Aug 2026</strong> — Email<br/>   Complaint about premium increase. Requested callback.<br/><br/>⚠️ <strong>Risk Assessment</strong>: High churn probability. Recommend immediate retention call with loyalty offer.',
    isHtml: true,
  },
  nba_conversion: {
    text: '⚡ <strong>Highest NBA Conversion Probability Actions</strong><br/><br/>Based on historical outcomes + Cortex ML scoring:<br/><br/>1. <strong>Referral + Wealth Advisory</strong> — 96% confidence · Vikram Desai · Low urgency<br/>2. <strong>Loyalty Top-Up Offer</strong> — 94% confidence · Rajesh Sharma · High urgency<br/>3. <strong>Retention Call — EMI</strong> — 91% confidence · Priya Nair · High urgency<br/>4. <strong>Auto Renewal Campaign</strong> — 85% confidence · Rohit Gupta · Medium<br/>5. <strong>Expedite + VIP Bundle</strong> — 88% confidence · Arjun Mehta · High<br/><br/>🎯 Prioritizing high-urgency + high-confidence actions yields estimated <strong>37.5% conversion rate</strong>.<br/><em>Source: Cortex ML NBA model v2.1</em>',
    isHtml: true,
  },
  negative_sentiment: {
    text: '😟 <strong>Negative Sentiment Customers — Last 30 Days</strong><br/><br/>Found <strong>847 customers</strong> with sentiment score below 40:<br/><br/>• <strong>Home Loan</strong>: 312 customers (avg. score: 31)<br/>• <strong>Motor Claims</strong>: 224 customers (avg. score: 28)<br/>• <strong>ULIP Performance</strong>: 189 customers (avg. score: 35)<br/>• <strong>Service Delays</strong>: 122 customers (avg. score: 29)<br/><br/>Top keywords extracted: "frustrated", "disappointed", "competitor", "cancel", "slow"<br/><br/>✅ <strong>48 customers</strong> have already been called back. <strong>799 require action.</strong><br/><em>Analyzed by CoCo CLI Cortex Sentiment · 340K transcripts indexed</em>',
    isHtml: true,
  },
  retention_offer: {
    text: '📝 <strong>Generated Retention Offer — Premium Auto Policy Holders</strong><br/><br/>Target: <strong>1,840 premium auto policy holders</strong> with churn risk above 60%<br/><br/><strong>Offer Package (AI-Generated):</strong><br/>• Zero-depreciation upgrade at 0% additional cost for 1 year<br/>• Priority claim settlement guarantee (48h turnaround)<br/>• Roadside assistance add-on (value: ₹3,500)<br/>• Loyalty reward: 10% NCB bonus on next renewal<br/><br/>Estimated offer acceptance rate: <strong>62-71%</strong><br/>Revenue retained if accepted: <strong>₹6.8Cr</strong><br/>Cost of offer: <strong>₹1.2Cr</strong><br/>Net ROI: <strong>5.7x</strong><br/><br/><em>Generated by Snowflake Cortex COMPLETE via CoCo CLI · Offer expires 30 Oct 2026</em>',
    isHtml: true,
  },
  lapse: {
    text: '📊 <strong>Top Policy Lapse Reasons — Q3 2026</strong><br/><br/>From 2,140 lapsed policies analyzed via Cortex Document Parse:<br/><br/>1. <strong>Premium affordability</strong> — 34% · Avg. income drop signal in transactions<br/>2. <strong>Service dissatisfaction</strong> — 22% · Claims delayed > 30 days<br/>3. <strong>Competitor switching</strong> — 19% · Mentioned in transcripts<br/>4. <strong>Lifestyle change</strong> — 14% · Job loss, relocation, divorce signals<br/>5. <strong>Lack of awareness</strong> — 11% · Never engaged with app or portal<br/><br/>💡 <strong>CoCo Recommendation</strong>: Address reasons 1 + 2 with bundled EMI relief + fast-track claim SLA to retain 61% of at-risk pool.<br/><em>Source: 340K transcripts + 18M transaction records · Snowflake Cortex</em>',
    isHtml: true,
  },
  default: {
    text: '🤔 I\'m processing your query against the Snowflake semantic layer...\n\nI can answer questions about:\n• Customer churn risk and sentiment analysis\n• Next best action recommendations  \n• Portfolio performance metrics\n• Individual customer 360 views\n• Policy and claims analytics\n\nTry one of the suggested queries on the right, or rephrase your question.',
    isHtml: false,
  },
};

// ── State ─────────────────────────────────────────────────────
let activeSection = 'dashboard';
let activeCustomer = CUSTOMERS[0];
let chatHistory = [...CHAT_INITIAL];

// ── Navigation ────────────────────────────────────────────────
function navigate(section) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('section-' + section);
  if (el) el.classList.add('active');
  const nav = document.getElementById('nav-' + section);
  if (nav) nav.classList.add('active');
  activeSection = section;

  const titles = {
    dashboard: 'Overview <span class="topbar-sub">/ Dashboard</span>',
    c360: 'Customer 360 <span class="topbar-sub">/ Intelligence</span>',
    nba: 'Next Best Action <span class="topbar-sub">/ Engine</span>',
    copilot: 'AI Copilot <span class="topbar-sub">/ Cortex Analyst</span>',
    segments: 'Segments <span class="topbar-sub">/ Analysis</span>',
    alerts: 'Smart Alerts <span class="topbar-sub">/ Real-time</span>',
  };
  document.getElementById('topbar-title').innerHTML = titles[section] || section;
  window.scrollTo(0, 0);
}

// ── Customer 360 ──────────────────────────────────────────────
function renderCustomerList(filter = '') {
  const list = document.getElementById('customer-list');
  if (!list) return;
  const filtered = filter
    ? CUSTOMERS.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()) || c.city.toLowerCase().includes(filter.toLowerCase()))
    : CUSTOMERS;

  list.innerHTML = filtered.map(c => `
    <div class="customer-row" onclick="selectCustomer('${c.id}')">
      <div class="c-avatar" style="background:${c.gradient}">${c.initials}</div>
      <div style="flex:1">
        <div class="c-name">${c.name}</div>
        <div class="c-detail">${c.products.join(' · ')} · ${c.city}</div>
      </div>
      <div style="text-align:right">
        <div class="tag ${c.churnLevel === 'high' ? 'tag-rose' : c.churnLevel === 'medium' ? 'tag-amber' : 'tag-emerald'}">${c.churnRisk}% Risk</div>
        <div class="text-xs color-muted mt-4">${c.segment}</div>
      </div>
    </div>
  `).join('');
}

function filterCustomers(val) { renderCustomerList(val); }

function selectCustomer(id) {
  activeCustomer = CUSTOMERS.find(c => c.id === id) || CUSTOMERS[0];
  renderCustomerDetail();
  document.querySelectorAll('.customer-row').forEach(r => r.style.background = '');
}

function openCustomer(id) {
  navigate('c360');
  setTimeout(() => selectCustomer(id), 100);
}

function renderCustomerDetail() {
  const c = activeCustomer;
  const el = document.getElementById('customer-detail');
  if (!el) return;

  const sentClass = c.sentiment === 'positive' ? 'positive' : c.sentiment === 'negative' ? 'negative' : 'neutral';
  const sentLabel = c.sentiment === 'positive' ? 'Positive' : c.sentiment === 'negative' ? 'Negative' : 'Neutral';
  const ringClass = c.churnLevel === 'high' ? 'ring-high' : c.churnLevel === 'medium' ? 'ring-medium' : 'ring-low';

  el.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:16px">
      <!-- Profile Header -->
      <div class="card">
        <div class="card-body">
          <div class="flex gap-16 items-center mb-16">
            <div class="c-avatar" style="background:${c.gradient};width:56px;height:56px;font-size:20px;flex-shrink:0">${c.initials}</div>
            <div style="flex:1">
              <div style="font-size:20px;font-weight:800;letter-spacing:-0.5px">${c.name}</div>
              <div class="text-sm color-secondary mt-4">${c.email} · ${c.phone}</div>
              <div class="flex gap-8 mt-8" style="flex-wrap:wrap">
                <span class="tag tag-muted">${c.city}</span>
                <span class="tag tag-indigo">${c.segment}</span>
                <span class="tag tag-muted">${c.tenure} tenure</span>
                ${c.tags.map(t => `<span class="tag tag-muted">${t}</span>`).join('')}
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div class="score-ring ${ringClass}" style="--pct:${c.churnRisk}">
                <div class="score-ring-val">${c.churnRisk}</div>
              </div>
              <div class="text-xs color-muted mt-8">Churn Risk</div>
            </div>
          </div>

          <div class="grid-3">
            <div style="text-align:center;padding:12px;background:var(--bg-surface);border-radius:var(--radius-md);border:1px solid var(--border-subtle)">
              <div style="font-size:16px;font-weight:800">${c.ltv}</div>
              <div class="text-xs color-muted mt-4">Lifetime Value</div>
            </div>
            <div style="text-align:center;padding:12px;background:var(--bg-surface);border-radius:var(--radius-md);border:1px solid var(--border-subtle)">
              <div class="sentiment-pill ${sentClass}" style="justify-content:center"><span class="sentiment-dot"></span>${sentLabel}</div>
              <div class="text-xs color-muted mt-4">Sentiment · ${c.sentimentScore}/100</div>
            </div>
            <div style="text-align:center;padding:12px;background:var(--bg-surface);border-radius:var(--radius-md);border:1px solid var(--border-subtle)">
              <div style="font-size:16px;font-weight:800">${c.products.length}</div>
              <div class="text-xs color-muted mt-4">Active Products</div>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Summary -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">&#10022; Cortex AI Summary</div>
          <span class="powered-badge">&#10052;&#65039; CoCo Transcript Analysis</span>
        </div>
        <div class="card-body">
          <div style="font-size:13.5px;color:var(--text-secondary);line-height:1.7;background:var(--indigo-dim);border:1px solid rgba(99,102,241,0.2);border-radius:var(--radius-md);padding:14px">
            ${c.transcriptSummary}
          </div>
        </div>
      </div>

      <!-- Next Best Action -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">&#9889; Recommended Next Best Action</div>
          <span class="tag tag-emerald">${c.confidence}% confidence</span>
        </div>
        <div class="card-body">
          <div class="nba-card nba-high" style="margin-bottom:0">
            <div class="flex items-center gap-12">
              <div class="nba-score high" style="font-size:20px">&#127919;</div>
              <div style="flex:1">
                <div class="fw-700" style="font-size:14px">${c.nextAction}</div>
                <div class="text-sm color-secondary mt-4">Cortex Recommendation · Confidence: ${c.confidence}%</div>
              </div>
            </div>
          </div>
          <button class="btn btn-primary w-full mt-12" style="justify-content:center" onclick="showToast('Action assigned to relationship manager','success')">
            &#9889; Assign Action Now
          </button>
        </div>
      </div>

      <!-- Timeline -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">&#128337; Interaction Timeline</div>
          <div class="card-subtitle">Structured + unstructured touchpoints</div>
        </div>
        <div class="card-body">
          <div class="timeline">
            ${c.timeline.map(t => `
              <div class="timeline-item">
                <div class="timeline-dot ${t.type}"></div>
                <div class="timeline-meta">${t.date}</div>
                <div class="timeline-title">${t.title}</div>
                <div class="timeline-body">${t.body}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── NBA Queue ─────────────────────────────────────────────────
function renderNBAQueue() {
  const el = document.getElementById('nba-queue');
  if (!el) return;
  el.innerHTML = NBA_ACTIONS.map((a, i) => `
    <div class="nba-card nba-${a.urgency}" onclick="showToast('Action logged for ${a.customer}','success')">
      <div class="flex items-center gap-12">
        <div class="nba-score ${a.urgency}" style="font-size:20px">${a.icon}</div>
        <div style="flex:1">
          <div class="fw-700" style="font-size:13.5px">${a.action}</div>
          <div class="text-sm color-secondary mt-4">${a.customer} · ${a.reason}</div>
          <div class="flex gap-8 mt-8" style="flex-wrap:wrap">
            <span class="tag ${a.tagClass}">${a.category}</span>
            <span class="tag tag-muted">${a.confidence}% confidence</span>
            <span class="tag tag-muted">Impact: ${a.impact}</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();showToast('Assigned to agent for ${a.customer}','success')">Assign</button>
          <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation()">Skip</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Dashboard Quick Lists ─────────────────────────────────────
function renderDashboardLists() {
  const churnEl = document.getElementById('churn-list');
  if (churnEl) {
    const atRisk = CUSTOMERS.filter(c => c.churnRisk >= 70).slice(0, 4);
    churnEl.innerHTML = atRisk.map(c => `
      <div class="customer-row" onclick="openCustomer('${c.id}')">
        <div class="c-avatar" style="background:${c.gradient}">${c.initials}</div>
        <div style="flex:1">
          <div class="c-name">${c.name}</div>
          <div class="c-detail">${c.products[0]} · ${c.policy} · ${c.city}</div>
        </div>
        <div style="text-align:right">
          <div class="tag ${c.churnLevel === 'high' ? 'tag-rose' : 'tag-amber'}">${c.churnRisk}% Risk</div>
          <div class="text-xs color-muted mt-4">Sentiment: ${c.sentiment}</div>
        </div>
      </div>
    `).join('');
  }

  const nbaEl = document.getElementById('recent-nba');
  if (nbaEl) {
    nbaEl.innerHTML = NBA_ACTIONS.slice(0, 3).map(a => `
      <div class="nba-card nba-${a.urgency}" onclick="navigate('nba')">
        <div class="flex items-center gap-12">
          <div class="nba-score ${a.urgency}" style="font-size:18px">${a.icon}</div>
          <div style="flex:1">
            <div class="fw-600" style="font-size:13px">${a.action}</div>
            <div class="text-sm color-secondary mt-4">${a.customer} · Confidence ${a.confidence}%</div>
          </div>
          <span class="tag ${a.tagClass}">${a.category}</span>
        </div>
      </div>
    `).join('');
  }
}

// ── Chat / Copilot ────────────────────────────────────────────
function renderChat() {
  const el = document.getElementById('chat-messages');
  if (!el) return;
  el.innerHTML = chatHistory.map(m => `
    <div class="chat-msg ${m.role === 'user' ? 'user' : ''}">
      <div class="chat-msg-avatar ${m.role === 'ai' ? 'ai' : 'user'}">${m.role === 'ai' ? '✦' : 'AK'}</div>
      <div>
        <div class="chat-bubble ${m.role === 'user' ? 'user' : ''}">
          ${m.isHtml ? m.text : m.text.replace(/\n/g, '<br/>')}
        </div>
        <div class="chat-time">${m.time}</div>
      </div>
    </div>
  `).join('');
  el.scrollTop = el.scrollHeight;
}

function getAIResponse(query) {
  const q = query.toLowerCase();
  if (q.includes('churn') || q.includes('risk')) return AI_RESPONSES.churn;
  if (q.includes('upsell') || q.includes('premium segment')) return AI_RESPONSES.upsell;
  if (q.includes('sentiment') && (q.includes('home loan') || q.includes('loan'))) return AI_RESPONSES.sentiment;
  if (q.includes('rajesh') || q.includes('interaction')) return AI_RESPONSES.rajesh;
  if (q.includes('nba') || q.includes('next best action') || q.includes('conversion')) return AI_RESPONSES.nba_conversion;
  if (q.includes('negative sentiment') || q.includes('negative')) return AI_RESPONSES.negative_sentiment;
  if (q.includes('retention offer') || q.includes('generate')) return AI_RESPONSES.retention_offer;
  if (q.includes('lapse') || q.includes('reason')) return AI_RESPONSES.lapse;
  return AI_RESPONSES.default;
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  chatHistory.push({ role: 'user', text, time: now });
  input.value = '';
  renderChat();

  // Show typing indicator
  const el = document.getElementById('chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-msg';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="chat-msg-avatar ai">✦</div>
    <div>
      <div class="chat-bubble">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    </div>
  `;
  el.appendChild(typingDiv);
  el.scrollTop = el.scrollHeight;

  setTimeout(() => {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();

    const response = getAIResponse(text);
    chatHistory.push({
      role: 'ai',
      text: response.text,
      isHtml: response.isHtml,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    });
    renderChat();
  }, 1200 + Math.random() * 800);
}

function askQuery(query) {
  navigate('copilot');
  setTimeout(() => {
    const input = document.getElementById('chat-input');
    if (input) {
      input.value = query;
      sendChatMessage();
    }
  }, 100);
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChatMessage();
  }
}

// ── Toast Notifications ───────────────────────────────────────
function showToast(message, type = 'info') {
  const icons = { success: '✅', alert: '🔔', info: 'ℹ️', error: '❌' };
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="font-size:16px">${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastIn 0.3s var(--ease) reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── Global Search ─────────────────────────────────────────────
function handleGlobalSearch(val) {
  const dropdown = document.getElementById('search-dropdown');
  if (!val || val.length < 2) { dropdown.style.display = 'none'; return; }
  const q = val.toLowerCase();
  const results = CUSTOMERS.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.city.toLowerCase().includes(q) ||
    c.policy.toLowerCase().includes(q) ||
    c.products.some(p => p.toLowerCase().includes(q))
  );
  if (!results.length) {
    dropdown.style.display = 'none';
    return;
  }
  dropdown.style.display = 'block';
  dropdown.innerHTML = results.map(c => `
    <div class="search-result" onmousedown="openCustomer('${c.id}');document.getElementById('global-search').value='';document.getElementById('search-dropdown').style.display='none'">
      <div class="c-avatar" style="background:${c.gradient};width:32px;height:32px;font-size:11px;flex-shrink:0">${c.initials}</div>
      <div>
        <div class="search-result-name">${c.name}</div>
        <div class="search-result-detail">${c.products.join(' · ')} · ${c.city} · ${c.churnRisk}% churn risk</div>
      </div>
      <span class="tag ${c.churnLevel === 'high' ? 'tag-rose' : c.churnLevel === 'medium' ? 'tag-amber' : 'tag-emerald'}" style="margin-left:auto;flex-shrink:0">${c.churnRisk}%</span>
    </div>
  `).join('');
}

function hideSearchDropdown() {
  setTimeout(() => {
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.style.display = 'none';
  }, 150);
}

// ── Mobile Sidebar ────────────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('visible');
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
}

// ── Animated Stat Counters ────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-value').forEach((el, i) => {
    el.style.animationDelay = `${i * 80}ms`;
    el.classList.add('animate');
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCustomerList();
  renderCustomerDetail();
  renderNBAQueue();
  renderDashboardLists();
  renderChat();

  // Animate counters
  setTimeout(animateCounters, 200);

  // Close sidebar on nav click (mobile)
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });

  // Auto-dismiss notification after 4s
  setTimeout(() => showToast('Cortex ML pipeline synced · 84,291 records updated', 'success'), 1500);
  setTimeout(() => showToast('3 new high-churn alerts detected in Mumbai', 'alert'), 4000);
  setTimeout(() => showToast('NBA engine refreshed · 9,134 actions queued', 'info'), 7000);
});
