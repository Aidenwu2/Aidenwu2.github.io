/* =====================================================================
   data.js — Content source for the site (bilingual).
   The dynamic sections (About, Publications, Grants ... Contact) are
   rendered from the SITE object below by app.js. The hero identity
   (name, tagline, roles) is static bilingual HTML in index.html so it
   shows even with JavaScript disabled; SITE.name is reused by app.js
   for the localized portrait alt text. To change the hero name/roles,
   edit index.html; everything else lives here.
   All factual content is taken from the owner's CV.
   ===================================================================== */

const SITE = {
  /* ---- Basic identity (name also used for the portrait alt) ----- */
  name:   { en: "Wanqiang Wu", zh: "吴万强" },

  /* ---- Quick links (hero buttons) ------------------------------- */
  links: {
    email:   "wuwq63@mail.sysu.edu.cn",
    email2:  "aiden.wwq@icloud.com",
    scholar: "https://scholar.google.com/citations?user=SM5BpEcAAAAJ",
    orcid:   "https://orcid.org/0000-0002-3199-6934",
    cvEn:    "assets/CV_Wanqiang_Wu.pdf",
    cvZh:    "assets/CV_Wu_Wanqiang_zh.pdf",
  },

  /* ---- At-a-glance metrics -------------------------------------- */
  metrics: [
    { value: "12",  label: { en: "Peer-reviewed articles", zh: "同行评审论文" } },
    { value: "8",   label: { en: "SSCI-indexed", zh: "SSCI 收录" } },
    { value: "95",  label: { en: "Citations", zh: "被引次数" } },
    { value: "2",   label: { en: "Grants as PI", zh: "主持项目" } },
  ],
  metricsNote: {
    en: "Citation count: Google Scholar 62 + CNKI 33 (last updated May 2026).",
    zh: "被引统计 Google Scholar 62 + 知网 33（2026 年 5 月更新）。",
  },

  /* ---- About ---------------------------------------------------- */
  about: {
    en: [
      "Wanqiang Wu is a Yat-sen Postdoctoral Fellow at Sun Yat-sen University and a Visiting Associate Professor at Xinjiang University of Political Science and Law. His research sits at the intersection of criminal procedure, the Chinese legal system, and the use of artificial intelligence in criminal justice, with a sustained commitment to empirical legal methods.",
      "He earned his Ph.D. in Criminal Procedure Law (Cum Laude) from the KoGuan School of Law, Shanghai Jiao Tong University, where his dissertation examined the digital transformation of criminal procuratorial functions in China&rsquo;s procuratorates. He was a Visiting Researcher at Cornell Law School (2023&ndash;2024) under Prof. Yun-Chien Chang, holds an LL.M. in Arbitration and Dispute Resolution from City University of Hong Kong, and is a licensed attorney in Mainland China.",
      "His work has appeared in journals including <i>Modern China</i>, <i>Crime, Law and Social Change</i>, the <i>International Review of Economics and Finance</i>, and the <i>International Journal of Law, Crime and Justice</i>, and has been cited in venues such as the <i>Berkeley Technology Law Journal</i>, <i>The British Journal of Criminology</i>, and <i>China Legal Science</i>.",
    ],
    zh: [
      "吴万强，中山大学法学院逸仙博士后、新疆政法学院讲席副教授，中国大陆执业律师。研究领域聚焦刑事诉讼法、数字法学与人工智能在刑事司法中的应用，长期坚持法律实证研究方法。",
      "他于上海交通大学凯原法学院获法学博士学位（诉讼法学，优秀毕业生），博士论文为《检察机关刑事检察业务的数字化改革研究》，师从林喜芬教授。曾以联合培养博士、访问研究员身份在康奈尔大学法学院从事研究（合作导师张永健教授），并于香港城市大学获法学硕士学位（仲裁及争议解决）。",
      "其研究成果发表于 <i>Modern China</i>、<i>Crime, Law and Social Change</i>、<i>International Review of Economics and Finance</i>、<i>International Journal of Law, Crime and Justice</i> 等期刊，并被 <i>Berkeley Technology Law Journal</i>、<i>The British Journal of Criminology</i>、《中国法学》等刊物引用。",
    ],
  },

  /* ---- News / highlights ---------------------------------------- */
  news: [
    { year: "2026", en: "Appointed Digital Humanism Junior Visiting Fellow at the Institute for Human Sciences (IWM), Vienna (Sep&ndash;Nov 2026).",
                     zh: "获聘维也纳人文科学研究所（IWM）数字人文主义青年访问研究员（2026 年 9&ndash;11 月）。" },
    { year: "2026", en: "Began a Visiting Associate Professorship at Xinjiang University of Political Science and Law (2026&ndash;2028).",
                     zh: "出任新疆政法学院讲席副教授（2026&ndash;2028）。" },
    { year: "2026", en: "Awarded a Guangdong Provincial Philosophy and Social Sciences Project (Youth, GD26YFX17) as Principal Investigator.",
                     zh: "主持广东省哲学社会科学规划青年项目（GD26YFX17）。" },
    { year: "2025", en: "Received the Chen Guangzhong Outstanding Doctoral Dissertation Award in Procedural Law.",
                     zh: "获陈光中诉讼法学优秀博士学位论文奖。" },
    { year: "2025", en: "Joined Sun Yat-sen University as a Yat-sen Postdoctoral Fellow.",
                     zh: "入职中山大学法学院，任逸仙博士后。" },
  ],

  /* ---- Research interests --------------------------------------- */
  research: {
    intro: {
      en: "I study how China&rsquo;s criminal justice institutions change, and how those changes can be measured. Recurring threads are the expanding role of the procuratorate, the turn to data and AI in adjudication, and what both mean for fairness and rights.",
      zh: "我关注中国刑事司法制度如何变迁，以及如何对这些变迁加以测量。贯穿其中的主线是检察权的扩张、裁判中的数据与人工智能转向，以及二者对公正与权利的影响。",
    },
    areas: [
      { en: "AI &amp; Criminal Justice", zh: "人工智能与刑事司法",
        dEn: "How courts and procuratorates deploy artificial intelligence, and what algorithmic adjudication means for access to justice and due process.",
        dZh: "法院与检察机关如何部署人工智能，以及算法裁判对司法可及性与正当程序的意义。" },
      { en: "The Chinese Procuratorate", zh: "中国检察制度",
        dEn: "The expansion of procuratorial power within and beyond criminal justice, and reforms to case-quality assessment and supervision.",
        dZh: "检察权在刑事司法内外的扩张，以及案件质量评价与法律监督的制度变革。" },
      { en: "Empirical Legal Studies", zh: "法律实证研究",
        dEn: "Quantitative and case-based methods for measuring institutional behaviour, from organized-crime crackdowns to environmental public-interest litigation.",
        dZh: "以定量与案例方法测量制度行为，议题涵盖扫黑除恶到环境公益诉讼。" },
      { en: "Law and Society", zh: "法律与社会",
        dEn: "Criminal procedure read against its social and economic context, including legal transplantation and corporate compliance in China.",
        dZh: "将刑事诉讼置于社会与经济语境中考察，涵盖法律移植与中国企业合规。" },
    ],
  },

  /* ---- Publications --------------------------------------------- *
   * role badge is bilingual. "lead" highlights the entry.
   * Wu's name in the authors string is wrapped in <b>...</b>.        */
  publications: [
    { year: 2026, date: { en: "Mar 2026", zh: "2026 年 3 月" },
      authors: "Tun, X., Lin, R., Luo, T., &amp; <b>Wu, W.</b>",
      title: "Between Punishment and Reintegration: Empirical Reflections on Parole Practices in China",
      venue: "Sage Open", detail: "16(1): 1&ndash;17",
      badges: ["SSCI · Q1", "Top 4%"],
      role: { en: "Corresponding author", zh: "通讯作者" },
      url: "https://doi.org/10.1177/21582440251414931" },

    { year: 2026, date: { en: "Mar 2026", zh: "2026 年 3 月" },
      authors: "Fang, S., <b>Wu, W.</b>, &amp; Lin, X.",
      title: "Controlling Investigation through Collaboration: An Empirical Study of China&rsquo;s New Prosecutor&ndash;Police Interaction Mechanism",
      venue: "Policing: A Journal of Policy and Practice", detail: "20: paag005",
      badges: ["SSCI · Q2", "Top 17%"],
      role: { en: "Second author", zh: "第二作者" },
      url: "https://doi.org/10.1093/police/paag005" },

    { year: 2025, date: { en: "Jun 2025", zh: "2025 年 6 月" },
      authors: "<b>Wu, W.</b>, &amp; Lin, X.",
      title: "Access to Technology, Access to Justice: China&rsquo;s Artificial Intelligence Application in Criminal Proceedings",
      venue: "International Journal of Law, Crime and Justice", detail: "81: 100741",
      badges: ["SSCI · Q1", "25 citations"],
      role: { en: "First author", zh: "第一作者" }, lead: true,
      url: "https://doi.org/10.1016/j.ijlcj.2025.100741" },

    { year: 2025, date: { en: "Apr 2025", zh: "2025 年 4 月" },
      authors: "<b>Wu, W.</b>, Lan, H., Ma, Y., &amp; Lin, X.",
      title: "The Dark Hand of the Underworld: Measuring the Economic Impact of Organized Crime",
      venue: "Crime, Law and Social Change", detail: "83(25): 1&ndash;26",
      badges: ["SSCI · Q2", "Top 23%"],
      role: { en: "Co-first author", zh: "共同第一作者" },
      url: "https://doi.org/10.1007/s10611-025-10209-6" },

    { year: 2024, date: { en: "Nov 2024", zh: "2024 年 11 月" },
      authors: "<b>Wu, W.</b>, Chan, P. C. H., &amp; Lin, X.",
      title: "Urban Pollution Governance, Prosecutor-led Environmental Public Interest Litigation, and Regional Environmental Disparities in China: Evidence from 282 Cities",
      venue: "China: An International Journal", detail: "22(4): 73&ndash;95",
      badges: ["SSCI · Q2"],
      role: { en: "First author", zh: "第一作者" },
      url: "https://doi.org/10.56159/chn.2024.a945294" },

    { year: 2024, date: { en: "Sep 2024", zh: "2024 年 9 月" },
      authors: "Lin, X., <b>Wu, W.</b>, Lan, H., &amp; Ma, Y.",
      title: "The Impact of Anti-organized Crime on Business Environment: Evidence from China&rsquo;s Anti-Mafia Campaign",
      venue: "International Review of Economics and Finance", detail: "95: 1&ndash;17",
      badges: ["SSCI · Q1", "Top 14%"],
      role: { en: "Second author", zh: "第二作者" },
      url: "https://doi.org/10.1016/j.iref.2024.103435" },

    { year: 2024, date: { en: "Jun 2024", zh: "2024 年 6 月" },
      authors: "Chan, P. C. H., &amp; <b>Wu, W.</b>",
      title: "From &lsquo;Line Appraisal&rsquo; to &lsquo;Case-Process Ratio&rsquo;: Will the New Case Quality Assessment System Facilitate the Changing Role of the Chinese Prosecutor",
      venue: "Hong Kong Law Journal", detail: "54(1): 203&ndash;230",
      badges: ["SSCI · Q3"],
      role: { en: "Corresponding author", zh: "通讯作者" },
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4808916" },

    { year: 2024, date: { en: "Mar 2024", zh: "2024 年 3 月" },
      authors: "<b>Wu, W.</b>, &amp; Lin, X.",
      title: "Constrained Expansion: The Expansion of China&rsquo;s Procuratorial Power within and beyond Criminal Justice",
      venue: "Modern China", detail: "50(5): 568&ndash;606",
      badges: ["SSCI", "Top 3%"],
      role: { en: "First author", zh: "第一作者" }, lead: true,
      url: "https://doi.org/10.1177/00977004241232874" },

    { year: 2023, date: { en: "Jun 2023", zh: "2023 年 6 月" },
      authors: "Zhou, C., &amp; <b>Wu, W.</b>",
      title: "The Legislative Paradigm of China&rsquo;s Biosafety Law and Its Positive Significance for the SARS-CoV-2 Prevention and Control",
      venue: "Biotechnology Law Report", detail: "42(3): 132&ndash;139",
      badges: ["SCI · Q4"],
      role: { en: "Corresponding author", zh: "通讯作者" },
      url: "https://doi.org/10.1089/blr.2023.29307.ww" },

    { year: 2022, date: { en: "Jul 2022", zh: "2022 年 7 月" },
      authors: "Lin, X., &amp; <b>Wu, W.</b>",
      title: "Something Lost, Something Gained: Changes in China&rsquo;s Procuratorate in Response to the Reform of the National Supervision System",
      venue: "China Law and Society Review", detail: "6(1): 70&ndash;110",
      badges: ["12 citations"],
      role: { en: "Co-corresponding author", zh: "共同通讯作者" },
      url: "https://doi.org/10.1163/25427466-07010002" },

    { year: 2020, date: { en: "Dec 2020", zh: "2020 年 12 月" },
      authors: "Zi, Z., &amp; <b>Wu, W.</b>",
      title: "The Evolutionary Logic and Normative Interpretation of the Rights of Defendants in Criminal <i>in Absentia</i> Proceedings",
      titleZh: "刑事缺席审判程序被告人权利的演进逻辑与规范阐释",
      venue: "China Journal of Applied Jurisprudence", venueZh: "中国应用法学", detail: "(6): 125&ndash;142",
      badges: ["CSSCI", "33 citations"],
      role: { en: "Second author", zh: "第二作者" } },

    { year: 2020, date: { en: "Dec 2020", zh: "2020 年 12 月" },
      authors: "Zi, Z., &amp; <b>Wu, W.</b>",
      title: "Amendment of China&rsquo;s Biotechnology Laws in Relation to the Prevention and Containment of the COVID-19 Pandemic",
      venue: "Biotechnology Law Report", detail: "39(6): 458&ndash;467",
      badges: ["SCI · Q4"],
      role: { en: "Second author", zh: "第二作者" },
      url: "https://doi.org/10.1089/blr.2020.29206.zz" },
  ],

  bookChapters: [
    { authors: "Zi, Z., &amp; <b>Wu, W.</b>", year: 2022,
      title: "The Jurisprudence and Procedural Logic of Safeguarding the Rights of Defendants in Criminal <i>in Absentia</i> Proceedings",
      titleZh: "刑事缺席审判程序被告人权利保障的法理与程序逻辑",
      venue: { en: "In Z. Zi, <i>Criminal Procedure Jurisprudence and Procedural Logic</i>. Beijing: China Social Science Press.",
               zh: "载自正法《刑事诉讼法理与程序逻辑》，北京：中国社会科学出版社。" } },
  ],

  working: [
    { authors: "Zi, Z., Yuan, Z., Zhang, S., &amp; <b>Wu, W.</b>",
      title: "Preventing Juvenile Cybercrime: An Empirical Study on Network-Induced Factors and Collaborative Governance in China",
      status: { en: "Revise &amp; resubmit, <i>Behavioral Sciences &amp; the Law</i> (Top 24%) · Corresponding author",
                zh: "返修中，<i>Behavioral Sciences &amp; the Law</i>（Top 24%）· 通讯作者" } },
  ],

  /* ---- Grants & projects ---------------------------------------- */
  grants: [
    { role: { en: "Principal Investigator", zh: "主持人" }, pi: true,
      title: { en: "Research on the Judicial Governance Mechanism of Cryptocurrency Crimes in Japan",
               zh: "日本虚拟货币犯罪的司法治理机制研究" },
      org: { en: "Shanghai Center for Japan Studies (Shanghai Foreign Affairs Office)",
             zh: "上海日本研究交流中心（上海市外办主管）委托课题" },
      period: "2026" },
    { role: { en: "Principal Investigator", zh: "主持人" }, pi: true,
      title: { en: "Research on Sentencing Systems from the Perspective of Digital Technology: Evidence from the Guangdong-Hong Kong-Macao Greater Bay Area",
               zh: "数字技术视角下的量刑制度研究" },
      org: { en: "Guangdong Provincial Philosophy and Social Sciences Planning Project (Youth, GD26YFX17)",
             zh: "广东省哲学社会科学规划青年项目（GD26YFX17）" },
      period: "2026" },
    { role: { en: "Core Member (Rank 10)", zh: "骨干成员（排名第 10）" },
      title: { en: "Research on Key Technologies and Equipment for Intelligent Adjudication of All Case Types",
               zh: "全案由智能裁判关键技术与装备研究" },
      org: { en: "National Key R&amp;D Program of China (2022YFC3340900)",
             zh: "国家重点研发计划（2022YFC3340900）" },
      period: "2022&ndash;2025" },
    { role: { en: "Team Member (Rank 7)", zh: "课题组成员（排名第 7）" },
      title: { en: "Quantitative Assessment of Factors Influencing Prosecutorial Sentencing Decisions",
               zh: "检察机关量刑决策影响因素的量化评估研究" },
      org: { en: "National Social Science Fund of China (22BFX057)",
             zh: "国家社科基金一般项目（22BFX057）" },
      period: "2023&ndash;2024" },
    { role: { en: "Team Member (Rank 3)", zh: "课题组成员（排名第 3）" },
      title: { en: "Application of Next-Generation AI Technologies in Criminal Justice: The Shanghai Model and Future Pathways",
               zh: "新一代人工智能技术的刑事司法应用：上海模式与未来发展路径" },
      org: { en: "Shanghai Science and Technology Innovation Action Plan, Soft Science Project (22692111900)",
             zh: "上海市科技创新行动计划软科学研究项目（22692111900）" },
      period: "2022&ndash;2023" },
  ],

  /* ---- Talks ---------------------------------------------------- */
  talks: [
    { year: 2025, title: "Between Punishment and Reintegration: Empirical Reflections on Parole Practices in China",
      venue: { en: "Young Scholar Workshop: Empirical Legal Studies in the Sinophone Region, Cornell University, USA",
               zh: "华语区法律实证研究青年学者工作坊，康奈尔大学，美国" } },
    { year: 2025, title: "AI in China&rsquo;s Criminal Justice",
      venue: { en: "Smart Courts Workshop, University of Cologne, Germany",
               zh: "智慧法院工作坊，科隆大学，德国" } },
    { year: 2025, title: { en: "Data Security Protection in Digital Prosecution (Keynote)",
                           zh: "数字检察中的数据安全保护（主旨发言）" },
      venue: { en: "First Mingqin Rule of Law Forum, Anhui University, China",
               zh: "首届鸣磬法治论坛，安徽大学，中国" } },
    { year: 2024, title: "Access to Technology, Access to Justice: China&rsquo;s Artificial Intelligence Adjudication in Criminal Justice",
      venue: { en: "Asian Law and Society Association Annual Meeting, Sungkyunkwan University, South Korea",
               zh: "亚洲法社会学年会，成均馆大学，韩国" } },
    { year: 2024, title: "Constrained Expansion: The Expansion of China&rsquo;s Procuratorial Power Within and Beyond Criminal Justice",
      venue: { en: "Law and Society Association Annual Meeting, Denver, USA",
               zh: "美国法社会学年会，丹佛，美国" } },
    { year: 2023, title: "Something Borrowed and Something Created: The Transplantation of Criminal Corporate Compliance in China",
      venue: { en: "ALSA&ndash;HKCML Conference, City University of Hong Kong, China",
               zh: "ALSA&ndash;HKCML 会议，香港城市大学，中国" } },
  ],

  /* ---- Teaching ------------------------------------------------- */
  teaching: {
    note: { en: "Xinjiang University of Political Science and Law, 2026&ndash;2028.",
            zh: "新疆政法学院，2026&ndash;2028。" },
    courses: [
      { en: "Evidence Law", zh: "证据法" },
      { en: "Criminal Procedure Law", zh: "刑事诉讼法" },
    ],
  },

  /* ---- Experience & education timeline --------------------------- */
  timeline: [
    { kind: "exp", period: "2025 &ndash; present",
      role: { en: "Yat-sen Postdoctoral Fellow", zh: "逸仙博士后" },
      org:  { en: "Sun Yat-sen University, School of Law &middot; Guangzhou", zh: "中山大学法学院 &middot; 广州" },
      note: { en: "Supervisor: Prof. Jinjie Xie", zh: "合作导师 谢进杰教授" } },
    { kind: "exp", period: "2026 &ndash; 2028",
      role: { en: "Visiting Associate Professor", zh: "讲席副教授" },
      org:  { en: "Xinjiang University of Political Science and Law &middot; Tumxuk", zh: "新疆政法学院 &middot; 图木舒克" },
      note: { en: "Courses: Evidence Law; Criminal Procedure Law", zh: "讲授 证据法、刑事诉讼法" } },
    { kind: "exp", period: "2026",
      role: { en: "Digital Humanism Junior Visiting Fellow", zh: "数字人文主义青年访问研究员" },
      org:  { en: "Institute for Human Sciences (IWM) &middot; Vienna", zh: "维也纳人文科学研究所（IWM）&middot; 维也纳" },
      note: { en: "NETIAS member institute (Sep&ndash;Nov 2026)", zh: "欧洲高等研究院网络（NETIAS）成员机构（2026 年 9&ndash;11 月）" } },
    { kind: "exp", period: "2023 &ndash; 2024",
      role: { en: "Visiting Researcher", zh: "访问研究员" },
      org:  { en: "Cornell Law School &middot; Ithaca, NY", zh: "康奈尔大学法学院 &middot; 美国伊萨卡" },
      note: { en: "Advisor: Prof. Yun-Chien Chang", zh: "合作导师 张永健教授" } },
    { kind: "edu", period: "2021 &ndash; 2025",
      role: { en: "Ph.D. in Criminal Procedure Law (Cum Laude)", zh: "法学博士（诉讼法学，优秀毕业生）" },
      org:  { en: "Shanghai Jiao Tong University, KoGuan School of Law", zh: "上海交通大学凯原法学院" },
      note: { en: "Supervisor: Prof. Xifen Lin", zh: "导师 林喜芬教授" } },
    { kind: "edu", period: "2019 &ndash; 2020",
      role: { en: "LL.M. in Arbitration and Dispute Resolution", zh: "法学硕士（仲裁及争议解决）" },
      org:  { en: "City University of Hong Kong, School of Law", zh: "香港城市大学法学院" },
      note: { en: "Supervisor: Dr. Peter C. H. Chan", zh: "导师 Peter C. H. Chan" } },
    { kind: "edu", period: "2015 &ndash; 2019",
      role: { en: "LL.B. in Law", zh: "法学学士" },
      org:  { en: "Chongqing University, School of Law", zh: "重庆大学法学院" },
      note: { en: "Supervisor: Prof. Zhengfa Zi", zh: "导师 自正法教授" } },
  ],

  /* ---- Honors --------------------------------------------------- */
  honors: [
    { year: "2025", en: "Chen Guangzhong Outstanding Doctoral Dissertation Award in Procedural Law", zh: "陈光中诉讼法学优秀博士学位论文奖" },
    { year: "2025", en: "Outstanding Graduate Award, Shanghai Jiao Tong University", zh: "上海交通大学优秀毕业生" },
    { year: "2024", en: "China-U.S. Scholars Program Grant for Conference Participation", zh: "中美学者项目会议资助奖金" },
    { year: "2023", en: "China Scholarship Council Fund (Joint-PhD Program)", zh: "国家建设高水平大学公派研究生项目奖学金" },
    { year: "2021&ndash;25", en: "Chinese Government Scholarship for Graduate Students", zh: "研究生国家奖学金" },
  ],

  /* ---- Service -------------------------------------------------- */
  service: {
    editorial: [
      { en: "Editorial Board Member, <i>Natura Humanitas</i> (2026&ndash;2028)", zh: "编委，<i>Natura Humanitas</i>（2026&ndash;2028）" },
      { en: "Youth Editorial Board Member, <i>Law, Ethics &amp; Technology</i> (2025&ndash;2028)", zh: "青年编委，<i>Law, Ethics &amp; Technology</i>（2025&ndash;2028）" },
    ],
    reviewing: {
      en: "Peer reviewer for <i>International Journal of Law, Crime and Justice</i> (SSCI Q1), <i>Journal of Knowledge Economy</i> (SSCI Q1), <i>Journal of Contemporary Asia</i> (SSCI Q1), <i>China Information</i> (SSCI Q1), and <i>Law, Ethics and Technology</i>.",
      zh: "担任 <i>International Journal of Law, Crime and Justice</i>（SSCI Q1）、<i>Journal of Knowledge Economy</i>（SSCI Q1）、<i>Journal of Contemporary Asia</i>（SSCI Q1）、<i>China Information</i>（SSCI Q1）、<i>Law, Ethics and Technology</i> 外审专家。",
    },
    memberships: {
      en: "Member of the American Law and Society Association, the Asian Law and Society Association, the British Society of Legal Scholars, and the European China Law Studies Association.",
      zh: "美国法社会学协会、亚洲法社会协会、英国法律学者协会、欧洲中国法协会会员。",
    },
  },

  /* ---- Footer --------------------------------------------------- */
  footerNote: {
    en: "Built as a static site. Content drawn from the author&rsquo;s curriculum vitae.",
    zh: "本站为纯静态页面，内容取自作者的学术简历。",
  },
};

/* ---- UI strings (chrome) ---------------------------------------- */
const I18N = {
  btn: {
    email: { en: "Email",        zh: "邮箱" },
    cvEn:  { en: "CV (English)", zh: "英文简历" },
    cvZh:  { en: "CV (中文)",    zh: "中文简历" },
  },
  // Accessible names for icon-only / stateful controls (updated on toggle).
  a11y: {
    switchLang:   { en: "Switch to Chinese",            zh: "切换到英文" },
    themeToDark:  { en: "Switch to dark mode",          zh: "切换到深色模式" },
    themeToLight: { en: "Switch to light mode",         zh: "切换到浅色模式" },
    openMenu:     { en: "Open menu",                    zh: "打开菜单" },
    closeMenu:    { en: "Close menu",                   zh: "关闭菜单" },
    cvMenu:       { en: "Curriculum Vitae, opens menu", zh: "下载简历，打开菜单" },
    portraitAlt:  { en: "Portrait of Wanqiang Wu",      zh: "吴万强肖像照" },
  },
  head: {
    about:    { en: "About",                     zh: "个人简介" },
    news:     { en: "News",                      zh: "近况" },
    research: { en: "Research Interests",        zh: "研究方向" },
    pubs:     { en: "Publications",              zh: "论文发表" },
    journals: { en: "Journal Articles",          zh: "期刊论文" },
    chapters: { en: "Book Chapters",             zh: "著作章节" },
    working:  { en: "Working Papers",            zh: "在审论文" },
    grants:   { en: "Grants &amp; Projects",     zh: "课题项目" },
    talks:    { en: "Selected Presentations",    zh: "学术报告" },
    teaching: { en: "Teaching",                  zh: "教学" },
    cv:       { en: "Experience &amp; Education", zh: "履历与教育" },
    honors:   { en: "Honors &amp; Awards",       zh: "荣誉奖励" },
    service:  { en: "Academic Service",          zh: "学术服务" },
    contact:  { en: "Contact",                   zh: "联系方式" },
  },
  misc: {
    allYears:    { en: "All",             zh: "全部" },
    editorial:   { en: "Editorial roles", zh: "编辑职务" },
    reviewing:   { en: "Peer review",     zh: "同行评审" },
    memberships: { en: "Memberships",     zh: "学会会员" },
    primaryEmail:{ en: "Email",           zh: "邮箱" },
    altEmail:    { en: "Alternate",       zh: "备用邮箱" },
    affiliation: { en: "Yat-sen Postdoctoral Fellow, Sun Yat-sen University, Guangzhou, China",
                   zh: "中山大学法学院，广州" },
  },
};
