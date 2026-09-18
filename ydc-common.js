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
  // 初步配准后再逐点核查陆地；最终修正与边界检查位于 previews/network-placement/audit/。
  // 图标、字体不参与形变；原有小点仅保留示意，不新增未经确认的服务城市。
  const networkAssetPath = '网站切图/认识易得康/network-icons/';
  const networkRegions = [
    {"id": "bohai", "label": "环渤海区", "x": 1184, "y": 713, "size": 216, "badgeX": 1143, "badgeY": 637, "badgeWidth": 92},
    {"id": "delta", "label": "长三角区", "x": 1294, "y": 887, "size": 168, "badgeX": 1318, "badgeY": 814, "badgeWidth": 92},
    {"id": "central", "label": "华中区", "x": 1131.8, "y": 926.0, "size": 168, "badgeX": 1086.8, "badgeY": 860.0, "badgeWidth": 90},
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
    {"text": "天津市", "x": 1205, "y": 752, "anchorX": 1184, "anchorY": 739, "leader": true},
    {"text": "黑龙江省", "x": 1362.5, "y": 621.2, "anchorX": 1362.5, "anchorY": 621.2},
    {"text": "吉林省", "x": 1362.2, "y": 666.7, "anchorX": 1352.2, "anchorY": 666.7},
    {"text": "辽宁省", "x": 1300, "y": 688, "anchorX": 1300, "anchorY": 688},
    {"text": "山东省", "x": 1198, "y": 807, "anchorX": 1227.3, "anchorY": 796.6, "leader": true},
    {"text": "河南省", "x": 1128.1, "y": 853, "anchorX": 1128.1, "anchorY": 864.1},
    {"text": "江苏省", "x": 1238, "y": 888, "anchorX": 1260.6, "anchorY": 871.2},
    {"text": "安徽省", "x": 1210, "y": 924, "anchorX": 1197.1, "anchorY": 915.5},
    {"text": "上海市", "x": 1350, "y": 901, "anchorX": 1294, "anchorY": 887, "leader": true},
    {"text": "浙江省", "x": 1275.2, "y": 959.1, "anchorX": 1275.2, "anchorY": 959.1},
    {"text": "四川省", "x": 856.4, "y": 909.4, "anchorX": 874.4, "anchorY": 907.4},
    {"text": "重庆市", "x": 975.5, "y": 941.6, "anchorX": 963.5, "anchorY": 941.6},
    {"text": "湖北省", "x": 1086.3, "y": 923.8, "anchorX": 1101.3, "anchorY": 913.8},
    {"text": "湖南省", "x": 1035, "y": 1004, "anchorX": 1070.4, "anchorY": 1002.4, "leader": true},
    {"text": "江西省", "x": 1165.1, "y": 995.2, "anchorX": 1165.1, "anchorY": 995.2},
    {"text": "福建省", "x": 1219.5, "y": 1035.0, "anchorX": 1219.5, "anchorY": 1035.0},
    {"text": "贵州省", "x": 953, "y": 988, "anchorX": 961.0, "anchorY": 993.6},
    {"text": "云南省", "x": 868.9, "y": 1030.6, "anchorX": 868.9, "anchorY": 1030.6},
    {"text": "广西壮族自治区", "x": 980, "y": 1051, "anchorX": 980, "anchorY": 1048},
    {"text": "广东省", "x": 1165, "y": 1065, "anchorX": 1164, "anchorY": 1045},
    {"text": "香港", "x": 1198, "y": 1091, "anchorX": 1138, "anchorY": 1068, "leader": true},
    {"text": "澳门", "x": 1120, "y": 1125, "anchorX": 1117, "anchorY": 1082, "leader": true},
    {"text": "台湾省", "x": 1306.4, "y": 1048.0, "anchorX": 1306.4, "anchorY": 1048.0},
    {"text": "海南省", "x": 992.3, "y": 1159.4, "anchorX": 1039.3, "anchorY": 1154.4, "leader": true}
  ];
  const networkRegionPoints = {
    "bohai": [[1312.5, 618.1], [1305.0, 664.0], [1264, 685], [1179.6, 727.7], [1282, 701], [1175, 746], [1165.0, 760.7], [1239.3, 778.5], [1206.8, 783.5]],
    "delta": [[1224.4, 851.9], [1253.2, 853.9], [1273, 888], [1239.3, 935.0], [1233.4, 964.7], [1259, 979], [1245, 994], [1204.5, 1002.2]],
    "central": [[1133.0, 828.4], [1102.2, 830.6], [1181.3, 919.5], [1057.5, 938.8], [1098.2, 935.8], [1054.6, 974.0], [1140.5, 968.4], [1177.1, 964.1], [1082.6, 988.2], [1098.4, 998.9], [984.3, 996.7], [1090.8, 1020.6], [1244, 1009]],
    "west": [[1006.1, 746.4], [922.7, 783.7], [944.4, 865.0], [893.3, 874.7], [923.6, 925.2], [985.7, 965.3]],
    "bay": [[994.9, 1027.5], [1065.4, 1067.7], [983, 1064], [1003, 1074], [1192.8, 1047.9], [1138, 1068], [1094, 1086], [1117, 1082], [1067, 1094], [1074, 1137], [1068, 1157], [1030, 1153], [1046, 1167]]
  };
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
    <div class="ltc-network-points" aria-label="服务城市与站点分布"></div>
    <svg class="ltc-network-badges" viewBox="0 0 1920 1261" preserveAspectRatio="none" aria-hidden="true">
      ${networkRegions.map((region) => `
        <rect x="${region.badgeX}" y="${region.badgeY}" width="${region.badgeWidth}" height="37" rx="5"></rect>
        <image href="${networkAssetPath}${region.id}.png" x="${region.badgeX}" y="${region.badgeY}" width="${region.badgeWidth}" height="37"></image>`).join('')}
    </svg>
    <p class="ydc-sr-only">易得康服务网络覆盖 73 个城市，包含环渤海区、长三角区、华中区、大湾区与西部区。</p>`;

  document.querySelectorAll('[data-ydc-network-map]').forEach((map) => {
    map.innerHTML = networkMapMarkup;

    // 标注画板与底图共用 cover 比例及裁切中心。
    const stage = map.closest('.ydc-network-stage');
    const syncMapViewport = () => {
      if (!stage) return;
      const { width, height } = stage.getBoundingClientRect();
      const scale = Math.max(width / 2736, height / 1795);
      map.style.width = `${2736 * scale}px`;
      map.style.setProperty('--network-map-scale', String(2736 * scale / 1920));
      map.style.height = `${1795 * scale}px`;
    };
    syncMapViewport();
    if (stage && 'ResizeObserver' in window) new ResizeObserver(syncMapViewport).observe(stage);
    else window.addEventListener('resize', syncMapViewport, { passive: true });

    const pointsLayer = map.querySelector('.ltc-network-points');
    const regionMeta = Object.fromEntries(networkRegions.map((region) => [region.id, region]));
    const pointData = Object.entries(networkRegionPoints).flatMap(([region, points]) =>
      points.map(([x, y]) => ({ x: x / 19.2, y: y / 12.61, region }))
    );
    const pointNodes = pointData.map((point, index) => {
      const button = document.createElement('button');
      button.className = 'ltc-network-point';
      button.type = 'button';
      button.dataset.x = String(point.x);
      button.dataset.y = String(point.y);
      button.dataset.region = point.region;
      button.dataset.pointId = String(index + 1);
      button.setAttribute('aria-label', `${regionMeta[point.region].label}服务站`);
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
