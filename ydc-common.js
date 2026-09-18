(() => {
  if (document.title.startsWith('专业护理培训')) document.body.classList.add('training-page');
  if (document.title.startsWith('居家医疗服务')) document.body.classList.add('home-medical-page');
  if (document.title.startsWith('居家母婴护理')) document.body.classList.add('maternal-page');
  if (document.title.startsWith('居家照护服务')) document.body.classList.add('home-care-page');
  if (document.title.startsWith('长期护理保险')) document.body.classList.add('long-term-page');
  if (document.title.startsWith('机构及院内合作')) document.body.classList.add('institution-page');
  if (document.title.startsWith('商业保险合作')) document.body.classList.add('insurance-page');
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  // The inner pages deliberately reuse the confirmed homepage navigation and footer.
  const header = `
    <header class="ydc-header" aria-label="主导航">
      <a class="ydc-home-brand" href="易得康官网.html" aria-label="易得康首页">易得康</a>
      <nav class="ydc-home-menu" aria-label="网站栏目">
        <div class="ydc-home-item">
          <a class="ydc-home-trigger" href="易得康官网.html">首页</a>
        </div>
        <div class="ydc-home-item has-dropdown">
          <a class="ydc-home-trigger" href="认识易得康.html">关于我们</a>
          <div class="ydc-home-submenu">
            <a href="认识易得康.html#industry">行业洞察</a>
            <a href="认识易得康.html#about">关于易得康</a>
            <a href="认识易得康.html#network">服务网络</a>
            <a href="认识易得康.html#history">品牌历程</a>
            <a href="认识易得康.html#advantages">能力优势</a>
            <a href="认识易得康.html#responsibility">社会责任</a>
          </div>
        </div>
        <div class="ydc-home-item has-dropdown">
          <a class="ydc-home-trigger" href="居家医疗服务.html">我们的服务</a>
          <div class="ydc-home-submenu">
            <a href="居家医疗服务.html">居家医疗服务</a>
            <a href="居家母婴护理.html">居家母婴护理</a>
            <a href="专业护理培训.html">专业护理培训</a>
            <a href="居家照护服务.html">居家照护服务</a>
          </div>
        </div>
        <div class="ydc-home-item has-dropdown">
          <a class="ydc-home-trigger" href="长期护理保险.html">场景解决方案</a>
          <div class="ydc-home-submenu">
            <a href="长期护理保险.html">长期护理保险</a>
            <a href="机构及院内合作.html">机构/院内合作</a>
            <a href="商业保险合作.html">商业保险合作</a>
            <a href="智慧照护平台.html">智慧照护平台</a>
            <a href="专业护理培训.html#talent-supply">照护人才供给</a>
          </div>
        </div>
        <div class="ydc-home-item has-dropdown">
          <a class="ydc-home-trigger" href="专业护理人才.html">专业护理人才</a>
          <div class="ydc-home-submenu">
            <a href="专业护理人才.html#专业护理员">专业护理员</a>
            <a href="专业护理人才.html#长期照护师">长期照护师</a>
            <a href="专业护理人才.html#执业护士">执业护士</a>
            <a href="专业护理人才.html#康复治疗师">康复治疗师</a>
            <a href="专业护理人才.html#注册营养师">注册营养师</a>
            <a href="专业护理人才.html#母婴护理师">母婴护理师</a>
            <a href="专业护理人才.html#照护培训导师">照护培训导师</a>
          </div>
        </div>
        <div class="ydc-home-item has-dropdown">
          <a class="ydc-home-trigger" href="认识易得康.html#responsibility">公司动态</a>
          <div class="ydc-home-submenu">
            <a href="认识易得康.html#responsibility">企业荣誉</a>
            <a href="认识易得康.html#responsibility">品牌动态</a>
            <a href="认识易得康.html#responsibility">媒体报道</a>
          </div>
        </div>
        <div class="ydc-home-item">
          <a class="ydc-home-trigger" href="https://ehr-ydcare.zhiye.com/" target="_blank" rel="noopener noreferrer">加入我们</a>
        </div>
      </nav>
      <div class="ydc-home-contact-wrap"><a class="ydc-home-contact" href="mailto:info@ydcare.com">联系我们</a><span class="ydc-contact-qr" aria-hidden="true"><img src="网站切图/首页/figma-更新/contact-qr.png" alt=""></span></div>
    </header>`;

  const footer = `
    <footer class="ydc-home-footer" id="contact">
      <img src="网站切图/首页/figma-更新/footer.png" alt="易得康联系方式">
      <div class="ydc-footer-social-icons" aria-label="官方社媒与联系方式">
        <div class="ydc-footer-left-content">
          <div class="ydc-footer-slogan"><strong>医疗照护 · 医养到家</strong><span>致力于成为中国值得信赖的专业照护合作伙伴</span></div>
          <div class="ydc-footer-social-icons-list">
            <button type="button" class="ydc-footer-social-item" aria-label="查看订阅号二维码"><img src="社媒icon/icon/公众号_订阅号.png" alt=""><span>订阅号</span><span class="ydc-footer-social-qr" aria-hidden="true"><img src="社媒icon/美化后/订阅号.png" alt=""></span></button>
            <button type="button" class="ydc-footer-social-item" aria-label="查看服务号二维码"><img src="社媒icon/icon/公众号_订阅号.png" alt=""><span>服务号</span><span class="ydc-footer-social-qr" aria-hidden="true"><img src="社媒icon/美化后/服务号.png" alt=""></span></button>
            <button type="button" class="ydc-footer-social-item" aria-label="查看视频号二维码"><img src="社媒icon/icon/视频号.png" alt=""><span>视频号</span><span class="ydc-footer-social-qr" aria-hidden="true"><img src="社媒icon/美化后/视频号.png" alt=""></span></button>
            <button type="button" class="ydc-footer-social-item" aria-label="查看小红书二维码"><img src="社媒icon/icon/小红书.png" alt=""><span>小红书</span><span class="ydc-footer-social-qr" aria-hidden="true"><img src="社媒icon/美化后/小红书.png" alt=""></span></button>
          </div>
          <div class="ydc-footer-contact-details" aria-label="公司联系方式">
            <a href="tel:400-921-5121">服务热线：400-921-5121</a>
            <a href="mailto:info@ydcare.cn">企业邮箱：info@ydcare.cn</a>
            <span>公司地址：上海市 徐汇区 斜土路 2899号 光启文化广场A座2楼</span>
          </div>
        </div>
      </div>
      <nav class="ydc-footer-menu" aria-label="页脚导航">
        <div class="ydc-footer-menu-grid">
          <section class="ydc-footer-menu-column">
            <h3><a href="居家照护服务.html">居家照护服务</a></h3>
            <a href="认识易得康.html#about">关于我们</a>
            <a href="认识易得康.html#history">品牌历程</a>
            <a href="认识易得康.html#network">服务网络</a>
            <a href="认识易得康.html#advantages">能力优势</a>
            <a href="认识易得康.html#responsibility">社会责任</a>
          </section>
          <section class="ydc-footer-menu-column">
            <h3><a href="易得康官网.html#services">核心服务</a></h3>
            <a href="长期护理保险.html">长期护理保险</a>
            <a href="居家照护服务.html">居家照护服务</a>
            <a href="居家医疗服务.html">居家医疗服务</a>
            <a href="居家母婴护理.html">居家母婴护理</a>
            <a href="专业护理培训.html">专业护理培训</a>
          </section>
          <section class="ydc-footer-menu-column">
            <h3><a href="长期护理保险.html">解决方案</a></h3>
            <a href="机构及院内合作.html">机构/院内合作</a>
            <a href="商业保险合作.html">商业保险合作</a>
            <a href="智慧照护平台.html">智慧照护平台</a>
            <a href="专业护理培训.html">照护人才供给</a>
          </section>
          <section class="ydc-footer-menu-column">
            <h3><a href="专业护理人才.html">专业人才</a></h3>
            <a href="专业护理人才.html#专业护理员">专业护理员</a>
            <a href="专业护理人才.html#长期照护师">长期照护师</a>
            <a href="专业护理人才.html#执业护士">执业护士</a>
            <a href="专业护理人才.html#康复治疗师">康复治疗师</a>
            <a href="专业护理人才.html#注册营养师">注册营养师</a>
            <a href="专业护理人才.html#母婴护理师">母婴护理师</a>
            <a href="专业护理人才.html#照护培训导师">照护培训导师</a>
          </section>
          <section class="ydc-footer-menu-column">
            <h3><a href="认识易得康.html#responsibility">公司动态</a></h3>
            <span>企业荣誉</span>
            <span>品牌动态</span>
            <span>媒体报道</span>
            <a href="https://ehr-ydcare.zhiye.com/" target="_blank" rel="noopener noreferrer">加入我们</a>
          </section>
        </div>
      </nav>
      <div class="ydc-footer-legal" aria-label="版权与合规信息">
        <div class="ydc-footer-legal-row">
          <div class="ydc-footer-legal-copy"><span>2026易得康医疗，版权所有。</span><span>本网站仅作集团信息展示，相关医疗服务由集团旗下持证机构提供。</span></div>
          <div class="ydc-footer-legal-links" aria-label="网站政策"><span>隐私政策</span><span>法律声明</span><span>备案号</span></div>
        </div>
      </div>
    </footer>`;

  document.querySelectorAll('[data-ydc-header]').forEach((element) => {
    element.innerHTML = header;
  });
  document.querySelectorAll('[data-ydc-footer]').forEach((element) => {
    element.innerHTML = footer;
  });

  // Every local navigation destination starts below the fixed header.
  const navigationTargets = new Set();
  document.querySelectorAll('.ydc-header a[href*="#"]').forEach((link) => {
    const url = new URL(link.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    target.classList.add('ydc-nav-anchor');
    navigationTargets.add(target);
  });
  const currentNavigationTarget = () => {
    try {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      return navigationTargets.has(target) ? target : null;
    } catch {
      return null;
    }
  };

  // Keep the maternal-care social block in the same order as the Figma layout:
  // title, social channels, description, then the outlined CTA.
  if (document.body.classList.contains('maternal-page')) {
    document.querySelectorAll('.maternal-page .ydc-social > div').forEach((copy) => {
      const qr = copy.querySelector(':scope > .ydc-qr');
      const body = copy.querySelector(':scope > .ydc-body');
      if (!qr || !body) return;
      copy.insertBefore(qr, body);
      if (!copy.querySelector(':scope > .ydc-social-cta')) {
        const cta = document.createElement('a');
        cta.className = 'ydc-btn ydc-social-cta';
        cta.href = 'mailto:info@ydcare.com';
        cta.textContent = '了解优护佳';
        copy.appendChild(cta);
      }
    });
  }

  // Every Figma “服务介绍” content area aligns to the second safe area.
  document.querySelectorAll('.ydc-section').forEach((section) => {
    const kicker = section.querySelector(':scope > .ydc-container .ydc-kicker');
    if (kicker && kicker.textContent.trim() === '服务介绍') {
      section.classList.add('ydc-service-intro');
    }
  });

  if (document.body.classList.contains('home-care-page')) {
    document.querySelectorAll('main > .ydc-section .ydc-section-head').forEach((heading) => {
      heading.classList.add('ydc-reveal');
    });
  }

  document.querySelectorAll('.ydc-home-item.has-dropdown').forEach((item) => {
    const trigger = item.querySelector('.ydc-home-trigger');
    if (!trigger) return;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    item.addEventListener('mouseenter', () => trigger.setAttribute('aria-expanded', 'true'));
    item.addEventListener('mouseleave', () => trigger.setAttribute('aria-expanded', 'false'));
    item.addEventListener('focusin', () => trigger.setAttribute('aria-expanded', 'true'));
    item.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!item.contains(document.activeElement)) trigger.setAttribute('aria-expanded', 'false');
      });
    });
  });

  const toTop = document.createElement('button');
  toTop.className = 'ydc-to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', '回到顶部');
  toTop.textContent = '↑';
  document.body.append(toTop);
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 600), { passive: true });

  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      reveal.unobserve(entry.target);
    }), { threshold: 0.12 });
    document.querySelectorAll('.ydc-reveal').forEach((element) => reveal.observe(element));
  } else {
    document.querySelectorAll('.ydc-reveal').forEach((element) => element.classList.add('visible'));
  }

  // Data counters on long-term-care and other inner pages.
  const counterPage = document.title.startsWith('长期护理保险') || document.title.startsWith('专业护理培训') || document.title.startsWith('居家母婴护理');
  const counters = counterPage ? document.querySelectorAll('.ydc-stat strong') : [];
  counters.forEach((node) => {
    if (node.dataset.value) return;
    const match = node.textContent.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    node.dataset.value = match[1];
    if (match[2]) node.dataset.suffix = match[2];
    node.textContent = match[1];
  });
  const runCounters = () => counters.forEach((node, index) => {
    if (node.dataset.counterStarted) return;
    const match = (node.dataset.value || node.textContent.trim()).match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    node.dataset.counterStarted = 'true';
    const value = Number(match[1]);
    const decimals = (match[1].split('.')[1] || '').length;
    const suffix = node.dataset.suffix || match[2] || '';
    node.dataset.value = match[1];
    if (suffix) node.dataset.suffix = suffix;
    node.textContent = decimals ? value.toFixed(decimals) : String(value);
    const started = performance.now();
    const duration = 1180;
    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = progress * progress * (3 - 2 * progress);
      const current = value * eased;
      node.textContent = `${decimals ? current.toFixed(decimals) : Math.round(current)}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), index * 120);
  });
  const statBand = document.querySelector('.ydc-stat-band');
  if (statBand && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        runCounters();
        counterObserver.disconnect();
      }
    }, { threshold: 0.25 });
    counterObserver.observe(statBand);
  } else if (statBand) runCounters();

  // 全国服务网络：依据用户提供的中国地图，按国界、海岸与岛屿控制点分区映射。
  // 城市坐标映射及海岸核查记录位于 previews/network-placement/city-layout/。
  // 图标、字体不参与形变；点位依据城市地理分布，仅作示意，不新增业务覆盖声明。
  const networkAssetPath = '网站切图/认识易得康/network-icons/';
  const networkRegions = [
    {"id": "bohai", "label": "环渤海区", "x": 1184, "y": 713, "size": 216, "badgeX": 1143, "badgeY": 637, "badgeWidth": 92},
    {"id": "delta", "label": "长三角区", "x": 1294, "y": 887, "size": 168, "badgeX": 1318, "badgeY": 814, "badgeWidth": 92},
    {"id": "central", "label": "华中区", "x": 1131.8, "y": 926.0, "size": 168, "badgeX": 1106, "badgeY": 879, "badgeWidth": 90},
    {"id": "west", "label": "西部区", "x": 907.3, "y": 902.8, "size": 178, "badgeX": 862.3, "badgeY": 813, "badgeWidth": 90},
    {"id": "bay", "label": "大湾区", "x": 1116, "y": 1056, "size": 154, "badgeX": 1097, "badgeY": 1006, "badgeWidth": 90}
  ];
  const networkProvinceLabels = [
    {"text": "新疆维吾尔自治区", "x": 600.9, "y": 701.2, "anchorX": 600.9, "anchorY": 701.2},
    {"text": "西藏自治区", "x": 644.7, "y": 906.4, "anchorX": 644.7, "anchorY": 906.4, "secondLine": "（待开发）"},
    {"text": "青海省", "x": 808.2, "y": 786.9, "anchorX": 808.2, "anchorY": 786.9},
    {"text": "甘肃省", "x": 894.9, "y": 754.6, "anchorX": 912.9, "anchorY": 762.6},
    {"text": "宁夏回族自治区", "x": 985.0, "y": 771.2, "anchorX": 973.0, "anchorY": 769.2},
    {"text": "内蒙古自治区", "x": 1097.1, "y": 688.3, "anchorX": 1097.1, "anchorY": 688.3},
    {"text": "陕西省", "x": 1031.6, "y": 811.7, "anchorX": 1031.6, "anchorY": 811.7},
    {"text": "山西省", "x": 1102.0, "y": 794.8, "anchorX": 1102.0, "anchorY": 794.8},
    {"text": "河北省", "x": 1161.3, "y": 781.6, "anchorX": 1161.3, "anchorY": 781.6},
    {"text": "北京市", "x": 1145, "y": 707, "anchorX": 1184, "anchorY": 713, "leader": true},
    {"text": "天津市", "x": 1205, "y": 752, "anchorX": 1194.6, "anchorY": 726, "leader": true},
    {"text": "黑龙江省", "x": 1362.5, "y": 621.2, "anchorX": 1362.5, "anchorY": 621.2},
    {"text": "吉林省", "x": 1362.2, "y": 666.7, "anchorX": 1352.2, "anchorY": 666.7},
    {"text": "辽宁省", "x": 1320, "y": 712, "anchorX": 1300, "anchorY": 688},
    {"text": "山东省", "x": 1198, "y": 807, "anchorX": 1227.3, "anchorY": 796.6, "leader": true},
    {"text": "河南省", "x": 1134, "y": 856, "anchorX": 1128.1, "anchorY": 864.1},
    {"text": "江苏省", "x": 1250, "y": 845, "anchorX": 1260.6, "anchorY": 871.2},
    {"text": "安徽省", "x": 1220, "y": 924, "anchorX": 1197.1, "anchorY": 915.5},
    {"text": "上海市", "x": 1350, "y": 901, "anchorX": 1294, "anchorY": 887, "leader": true},
    {"text": "浙江省", "x": 1266, "y": 971, "anchorX": 1275.2, "anchorY": 959.1},
    {"text": "四川省", "x": 856.4, "y": 909.4, "anchorX": 874.4, "anchorY": 907.4},
    {"text": "重庆市", "x": 989, "y": 958, "anchorX": 963.5, "anchorY": 941.6},
    {"text": "湖北省", "x": 1066, "y": 947, "anchorX": 1101.3, "anchorY": 913.8},
    {"text": "湖南省", "x": 1035, "y": 1004, "anchorX": 1070.4, "anchorY": 1002.4, "leader": true},
    {"text": "江西省", "x": 1165.1, "y": 995.2, "anchorX": 1165.1, "anchorY": 995.2},
    {"text": "福建省", "x": 1247, "y": 1043, "anchorX": 1220, "anchorY": 1022, "leader": true},
    {"text": "贵州省", "x": 1000, "y": 995, "anchorX": 961.0, "anchorY": 993.6},
    {"text": "云南省", "x": 846, "y": 1036, "anchorX": 868.9, "anchorY": 1030.6},
    {"text": "广西壮族自治区", "x": 980, "y": 1051, "anchorX": 980, "anchorY": 1048},
    {"text": "广东省", "x": 1165, "y": 1065, "anchorX": 1164, "anchorY": 1045},
    {"text": "香港", "x": 1198, "y": 1091, "anchorX": 1138, "anchorY": 1068, "leader": true},
    {"text": "澳门", "x": 1120, "y": 1125, "anchorX": 1117, "anchorY": 1082, "leader": true},
    {"text": "台湾省", "x": 1306.4, "y": 1048.0, "anchorX": 1306.4, "anchorY": 1048.0},
    {"text": "海南省", "x": 992.3, "y": 1159.4, "anchorX": 1039.3, "anchorY": 1154.4, "leader": true}
  ];
  // 按 GeoNames 城市坐标映射到斜视底图；城市分布示意，不代表实际服务城市清单。
  // Source: https://www.geonames.org/ · CC BY 4.0. Offline records: previews/network-placement/city-layout/.
  const networkCityPoints = [
    {"city": "天津", "x": 1194.6, "y": 726.0, "region": "bohai", "compact": true},
    {"city": "廊坊", "x": 1188.1, "y": 720.8, "region": "bohai", "compact": true},
    {"city": "唐山", "x": 1211.4, "y": 713.8, "region": "bohai", "compact": true},
    {"city": "保定", "x": 1165.3, "y": 737.1, "region": "bohai", "compact": false},
    {"city": "石家庄", "x": 1145.5, "y": 756.6, "region": "bohai", "compact": false},
    {"city": "济南", "x": 1190.1, "y": 780.4, "region": "bohai", "compact": false},
    {"city": "青岛", "x": 1245.8, "y": 789.2, "region": "bohai", "compact": false},
    {"city": "潍坊", "x": 1224.1, "y": 771.5, "region": "bohai", "compact": false},
    {"city": "烟台", "x": 1255.3, "y": 762.8, "region": "bohai", "compact": false},
    {"city": "沈阳", "x": 1275.6, "y": 677.3, "region": "bohai", "compact": false},
    {"city": "大连", "x": 1265.0, "y": 724.2, "region": "bohai", "compact": true},
    {"city": "长春", "x": 1315.3, "y": 655.2, "region": "bohai", "compact": false},
    {"city": "哈尔滨", "x": 1343.4, "y": 635.2, "region": "bohai", "compact": false},
    {"city": "苏州", "x": 1278.4, "y": 889.4, "region": "delta", "compact": true},
    {"city": "无锡", "x": 1272.3, "y": 886.3, "region": "delta", "compact": true},
    {"city": "常州", "x": 1265.4, "y": 884.0, "region": "delta", "compact": true},
    {"city": "南京", "x": 1239.4, "y": 882.0, "region": "delta", "compact": true},
    {"city": "镇江", "x": 1254.3, "y": 877.5, "region": "delta", "compact": true},
    {"city": "扬州", "x": 1253.6, "y": 874.1, "region": "delta", "compact": true},
    {"city": "南通", "x": 1283.7, "y": 877.3, "region": "delta", "compact": true},
    {"city": "嘉兴", "x": 1281.8, "y": 897.5, "region": "delta", "compact": true},
    {"city": "湖州", "x": 1268.4, "y": 898.5, "region": "delta", "compact": true},
    {"city": "杭州", "x": 1269.8, "y": 911.9, "region": "delta", "compact": true},
    {"city": "绍兴", "x": 1279.0, "y": 913.6, "region": "delta", "compact": true},
    {"city": "宁波", "x": 1298.9, "y": 917.4, "region": "delta", "compact": true},
    {"city": "金华", "x": 1256.6, "y": 931.1, "region": "delta", "compact": true},
    {"city": "台州", "x": 1297.2, "y": 928.5, "region": "delta", "compact": true},
    {"city": "温州", "x": 1277.8, "y": 944.7, "region": "delta", "compact": false},
    {"city": "合肥", "x": 1204.8, "y": 890.5, "region": "delta", "compact": false},
    {"city": "芜湖", "x": 1231.5, "y": 896.5, "region": "delta", "compact": true},
    {"city": "滁州", "x": 1228.2, "y": 878.2, "region": "delta", "compact": true},
    {"city": "郑州", "x": 1124.1, "y": 832.7, "region": "central", "compact": false},
    {"city": "洛阳", "x": 1097.8, "y": 835.0, "region": "central", "compact": false},
    {"city": "南阳", "x": 1097.0, "y": 873.4, "region": "central", "compact": true},
    {"city": "襄阳", "x": 1086.1, "y": 894.1, "region": "central", "compact": true},
    {"city": "宜昌", "x": 1064.1, "y": 919.7, "region": "central", "compact": false},
    {"city": "长沙", "x": 1100.1, "y": 967.2, "region": "central", "compact": true},
    {"city": "株洲", "x": 1104.2, "y": 973.1, "region": "central", "compact": true},
    {"city": "湘潭", "x": 1098.5, "y": 973.1, "region": "central", "compact": true},
    {"city": "南昌", "x": 1165.9, "y": 954.2, "region": "central", "compact": true},
    {"city": "九江", "x": 1171.4, "y": 936.5, "region": "central", "compact": true},
    {"city": "重庆", "x": 956.5, "y": 930.8, "region": "west", "compact": false},
    {"city": "绵阳", "x": 921.6, "y": 887.7, "region": "west", "compact": true},
    {"city": "德阳", "x": 914.7, "y": 893.9, "region": "west", "compact": true},
    {"city": "南充", "x": 949.1, "y": 904.9, "region": "west", "compact": false},
    {"city": "泸州", "x": 931.9, "y": 941.4, "region": "west", "compact": false},
    {"city": "西安", "x": 1020.1, "y": 839.3, "region": "west", "compact": false},
    {"city": "贵阳", "x": 956.7, "y": 987.5, "region": "west", "compact": false},
    {"city": "昆明", "x": 886.9, "y": 1014.5, "region": "west", "compact": false},
    {"city": "兰州", "x": 917.1, "y": 790.8, "region": "west", "compact": false},
    {"city": "银川", "x": 974.2, "y": 745.6, "region": "west", "compact": false},
    {"city": "佛山", "x": 1113.8, "y": 1058.9, "region": "bay", "compact": true},
    {"city": "东莞", "x": 1123.0, "y": 1058.3, "region": "bay", "compact": true},
    {"city": "深圳", "x": 1132.2, "y": 1065.4, "region": "bay", "compact": true},
    {"city": "惠州", "x": 1136.8, "y": 1052.3, "region": "bay", "compact": true},
    {"city": "中山", "x": 1114.8, "y": 1073.7, "region": "bay", "compact": true},
    {"city": "珠海", "x": 1117.5, "y": 1079.8, "region": "bay", "compact": true},
    {"city": "江门", "x": 1111.1, "y": 1072.2, "region": "bay", "compact": true},
    {"city": "香港", "x": 1138.0, "y": 1068.0, "region": "bay", "compact": true},
    {"city": "澳门", "x": 1117.0, "y": 1082.0, "region": "bay", "compact": true},
    {"city": "南宁", "x": 991.4, "y": 1066.7, "region": "bay", "compact": false},
    {"city": "海口", "x": 1074.0, "y": 1137.0, "region": "bay", "compact": false},
    {"city": "三亚", "x": 1046.0, "y": 1167.0, "region": "bay", "compact": false},
    {"city": "东方", "x": 1030.0, "y": 1153.0, "region": "bay", "compact": false},
    {"city": "万宁", "x": 1068.0, "y": 1157.0, "region": "bay", "compact": false},
    {"city": "太原", "x": 1107.5, "y": 761.9, "region": "bohai", "compact": false},
    {"city": "福州", "x": 1240.0, "y": 988.4, "region": "delta", "compact": false},
    {"city": "泉州", "x": 1221.8, "y": 1011.7, "region": "delta", "compact": true},
    {"city": "厦门", "x": 1209.6, "y": 1020.5, "region": "delta", "compact": true}
  ];
  const networkMapMarkup = `
    <svg class="ltc-network-regions" viewBox="0 0 1920 1261" preserveAspectRatio="none" aria-label="五大服务区域">
      ${networkRegions.map((region) => `
        <g class="ltc-network-region" data-region="${region.id}" role="button" tabindex="0" aria-label="${region.label}">
          <image class="ltc-network-region-art" href="${networkAssetPath}region-circle.png" x="${region.x - region.size / 2}" y="${region.y - region.size / 2}" width="${region.size}" height="${region.size}"></image>
          <circle class="ltc-network-region-hit" cx="${region.x}" cy="${region.y}" r="${region.size / 2}"></circle>
        </g>`).join('')}
    </svg>
    <svg class="ltc-network-provinces" viewBox="0 0 1920 1261" preserveAspectRatio="none" aria-label="省市位置标注">
      ${networkProvinceLabels.filter((label) => label.leader).map((label) => `<line x1="${label.anchorX}" y1="${label.anchorY}" x2="${label.x + Math.max(-label.text.length * 7 - 4, Math.min(label.text.length * 7 + 4, label.anchorX - label.x))}" y2="${label.y - (Math.abs(label.y - label.anchorY) > 15 ? 17 : 5)}"></line>`).join('')}
      ${networkProvinceLabels.map((label) => `<text x="${label.x}" y="${label.y}">${label.text}${label.secondLine ? `<tspan x="${label.x}" dy="17">${label.secondLine}</tspan>` : ''}</text>`).join('')}
    </svg>
    <div class="ltc-network-points" aria-label="服务网络分布示意"></div>
    <svg class="ltc-network-badges" viewBox="0 0 1920 1261" preserveAspectRatio="none" aria-hidden="true">
      ${networkRegions.map((region) => `
        <rect x="${region.badgeX}" y="${region.badgeY}" width="${region.badgeWidth}" height="37" rx="5"></rect>
        <image href="${networkAssetPath}${region.id}.png" x="${region.badgeX}" y="${region.badgeY}" width="${region.badgeWidth}" height="37"></image>`).join('')}
    </svg>
    <p class="ydc-sr-only">易得康服务网络覆盖 73 个城市，包含环渤海区、长三角区、华中区、大湾区与西部区。点位按主要城市位置示意，不代表实际服务站点或完整服务城市清单。</p>`;

  document.querySelectorAll('[data-ydc-network-map]').forEach((map) => {
    map.innerHTML = networkMapMarkup;

    // 用同一裁切矩形同步底图和标注画板，保留已校准的地理坐标。
    const stage = map.closest('.ydc-network-stage');
    const crop = stage?.dataset.networkCrop?.trim().split(/\s+/).map(Number);
    const hasCrop = crop?.length === 4 && crop.every(Number.isFinite) && crop[2] > 0 && crop[3] > 0;
    const syncMapViewport = () => {
      if (!stage) return;
      const { width, height } = stage.getBoundingClientRect();
      if (!width || !height) return;
      const [x, y, cropWidth, cropHeight] = hasCrop
        ? [crop[0] * 2736 / 1920, crop[1] * 1795 / 1261, crop[2] * 2736 / 1920, crop[3] * 1795 / 1261]
        : [0, 0, 2736, 1795];
      const scale = Math.max(width / cropWidth, height / cropHeight);
      map.style.width = `${2736 * scale}px`;
      map.style.setProperty('--network-map-scale', String(2736 * scale / 1920));
      map.style.height = `${1795 * scale}px`;
      if (hasCrop) {
        const left = (width - cropWidth * scale) / 2 - x * scale;
        const top = (height - cropHeight * scale) / 2 - y * scale;
        stage.style.backgroundSize = `${2736 * scale}px ${1795 * scale}px`;
        stage.style.backgroundPosition = `${left}px ${top}px`;
        map.style.left = `${left}px`;
        map.style.top = `${top}px`;
        map.style.transform = 'none';
      }
    };
    syncMapViewport();
    if (stage && 'ResizeObserver' in window) new ResizeObserver(syncMapViewport).observe(stage);
    else window.addEventListener('resize', syncMapViewport, { passive: true });

    const pointsLayer = map.querySelector('.ltc-network-points');
    const regionMeta = Object.fromEntries(networkRegions.map((region) => [region.id, region]));
    const pointData = networkCityPoints.map(({ city, x, y, region, compact }) => ({
      city, x: x / 19.2, y: y / 12.61, region, compact
    }));
    const pointNodes = pointData.map((point, index) => {
      const button = document.createElement('button');
      button.className = 'ltc-network-point';
      button.type = 'button';
      button.dataset.x = String(point.x);
      button.dataset.y = String(point.y);
      button.dataset.region = point.region;
      button.dataset.pointId = String(index + 1);
      button.dataset.city = point.city;
      button.dataset.illustrative = 'true';
      button.style.setProperty('--network-point-art-size', point.compact ? '22px' : '34px');
      button.setAttribute('aria-label', `${point.city}城市分布示意点`);
      button.style.left = `${point.x}%`;
      button.style.top = `${point.y}%`;
      const visual = document.createElement('span');
      visual.className = 'ltc-network-dot';
      visual.setAttribute('aria-hidden', 'true');
      const dot = document.createElement('img');
      dot.src = `${networkAssetPath}station-dot.png`;
      dot.alt = '';
      dot.draggable = false;
      visual.append(dot);
      button.append(visual);
      button.style.setProperty('--network-enter-delay', `${(index % 25) * .05}s`);
      const pulseDuration = 3.6 + (index % 5) * .15;
      button.style.setProperty('--network-pulse-duration', `${pulseDuration}s`);
      button.style.setProperty('--network-pulse-delay', `${-((index * .619) % pulseDuration).toFixed(3)}s`);
      pointsLayer.append(button);
      return button;
    });

    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    const mobile = matchMedia('(max-width: 768px)');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let mapInView = false;

    // 点位与区域仅保留高亮反馈，不显示服务站编号或站点数量提示。
    const clearRegionHighlight = () => pointNodes.forEach((point) => point.classList.remove('is-region-peer'));
    const highlightRegion = (region, sourcePoint = null) => pointNodes.forEach((point) => {
      point.classList.toggle('is-region-peer', point !== sourcePoint && point.dataset.region === region);
    });
    const clearSelection = () => {
      pointNodes.forEach((point) => point.classList.remove('is-selected'));
      map.querySelectorAll('.ltc-network-region').forEach((region) => region.classList.remove('is-selected'));
      clearRegionHighlight();
    };

    pointNodes.forEach((point) => {
      const activate = () => {
        highlightRegion(point.dataset.region, point);
      };
      point.addEventListener('pointerenter', () => {
        if (finePointer.matches) activate();
      });
      point.addEventListener('pointerleave', () => {
        if (!finePointer.matches) return;
        clearRegionHighlight();
      });
      point.addEventListener('focus', activate);
      point.addEventListener('blur', () => {
        clearRegionHighlight();
      });
      point.addEventListener('click', (event) => {
        if (finePointer.matches) return;
        event.stopPropagation();
        const selected = point.classList.contains('is-selected');
        clearSelection();
        if (!selected) {
          point.classList.add('is-selected');
          activate();
        }
      });
    });

    map.querySelectorAll('.ltc-network-region').forEach((regionNode) => {
      const region = regionNode.dataset.region;
      const activate = () => {
        highlightRegion(region);
      };
      regionNode.addEventListener('pointerenter', () => {
        if (finePointer.matches) activate();
      });
      regionNode.addEventListener('pointerleave', () => {
        if (!finePointer.matches) return;
        clearRegionHighlight();
      });
      regionNode.addEventListener('focus', activate);
      regionNode.addEventListener('blur', () => {
        clearRegionHighlight();
      });
      regionNode.addEventListener('keydown', (event) => {
        if (event.key === ' ' || event.key === 'Enter') event.preventDefault();
      });
    });

    document.addEventListener('click', (event) => {
      if (!map.contains(event.target)) clearSelection();
    });

    const syncPulse = () => {
      map.classList.toggle('is-pulsing', mapInView && !mobile.matches && !reduceMotion.matches);
    };
    [mobile, reduceMotion].forEach((query) => {
      if (query.addEventListener) query.addEventListener('change', syncPulse);
      else query.addListener(syncPulse);
    });
    if ('IntersectionObserver' in window) {
      const mapObserver = new IntersectionObserver(([entry]) => {
        mapInView = entry.isIntersecting;
        if (mapInView) map.classList.add('is-entered');
        syncPulse();
      }, { threshold: .15, rootMargin: '0px 0px -4% 0px' });
      mapObserver.observe(map);
    } else {
      mapInView = true;
      map.classList.add('is-entered');
      syncPulse();
    }
  });

  // Figma service-chain timeline: slow continuous movement plus direct drag,
  // trackpad, touch, and keyboard controls. The track is intentionally finite:
  // once the last card is reached it stops instead of looping back to the start.
  document.querySelectorAll('.ltc-chain-track').forEach((track) => {
    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let inView = false;
    let lastFrame = performance.now();
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const maxScrollLeft = () => Math.max(0, track.scrollWidth - track.clientWidth);
    const clampScrollLeft = (value) => Math.min(maxScrollLeft(), Math.max(0, value));

    if ('IntersectionObserver' in window) {
      const chainObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        lastFrame = performance.now();
      }, { threshold: 0.12 });
      chainObserver.observe(track);
    } else {
      inView = true;
    }

    const autoMove = (now) => {
      const elapsed = Math.min(now - lastFrame, 40);
      lastFrame = now;
      if (!reduceMotion && inView && !dragging && !document.hidden) {
        track.scrollLeft = clampScrollLeft(track.scrollLeft + elapsed * 0.018);
      }
      requestAnimationFrame(autoMove);
    };
    requestAnimationFrame(autoMove);

    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      dragging = true;
      startX = event.clientX;
      startScrollLeft = track.scrollLeft;
      track.classList.add('is-dragging');
      track.setPointerCapture(event.pointerId);
    });
    track.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      track.scrollLeft = clampScrollLeft(startScrollLeft - (event.clientX - startX));
    });
    const stopDragging = (event) => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
      track.scrollLeft = clampScrollLeft(track.scrollLeft);
      lastFrame = performance.now();
    };
    track.addEventListener('pointerup', stopDragging);
    track.addEventListener('pointercancel', stopDragging);
    track.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const card = track.querySelector('article');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 24;
      const nextScrollLeft = clampScrollLeft(track.scrollLeft + direction * ((card?.offsetWidth || 302) + gap));
      track.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
    });
    track.addEventListener('wheel', (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      if (track.scrollWidth <= track.clientWidth) return;
      track.scrollLeft = clampScrollLeft(track.scrollLeft + event.deltaY);
      event.preventDefault();
    }, { passive: false });
    track.addEventListener('scroll', () => {
      const boundedScrollLeft = clampScrollLeft(track.scrollLeft);
      if (boundedScrollLeft !== track.scrollLeft) track.scrollLeft = boundedScrollLeft;
    });
  });

  const restorePagePosition = () => {
    const target = currentNavigationTarget();
    if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
    else scrollTo(0, 0);
  };
  const navigation = performance.getEntriesByType('navigation')[0];
  addEventListener('hashchange', () => {
    if (currentNavigationTarget()) restorePagePosition();
  });
  if (navigation?.type === 'reload') restorePagePosition();
  addEventListener('pageshow', (event) => {
    if (currentNavigationTarget() || event.persisted || navigation?.type === 'reload') restorePagePosition();
    document.documentElement.classList.remove('page-restoring');
  });
})();
