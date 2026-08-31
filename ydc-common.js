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
            <a href="mailto:info@ydcare.com">企业邮箱：info@ydcare.com</a>
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

  // 全国服务网络公共组件：两个页面从同一份 SVG、点位数据与交互逻辑渲染。
  // 后续只需修改这里和对应的公共 CSS，两处地图会自动同步。
  const networkMapMarkup = `
    <img class="ltc-network-labels" src="网站切图/认识易得康/figma/network-labels-adjusted.png" alt="" aria-hidden="true">
    <img class="ltc-network-hainan-label" src="网站切图/认识易得康/figma/network-labels-adjusted.png" alt="" aria-hidden="true">
    <svg class="ltc-network-regions" viewBox="0 0 1920 1261" preserveAspectRatio="none" aria-label="五大服务区域">
      <g class="ltc-network-region" data-region="bohai" data-x="66.774" data-y="49.271" role="button" tabindex="0" aria-label="环渤海区">
        <ellipse cx="1282" cy="621" rx="114" ry="114" data-region="bohai"></ellipse>
        <rect x="1237" y="543" width="90" height="35" rx="5"></rect>
        <text x="1282" y="568">环渤海区</text>
      </g>
      <g class="ltc-network-region" data-region="delta" data-x="67.849" data-y="67.843" role="button" tabindex="0" aria-label="长三角区">
        <ellipse cx="1303" cy="856" rx="84" ry="84" data-region="delta"></ellipse>
        <rect x="1258" y="796" width="90" height="35" rx="5"></rect>
        <text x="1303" y="821">长三角区</text>
      </g>
      <g class="ltc-network-region" data-region="central" data-x="59.495" data-y="71.57" role="button" tabindex="0" aria-label="华中区">
        <ellipse cx="1142" cy="902" rx="84" ry="84" data-region="central"></ellipse>
        <rect x="1097" y="856" width="90" height="35" rx="5"></rect>
        <text x="1142" y="881">华中区</text>
      </g>
      <g class="ltc-network-region" data-region="bay" data-x="56.462" data-y="85.493" role="button" tabindex="0" aria-label="大湾区">
        <ellipse cx="1084" cy="1078" rx="102" ry="102" data-region="bay"></ellipse>
        <rect x="1039" y="1022" width="90" height="35" rx="5"></rect>
        <text x="1084" y="1047">大湾区</text>
      </g>
      <g class="ltc-network-region" data-region="west" data-x="48.199" data-y="69.739" role="button" tabindex="0" aria-label="西部区">
        <ellipse cx="925" cy="879" rx="89" ry="89" data-region="west"></ellipse>
        <rect x="880" y="824" width="90" height="35" rx="5"></rect>
        <text x="925" y="849">西部区</text>
      </g>
    </svg>
    <div class="ltc-network-points" aria-label="服务城市与站点分布"></div>
    <div class="ltc-network-tooltip" role="status" aria-live="polite"></div>
    <p class="ydc-sr-only">易得康服务网络覆盖 73 个城市，包含环渤海区、长三角区、华中区、大湾区与西部区。</p>`;

  document.querySelectorAll('[data-ydc-network-map]').forEach((map) => {
    map.innerHTML = networkMapMarkup;
    const pointsLayer = map.querySelector('.ltc-network-points');
    const tooltip = map.querySelector('.ltc-network-tooltip');
    if (!pointsLayer || !tooltip) return;

    const regionMeta = {
      bohai: { label: '环渤海区', x: 66.774, y: 49.271 },
      delta: { label: '长三角区', x: 67.849, y: 67.843 },
      central: { label: '华中区', x: 59.495, y: 71.57 },
      west: { label: '西部区', x: 48.199, y: 69.739 },
      bay: { label: '大湾区', x: 56.462, y: 85.493 }
    };
    const regionPoints = {
      bohai: [
        [70.246,42.87],[71.346,47.948],[66.774,49.271,'hub'],[70.349,52.548],
        [62.7,52.931],[68.923,53.961],[62.0,54.132],[63.13,55.298],
        [65.282,56.469],[64.291,57.378]
      ],
      delta: [
        [64.566,66.146],[65.725,67.15],[67.849,67.843,'hub'],[69.249,70.647],
        [66.605,73.232],[66.608,74.905],[68.914,75.312],[66.883,75.818],
        [67.65,76.734]
      ],
      central: [
        [61.317,64.972],[60.378,66.137],[63.79,70.971],[59.495,71.57,'hub'],
        [58.558,72.485],[60.757,72.98],[58.061,74.152],[62.854,75.556],
        [65.006,75.82],[60.271,76.062],[60.932,77.147],[54.53,77.152],
        [60.161,77.583],[66.441,79.819]
      ],
      west: [
        [53.765,58.466],[49.842,62.891],[52.399,68.142],[48.199,69.739,'hub'],
        [50.471,71.403],[50.909,72.565],[52.564,74.154]
      ],
      bay: [
        [54.261,78.982],[58.223,81.889],[51.226,81.987],[52,81.991],
        [63.794,82.412],[61.505,82.65],[60.306,83.277],[61.028,83.914],
        [59.683,84.61],[56.462,85.493,'hub'],[57.003,88.787],[56.397,89.451],
        [55.962,90.286],[55.619,91.228]
      ]
    };
    const regionEntries = Object.entries(regionMeta);
    const pointData = Object.entries(regionPoints).flatMap(([region, points]) =>
      points.map(([x, y, kind]) => ({ x, y, kind, region }))
    );
    const regionStationNumber = Object.fromEntries(regionEntries.map(([key]) => [key, 0]));
    const pointNodes = pointData.map((point, index) => {
      const button = document.createElement('button');
      const stationNumber = ++regionStationNumber[point.region];
      const stationName = `${regionMeta[point.region].label}服务站 ${String(stationNumber).padStart(2, '0')}`;
      button.className = 'ltc-network-point';
      if (point.kind === 'hub') button.classList.add('is-region-hub');
      button.type = 'button';
      button.dataset.x = String(point.x);
      button.dataset.y = String(point.y);
      button.dataset.region = point.region;
      button.dataset.station = stationName;
      if (point.y >= 89 && point.x <= 57) button.classList.add('is-hainan-point');
      if (point.region === 'bohai') button.classList.add('is-bohai-point');
      button.setAttribute('aria-label', stationName);
      button.style.left = `${point.x}%`;
      button.style.top = `${point.y}%`;
      // 0.05 秒一档循环错开，含 0.3 秒渐入后总时长不超过 1.5 秒。
      button.style.setProperty('--network-enter-delay', `${(index % 25) * .05}s`);
      // 与 2 秒脉冲周期错开相位，避免所有点同步闪动。
      button.style.setProperty('--network-pulse-delay', `${-((index * .137) % 2).toFixed(3)}s`);
      pointsLayer.append(button);
      return button;
    });

    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    const mobile = matchMedia('(max-width: 768px)');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let mapInView = false;

    const showTooltip = (text, x, y, offsetX = 0, offsetY = 0) => {
      tooltip.textContent = text;
      tooltip.style.left = `calc(${x}% + ${offsetX}px)`;
      tooltip.style.top = `calc(${y}% + ${offsetY}px)`;
      tooltip.classList.add('is-visible');
    };
    const hideTooltip = () => tooltip.classList.remove('is-visible');
    const clearRegionHighlight = () => pointNodes.forEach((point) => point.classList.remove('is-region-peer'));
    const highlightRegion = (region, sourcePoint = null) => pointNodes.forEach((point) => {
      point.classList.toggle('is-region-peer', point !== sourcePoint && point.dataset.region === region);
    });
    const clearSelection = () => {
      pointNodes.forEach((point) => point.classList.remove('is-selected'));
      map.querySelectorAll('.ltc-network-region').forEach((region) => region.classList.remove('is-selected'));
      clearRegionHighlight();
      hideTooltip();
    };

    pointNodes.forEach((point) => {
      const activate = () => {
        highlightRegion(point.dataset.region, point);
        const localOffset = point.classList.contains('is-hainan-point')
          ? [10, -10]
          : point.classList.contains('is-bohai-point') ? [0, 15] : [0, 0];
        showTooltip(point.dataset.station, Number(point.dataset.x), Number(point.dataset.y), ...localOffset);
      };
      point.addEventListener('pointerenter', () => {
        if (finePointer.matches) activate();
      });
      point.addEventListener('pointerleave', () => {
        if (!finePointer.matches) return;
        clearRegionHighlight();
        hideTooltip();
      });
      point.addEventListener('focus', activate);
      point.addEventListener('blur', () => {
        clearRegionHighlight();
        hideTooltip();
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
      const text = `${regionMeta[region].label} ${regionStationNumber[region]} 个站点`;
      regionNode.setAttribute('aria-label', text);
      const activate = () => {
        highlightRegion(region);
        const regionOffset = region === 'bohai' ? [0, 15] : [0, 0];
        showTooltip(text, Number(regionNode.dataset.x), Number(regionNode.dataset.y), ...regionOffset);
      };
      regionNode.addEventListener('pointerenter', () => {
        if (finePointer.matches) activate();
      });
      regionNode.addEventListener('pointerleave', () => {
        if (!finePointer.matches) return;
        clearRegionHighlight();
        hideTooltip();
      });
      regionNode.addEventListener('focus', activate);
      regionNode.addEventListener('blur', () => {
        clearRegionHighlight();
        hideTooltip();
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
