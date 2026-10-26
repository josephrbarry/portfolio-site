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
  discrepancies?: Discrepancies;
  sources?: { group: string; items: { cite: string; use: string; links?: { label: string; href: string }[] }[] }[];
}

export interface Discrepancies {
  title: string;
  intro: string;
  table: {
    caption: string;
    head: string[];
    rows: string[][];
    foot: string[];
  };
  witnesses: { caption: string; items: { source: string; finding: string }[] };
  items: { head: string; body: string }[];
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
      'Excel databook: 19 tabs, 1,166 formulas, 49 checks, all passing. Deal math, quality of earnings, net debt, purchase price allocation, leverage and the networks analysis, every number tagged to its filing.',
      'Nine-page Power BI story, executive summary first, ending with a review of how close the estimates came.',
      'After the deal closed on 6-Oct-26, a second Alteryx workflow and a new databook tab trued the model up to the closing filings: 11 of 11 tie-outs pass, net debt came within 2% of the model, and all three red flags still stand.',
      'One-page advisor memo to Paramount’s board; a build script checks every number in it against the databook.',
    ],
    tools: ['Alteryx', 'Excel', 'Power BI', 'Python', 'SEC EDGAR'],
    cover: '/projects/paramount/page1.png',
    shots: [
      { src: '/projects/paramount/page1.png', caption: 'Executive summary' },
      { src: '/projects/paramount/page2.png', caption: 'The deal: bidding history, bankers’ valuation ranges, equity value to enterprise value' },
      { src: '/projects/paramount/page5.png', caption: 'Can they afford it: sources and uses, leverage by case, covenant sensitivity' },
      { src: '/projects/paramount/page7.png', caption: 'Sell the networks? Keep vs. sell by date, break-even price' },
      { src: '/projects/paramount/page8.png', caption: 'After closing: pre-closing estimates vs the closing filings' },
      { src: '/projects/paramount/page9.png', caption: 'Project overview: how it was built and how close the estimates came' },
      { src: '/projects/paramount/page3.png', caption: 'What Paramount is buying' },
      { src: '/projects/paramount/page4.png', caption: 'Where the money goes' },
      { src: '/projects/paramount/page6.png', caption: 'Findings and basis of preparation' },
    ],
    download: { href: '/projects/paramount/Paramount_WBD_Advisor_Memo.pdf', label: 'Read the one-page advisor memo (PDF)' },
    note: 'Public SEC filings through 6 August 2026; closing filings through 13 October 2026. Synergies are Paramount’s stated $6bn target, a forecast that can’t be verified from public filings.',
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
    discrepancies: {
      title: 'What didn’t add up',
      intro:
        'There was no dataset for this project. I transcribed every table from the original documents and footed it against the total the document prints before running any analysis. Most tables tied. One didn’t, and tracing why turned into half the project.',
      table: {
        caption:
          'Enclosure D, Statement of Subscriptions, Treasury Department, 25 January 1792. Each row has to satisfy quota − subscribed = unsubscribed. Three cells don’t.',
        head: ['State', 'Cell', 'As published', 'Reconciled', 'Difference'],
        rows: [
          ['North Carolina', 'Subscribed', '$1,166,355.57', '$1,666,355.57', '$500,000.00'],
          ['Massachusetts', 'Subscribed', '$4,447,013.81', '$4,477,013.81', '$30,000.00'],
          ['Maryland', 'Unsubscribed', '$500,744.60', '$500,774.60', '$30.00'],
        ],
        foot: ['Subscribed column', 'Total', '$17,798,186.21', '$18,328,186.21', 'Ties to printed total'],
      },
      witnesses: {
        caption:
          'To find where the errors came from, I compared four printings of the same table, cell by cell.',
        items: [
          { source: 'Childs & Swaine pamphlet, 1792 (via 2008 TCP transcription)', finding: 'Printed the year the statement was issued. The transcription shows Massachusetts as 4,177,013.81 ($300,000 low), South Carolina’s over-subscription as 634,573.52 ($5 low), and the unsubscribed total $2 off. Pending original page transcription.' },
          { source: 'Seybert, Statistical Annals, 1818', finding: 'The most accurate printing. Its only slip is $60 in the Virginia line.' },
          { source: 'American State Papers: Finance, 1832', finding: 'Where the $500,000, $30,000 and $30 errors first appear.' },
          { source: 'Founders Online (National Archives)', finding: 'Copied the 1832 reprint, errors included. It’s the version most people will find online today.' },
        ],
      },
      items: [
        {
          head: 'The Treasury was right.',
          body: 'With those three cells corrected, all five columns foot to the totals the Treasury printed in 1792, to the penny. The arithmetic was sound; the reprints are what’s wrong. I found no published source that notes the errors.',
        },
        {
          head: 'I got it wrong first.',
          body: 'My first pass fixed the Massachusetts over-subscribed line instead of the subscribed line, and concluded the Treasury had made a $30,000 error. Comparing the four printings reversed that. I rewrote the finding and kept the correction in the project history.',
        },
        {
          head: 'Unreadable scans, settled by footing.',
          body: 'Three figures in the 1881 Treasury history of the national loans (New York, Delaware, South Carolina) were partly illegible. I used the digits that appear in both surviving scans and make the column foot exactly to the printed $18,271,786.47.',
        },
        {
          head: 'Hamilton’s own rounding.',
          body: 'The nine states in his January 1790 schedule sum to $21,501,206. He called it “about twenty-one millions and a half.” I recorded it as a tie within rounding rather than an error.',
        },
      ],
    },
    sources: [
      {
        group: 'Primary documents',
        items: [
          {
            cite: 'Alexander Hamilton, Report Relative to a Provision for the Support of Public Credit, Schedule E, “Abstract of the Public Debt of the States,” 9 January 1790.',
            use: 'What Hamilton knew: six state returns, three of his own estimates, four blanks.',
            links: [{ label: 'Founders Online', href: 'https://founders.archives.gov/documents/Hamilton/01-06-02-0076-0002-0006' }],
          },
          {
            cite: 'U.S. Congress, An Act making provision for the Debt of the United States (Funding Act), 4 August 1790, 1 Stat. 138, section 14.',
            use: 'Each state’s quota, $21.5 million in total.',
            links: [{ label: 'Statutes at Large (GovInfo)', href: 'https://www.govinfo.gov/content/pkg/STATUTE-1/pdf/STATUTE-1-Pg138.pdf' }],
          },
          {
            cite: 'U.S. Census Bureau, Return of the Whole Number of Persons within the Several Districts of the United States (First Census), 1790.',
            use: 'Total and enslaved population for each state. All thirteen checked against the Census Bureau publication.',
            links: [{ label: 'Census Bureau', href: 'https://www.census.gov/library/publications/1793/dec/number-of-persons.html' }],
          },
          {
            cite: 'Treasury Department, Enclosure D, “Statement of Subscriptions to the Loan payable in Certificates or Notes issued by the respective States,” 25 January 1792, with Hamilton’s Report on the Public Debt and Loans, 23 January 1792.',
            use: 'What creditors actually turned in during the first subscription window. The table that didn’t foot.',
            links: [{ label: 'Founders Online', href: 'https://founders.archives.gov/documents/Hamilton/01-10-02-0124-0005' }],
          },
          {
            cite: 'Report of the Commissioners for Settling Accounts between the United States and the Individual States, to George Washington, 29 June 1793.',
            use: 'The final accounting of which states were owed money for the war and which owed the Union.',
            links: [{ label: 'Founders Online', href: 'https://founders.archives.gov/documents/Washington/05-13-02-0110' }],
          },
        ],
      },
      {
        group: 'Printings compared for the 1792 table',
        items: [
          {
            cite: 'U.S. Treasury Department, Report of the Secretary of the Treasury, on the Subject of the Public Debt. Presented to the House of Representatives, February 7th, 1792. Philadelphia: Childs and Swaine, 1792, p. 15 (Evans Early American Imprints, N19158).',
            use: 'Witness 1.',
            links: [{ label: 'Transcription (Text Creation Partnership)', href: 'https://github.com/textcreationpartnership/N19158' }],
          },
          {
            cite: 'Adam Seybert, Statistical Annals of the United States of America, Philadelphia, 1818, p. 726.',
            use: 'Witness 2. The most accurate of the four.',
          },
          {
            cite: 'American State Papers: Finance, vol. 1, Gales & Seaton, Washington, 1832.',
            use: 'Witness 3. Where the three errors first appear.',
          },
          {
            cite: 'Founders Online, National Archives, transcription of Enclosure D.',
            use: 'Witness 4. Carries the 1832 errors.',
            links: [{ label: 'Founders Online', href: 'https://founders.archives.gov/documents/Hamilton/01-10-02-0124-0005' }],
          },
        ],
      },
      {
        group: 'Treasury history and conversions',
        items: [
          {
            cite: 'Rafael A. Bayley, History of the National Loans of the United States from July 4, 1776, to June 30, 1880, U.S. Treasury Department, 1881, p. 33.',
            use: 'The final amount assumed for each state, $18,271,786.47 in total.',
            links: [
              { label: 'Scan 1 (Internet Archive)', href: 'https://archive.org/details/cu31924030228245' },
              { label: 'Scan 2 (Internet Archive)', href: 'https://archive.org/details/nationalloansun00treagoog' },
            ],
          },
          {
            cite: 'MeasuringWorth, Purchasing Power of the U.S. Dollar and relative-share series.',
            use: '1790 dollars to 2025 dollars at 36.3x CPI; the $21.5 million as a share of 1790 GDP.',
            links: [{ label: 'MeasuringWorth', href: 'https://www.measuringworth.com/calculators/uscompare/' }],
          },
          {
            cite: 'Federal Reserve Bank of Minneapolis, Consumer Price Index, 1800–.',
            use: 'Cross-check on the inflation conversion.',
            links: [{ label: 'Minneapolis Fed', href: 'https://www.minneapolisfed.org/about-us/monetary-policy/inflation-calculator/consumer-price-index-1800-' }],
          },
        ],
      },
    ],
  },
];
