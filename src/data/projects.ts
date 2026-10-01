export interface Shot {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  card: string;
  question: string;
  verdict: string;
  stats: { value: string; label: string }[];
  findings: { head: string; body: string }[];
  built: string[];
  tools: string[];
  cover: string;
  shots: Shot[];
  download?: { href: string; label: string };
  github?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: 'paramount-wbd',
    title: 'Paramount–Warner Bros. Discovery merger',
    kicker: 'Buy-side M&A analysis · 2026',
    card: 'Paramount is paying $31.00 a share, 147% above WBD’s unaffected price. I assessed the deal from the buyer’s side: price, earnings quality, leverage, goodwill and the cable networks.',
    question:
      'Paramount Skydance agreed to buy all of Warner Bros. Discovery for $31.00 a share in cash, about $110 billion including debt, after a bidding contest with Netflix. Was it worth it, and what should the board do now?',
    verdict: 'What is Paramount buying, what is it paying, and do the synergies close the gap? I did the buy-side diligence to find out, and built my own analysis from the filings.',
    stats: [
      { value: '$113.9bn', label: 'Enterprise value at assumed closing' },
      { value: '6.3x', label: 'Net leverage before synergies (5.5x covenant)' },
      { value: '60%', label: 'Share of the price that is goodwill' },
      { value: '113%', label: 'Premium and fees vs. capitalized synergies' },
    ],
    findings: [
      {
        head: 'Paramount overpaid.',
        body: 'The premium, ticking fee and $2.8bn Netflix termination fee total $50.9bn, 113% of what the $6bn synergy target is worth. Breaking even needs $6.8bn of synergies a year.',
      },
      {
        head: 'Leverage depends on synergies that don’t exist yet.',
        body: 'Pro forma net leverage is 6.3x before synergies against a 5.5x covenant. It reaches Paramount’s 4.3x only because the credit agreement counts the full synergy target in advance.',
      },
      {
        head: 'WBD’s earnings are softer than reported.',
        body: 'A quality-of-earnings view that charges share-based pay and recurring restructuring puts WBD’s EBITDA at $7.5bn, not $8.8bn.',
      },
      {
        head: 'Goodwill carries the risk.',
        body: 'An estimated purchase price allocation puts $58.1bn, 60% of the price, in goodwill: twice WBD’s own 2022 deal on a like-for-like basis.',
      },
      {
        head: 'Sell the cable networks only above $17.3bn.',
        body: 'Below that, keeping them for cash flow is worth more, and a sale at market multiples would raise leverage, not reduce it.',
      },
    ],
    built: [
      'Alteryx workflow extracts 436 line items from both companies’ SEC filings and reconciles them in 60 checks.',
      'Excel databook: 18 tabs, 882 formulas, 37 checks, all passing. Deal math, quality of earnings, net debt, purchase price allocation, leverage and the networks analysis, every number tagged to its filing.',
      'Seven-page Power BI story, executive summary first.',
      'One-page advisor memo to Paramount’s board; a build script checks every number in it against the databook.',
    ],
    tools: ['Alteryx', 'Excel', 'Power BI', 'Python', 'SEC EDGAR'],
    cover: '/projects/paramount/page1.png',
    shots: [
      { src: '/projects/paramount/page1.png', caption: 'Executive summary' },
      { src: '/projects/paramount/page2.png', caption: 'The deal: bidding history, bankers’ valuation ranges, equity value to enterprise value' },
      { src: '/projects/paramount/page5.png', caption: 'Can they afford it: sources and uses, leverage by case, covenant sensitivity' },
      { src: '/projects/paramount/page7.png', caption: 'Sell the networks? Keep vs. sell by date, break-even price' },
      { src: '/projects/paramount/page3.png', caption: 'What Paramount is buying' },
      { src: '/projects/paramount/page4.png', caption: 'Where the money goes' },
      { src: '/projects/paramount/page6.png', caption: 'Findings and basis of preparation' },
    ],
    download: { href: '/projects/paramount/Paramount_WBD_Advisor_Memo.pdf', label: 'Read the one-page advisor memo (PDF)' },
    note: 'Public SEC filings through 6 August 2026. Synergies are Paramount’s stated $6bn target, a forecast that can’t be verified from public filings.',
  },
  {
    slug: 'hamilton',
    title: 'Hamilton’s 1790 debt assumption',
    kicker: 'Historical reconciliation and statistical analysis · 1790–1793',
    card: 'Was the federal assumption of $21.5 million in state war debt fair? I rebuilt five Treasury ledgers from the original documents, footed every one, and found the published record didn’t add up.',
    question:
      'The Funding Act of 1790 let the new federal government absorb up to $21.5 million of the states’ Revolutionary War debt. If you had to defend that allocation to an auditor, could you?',
    verdict: 'Before I could analyze the numbers, I had to establish what the numbers were. When I did, they told a different story than I expected.',
    stats: [
      { value: '$21.5M', label: 'Authorized by the Funding Act, 1790' },
      { value: '$18.27M', label: 'Actually assumed' },
      { value: '85%', label: 'Utilization of the authorized sum' },
      { value: '4', label: 'Printings of the 1792 table compared' },
    ],
    findings: [
      {
        head: 'The published record doesn’t foot, and the Treasury was right.',
        body: 'The 1792 subscription table as published states a total its rows don’t add up to. Comparing four printings traced three cell errors to an 1832 reprint that later sources copied. Correct them and every column foots to the Treasury’s printed total to the penny.',
      },
      {
        head: 'The quotas were set on a balance sheet that was one-third estimate and one-third blank.',
        body: 'Six states sent returns, Hamilton estimated three, and four had nothing on file but were assigned $3.1M anyway.',
      },
      {
        head: 'Virginia was a debtor state.',
        body: 'The 1793 commissioners found Virginia owed the Union $100,879, contradicting Madison’s argument that it had over-paid for the war.',
      },
      {
        head: 'Relief tracked contribution.',
        body: 'Creditor states received $6.12 per head of relief, debtor states $2.67 (exact permutation p = 0.047). With 13 states, the 2.3x effect size is the reliable statement.',
      },
    ],
    built: [
      'Five primary-source ledgers transcribed from the original documents and footed against the totals each one prints.',
      'Line-level tie-out across four printings of the 1792 subscription table.',
      'Statistical tests (exact permutation, Spearman rank correlation) on relief vs. the 1793 settlement.',
      'Eight-schedule Power BI report laid out like an audit file, generated from code.',
    ],
    tools: ['Python', 'Power BI', 'Statistics', 'Primary sources'],
    cover: '/projects/hamilton/A-summary.png',
    shots: [
      { src: '/projects/hamilton/A-summary.png', caption: 'Schedule A · Summary and opinion' },
      { src: '/projects/hamilton/B-tieout.png', caption: 'Schedule B · Tie-out of every source document' },
      { src: '/projects/hamilton/E-taccount.png', caption: 'Schedule E · The 1793 settlement as a T-account' },
      { src: '/projects/hamilton/F-fairness.png', caption: 'Schedule F · The fairness test' },
      { src: '/projects/hamilton/C-ledger.png', caption: 'Schedule C · Ledger' },
      { src: '/projects/hamilton/D-takeup.png', caption: 'Schedule D · Take-up' },
      { src: '/projects/hamilton/G-apportionment.png', caption: 'Schedule G · Apportionment' },
      { src: '/projects/hamilton/H-statistics.png', caption: 'Schedule H · Statistics and sources' },
    ],
    download: { href: '/projects/hamilton/Hamilton_Debt_Assumption_Report.pdf', label: 'Read the eight-schedule report (PDF)' },
    github: 'https://github.com/josephrbarry/hamilton-debt-assumption',
    note: 'Dollars shown in 1790 dollars; the report also shows 2025 dollars at 36.3x CPI.',
  },
];
