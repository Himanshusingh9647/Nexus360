# Nexus 360 — Customer Intelligence Platform

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Snowflake](https://img.shields.io/badge/Snowflake-29B5E8?style=for-the-badge&logo=snowflake&logoColor=white)](https://www.snowflake.com)

**A premium, AI-powered Customer 360 & Next Best Action dashboard**
*Built for the Snowflake CoCo CLI Hackathon*

---

## Overview

**Nexus 360** is a cutting-edge **Customer Intelligence Platform** that unifies structured and unstructured customer data into real-time AI-driven insights and actionable recommendations. It simulates a full-stack analytics dashboard powered by **Snowflake Cortex** and **CoCo CLI**, designed for insurance and financial services teams.

> Built with pure HTML, CSS & JavaScript — no frameworks, no dependencies. Just fast, beautiful, and functional.

---

## Features

### 6 Fully Interactive Sections

| Section | Description |
|---------|-------------|
| **Overview Dashboard** | KPI stat cards, 12-week sentiment trend chart, portfolio segment donut, high-churn risk list, recent NBA actions |
| **Customer 360** | Searchable customer list + detailed profile with AI summary, interaction timeline, churn risk ring, and next best action |
| **Next Best Action Engine** | Priority action queue sorted by impact x urgency, with assign/skip controls and action category breakdown |
| **AI Copilot** | Natural language chat interface backed by Snowflake Cortex Analyst — ask questions, get data-driven answers |
| **Customer Segments** | AI-driven clustering into Premium / Growth / At-Risk segments with ML feature importance visualization |
| **Smart Alerts** | Real-time anomaly signals — churn spikes, sentiment drops, cross-sell opportunities — with one-click actions |

---

### Design Highlights

- **Dark mode UI** with a deep navy/indigo palette
- **Glassmorphism** cards with subtle borders and layered depth
- **Micro-animations**: counter fade-in, page slide transitions, typing indicators, alert pulse glow, cursor blink
- **Responsive layout** — collapses to mobile with a slide-in sidebar overlay
- **Inter + JetBrains Mono** typography from Google Fonts
- **Smooth gradients**, conic-gradient donut/ring charts, SVG sparklines

---

### AI Capabilities (Simulated via Snowflake Cortex)

- **Churn Risk Scoring** — ML model with 91.2% confidence across 84,291 customers
- **Sentiment Analysis** — Processing 340K call transcripts via CoCo CLI Document Parse
- **Next Best Action Engine** — 9,134 prioritized actions across Retention, Upsell, Cross-Sell, Service Fix
- **Natural Language Copilot** — Keyword-matched responses for 8+ query types
- **Portfolio Segmentation** — Cortex ML clustering into Premium (42%), Standard (24%), SME (14%), At-Risk (20%)

---

## Project Structure

```
nexus360/
+-- index.html        # Full UI — sidebar, topbar, all 6 page sections
+-- app.js            # Application logic — data, rendering, navigation, chat AI
+-- styles.css        # Complete design system — tokens, components, animations
+-- README.md         # This file
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- No build tools, no npm, no dependencies required

### Run Locally

```bash
# Clone the repository
git clone https://github.com/Himanshusingh9647/Nexus360.git

# Navigate to the project
cd Nexus360

# Open in your browser
# Option 1: Double-click index.html
# Option 2: Use VS Code Live Server extension
# Option 3: Use Python built-in server
python -m http.server 8080
# Then visit http://localhost:8080
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5 (Semantic) |
| **Styling** | Vanilla CSS3 — Custom Properties, Grid, Flexbox, Animations |
| **Logic** | Vanilla JavaScript (ES6+) — No frameworks |
| **Typography** | Google Fonts — Inter, JetBrains Mono |
| **Charts** | Inline SVG (sparklines, donut, conic-gradient rings) |
| **AI Layer** | Snowflake Cortex + CoCo CLI (simulated) |

---

## Sample Customer Data

The platform ships with **5 richly detailed customer profiles**:

| Customer | Risk | Sentiment Score | LTV | Next Best Action |
|----------|------|-----------------|-----|-----------------|
| Rajesh Sharma | 92% HIGH | 34/100 Negative | Rs 8.4L | Loyalty Top-Up Plan |
| Priya Nair | 87% HIGH | 42/100 Negative | Rs 5.1L | Retention Call — EMI Restructure |
| Arjun Mehta | 76% MED | 55/100 Neutral | Rs 11.2L | Expedite Claim + VIP Bundle |
| Sneha Kulkarni | 71% MED | 49/100 Neutral | Rs 3.8L | Fund Switch Advisory |
| Vikram Desai | 18% LOW | 88/100 Positive | Rs 18.6L | Referral + Wealth Advisory |

---

## AI Copilot — Supported Queries

The AI Copilot responds intelligently to queries like:

- *"Which customers are at highest churn risk this week?"*
- *"Show me upsell opportunities for premium segment"*
- *"What is the sentiment trend for home loan customers?"*
- *"Summarize last 5 interactions for Rajesh Sharma"*
- *"Which NBA actions have the highest conversion probability?"*
- *"Show me customers with negative sentiment in last 30 days"*
- *"Generate a retention offer for premium auto policy holders"*
- *"What are the top reasons for policy lapse this quarter?"*

---

## Architecture Overview

```
+-----------------------------------------------------+
|                    Nexus 360 UI                      |
|  +----------+  +-------------+  +----------------+  |
|  | Sidebar  |  |   Topbar    |  |  Toast System  |  |
|  | Nav      |  | Search Bar  |  |  Notifications |  |
|  +----------+  +-------------+  +----------------+  |
|                                                      |
|  +--------------------------------------------+     |
|  |              Page Sections                 |     |
|  | Dashboard | C360 | NBA | Copilot | Segments|     |
|  +--------------------------------------------+     |
+-----------------------------------------------------+
                         |
         +---------------+---------------+
         v               v               v
  +------------+  +------------+  +------------+
  | CUSTOMERS  |  | NBA_ACTIONS|  |AI_RESPONSES|
  | (5 records)|  | (7 actions)|  |(8 patterns)|
  +------------+  +------------+  +------------+
         |
         v
  +-------------------------------------+
  |    Snowflake Cortex (Simulated)     |
  |  Churn ML Model (91.2% accuracy)   |
  |  Sentiment Analysis (340K docs)     |
  |  NBA Engine (9,134 actions)         |
  |  Cortex Analyst (NL to SQL)         |
  +-------------------------------------+
```

---

## Hackathon Context

This project was built for the **Snowflake CoCo CLI Hackathon**, demonstrating how CoCo CLI can:

- Run end-to-end customer intelligence pipelines: `coco run pipeline --name customer_360`
- Parse and index unstructured call recordings: `coco parse-docs --source call_recordings/`
- Generate governed semantic views for Cortex Analyst: `coco generate semantic-view --schema CRM`
- Power live NBA agents with real-time triggers: `coco run nba-agent --live --watch`
- Integrate with Jira + Slack via MCP Connector for auto-ticketing

---

## Author

**Himanshu Singh**
[GitHub @Himanshusingh9647](https://github.com/Himanshusingh9647)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with love for the Snowflake CoCo CLI Hackathon — Star this repo if you found it useful!
