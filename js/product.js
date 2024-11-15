// JavaScript Document
$(function () {
  // 获取 URL 参数
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // 检查 URL 参数并打开相应的 tab
  const tabIndex = getQueryParam('tab');
  if (tabIndex !== null) {
    // 如果 URL 中有 tab 参数，显示对应的内容并添加选中样式
    $('#tab_content div').eq(tabIndex).show().siblings().fadeOut();
    $('#tab_nav div').eq(tabIndex).addClass("product_nav").siblings().removeClass("product_nav");
    $('#tab_nav div').eq(tabIndex).removeClass("tab_nav").siblings().addClass("tab_nav");
  }
  const tab1Index = getQueryParam('tab1');
  if (tab1Index !== null) {
    // 如果 URL 中有 tab 参数，显示对应的内容并添加选中样式
    $('#tab_content div').eq(tab1Index).show().siblings().fadeOut();
    $('#tab_nav1 div').eq(tab1Index).addClass("product_nav1").siblings().removeClass("product_nav1");
    $('#tab_nav1 div').eq(tab1Index).removeClass("tab_nav1").siblings().addClass("tab_nav1");
  }
})
$(function () {
  $("#tab_nav div").click(function () {
    var i = $(this).index();//下标第一种写法
    //var i = $('tit').index(this);//下标第二种写法
    //$(this).addClass('tab1').siblings().removeClass('tab1');
    $('#tab_content div').eq(i).fadeIn().siblings().fadeOut();
    $(this).addClass("product_nav").siblings().removeClass("product_nav");
    $(this).removeClass("tab_nav").siblings().addClass("tab_nav");
  });
  //玫瑰茄页面
  $("#tab_nav1 div").click(function () {
    var i = $(this).index();//下标第一种写法
    //var i = $('tit').index(this);//下标第二种写法
    //$(this).addClass('tab1').siblings().removeClass('tab1');
    $('#tab_content div').eq(i).fadeIn().siblings().fadeOut();
    $(this).addClass("product_nav1").siblings().removeClass("product_nav1");
    $(this).removeClass("tab_nav1").siblings().addClass("tab_nav1");
  });
});

//
$(function () {
  $(".jrpic").click(function () {
    var _this = $(this);//将当前的pimg元素作为_this传入函数 
    imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
  });
});
function imgShow(outerdiv, innerdiv, bigimg, _this) {
  var src = _this.attr("src");//获取当前点击的pimg元素中的src属性 
  $(bigimg).attr("src", src);//设置#bigimg元素的src属性 
  /*获取当前点击图片的真实大小，并显示弹出层及大图*/
  $("<img/>").attr("src", src).load(function () {
    var windowW = $(window).width();//获取当前窗口宽度 
    var windowH = $(window).height();//获取当前窗口高度 
    var realWidth = this.width;//获取图片真实宽度 
    var realHeight = this.height;//获取图片真实高度 
    var imgWidth, imgHeight;
    var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放 
    if (realHeight > windowH * scale) {//判断图片高度 
      imgHeight = windowH * scale;//如大于窗口高度，图片高度进行缩放 
      imgWidth = imgHeight / realHeight * realWidth;//等比例缩放宽度 
      if (imgWidth > windowW * scale) {//如宽度扔大于窗口宽度 
        imgWidth = windowW * scale;//再对宽度进行缩放 
      }
    } else if (realWidth > windowW * scale) {//如图片高度合适，判断图片宽度 
      imgWidth = windowW * scale;//如大于窗口宽度，图片宽度进行缩放 
      imgHeight = imgWidth / realWidth * realHeight;//等比例缩放高度 
    } else {//如果图片真实高度和宽度都符合要求，高宽不变 
      imgWidth = realWidth;
      imgHeight = realHeight;
    }
    $(bigimg).css("width", imgWidth);//以最终的宽度对图片缩放 
    var w = (windowW - imgWidth) / 2;//计算图片与窗口左边距 
    var h = (windowH - imgHeight) / 2;//计算图片与窗口上边距 
    $(innerdiv).css({ "top": h, "left": w });//设置#innerdiv的top和left属性 
    $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg 
  });
  $(outerdiv).click(function () {//再次点击淡出消失弹出层 
    $(this).fadeOut("fast");
  });
}
$(function () {
  // 获取 URL 参数
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // 获取文档参数
  const docParam = getQueryParam('doc');
  let docSrc = '';

  // 根据 doc 参数设置不同的文档路径
  switch (docParam) {
    case '1':
      docSrc = 'qj-web/doc/doc_html/7、 消癖（金蓉）颗粒对三阴性乳腺癌患者CXCL1及预后指标的调节作用：随机对照临床试验-郭莉.html';
      break;
    case '2':
      docSrc = 'qj-web/doc/doc_html/9、消癖颗粒改善三阴性乳腺癌巩固期患者生存质量的探索性研究.html';
      break;
    case '3':
      docSrc = 'qj-web/doc/doc_html/10、金蓉颗粒联合新辅助化疗治疗...应激、肿瘤标志物水平的影响_张霞.html';
      break;
    case '4':
      docSrc = 'qj-web/doc/doc_html/11、金蓉颗粒抗乳腺癌物质基础及作用机制研究_曾弦.html';
      break;
    case '5':
      docSrc = 'qj-web/doc/doc_html/12、金蓉颗粒抗乳腺增生和抗乳腺癌活性及其临床应用的研究现状.html';
      break;
    case '6':
      docSrc = 'qj-web/doc/doc_html/8、全国名中医林毅五十年乳腺癌临证精要（1031周校对）.html';
      break;
    case '7':
      docSrc = 'qj-web/doc/doc_html/1、基于网络药理学的TAMSCXCL-1验证是消癖颗粒预防乳腺癌发生和转移的关键介质0808.html';
      break;
    case '8':
      docSrc = 'qj-web/doc/doc_html/2、消癖颗粒通过抑制肿瘤TAMsCXCL1通路抑制乳腺癌干细胞0808.html';
      break;
    case '9':
      docSrc = 'qj-web/doc/doc_html/3、消癖颗粒通过抑制TAMsCXCL1信号通路抑制乳腺癌转移前微环境的形成0808.html';
      break;
    case '10':
      docSrc = 'qj-web/doc/doc_html/4、消癖颗粒通过抑制CXCL1HMGB1介导的自噬提高乳腺癌化疗敏感性0808.html';
      break;
    case '11':
      docSrc = 'qj-web/doc/doc_html/5、中药消癖颗粒代谢产物分析：基于UPLC-Q-Orbitrap MS结合网络药理学分析的综合策略0326.html';
      break;
    case '12':
      docSrc = 'qj-web/doc/doc_html/6、宝藿苷i通过下调肿瘤相关巨噬细胞C-X-C基序趋化因子配体1通路抑制乳腺癌转移0326.html';
      break;
    case '13':
      docSrc = 'qj-web/doc/doc_html/10、金蓉颗粒联合新辅助化疗治疗...应激、肿瘤标志物水平的影响_张霞.html';
      break;
    case '14':
      docSrc = 'qj-web/doc/doc_html/10、金蓉颗粒联合新辅助化疗治疗...应激、肿瘤标志物水平的影响_张霞.html';
      break;

    case '15':
      docSrc = 'qj-web/doc/doc_html/10、金蓉颗粒联合新辅助化疗治疗...应激、肿瘤标志物水平的影响_张霞.html';
      break;
    case '16':
      docSrc = 'qj-web/doc/doc_html/10、金蓉颗粒联合新辅助化疗治疗...应激、肿瘤标志物水平的影响_张霞.html';
      break;
    default:
      docSrc = 'qj-web/404.html';  // 默认页面
  }

  // 设置 iframe 的 src
  $('#contentIframe').attr('src', docSrc);

  // 动态调整 iframe 高度
  $('#contentIframe').on('load', function () {
    try {
      const iframeContent = this.contentWindow.document.documentElement;
      const newHeight = iframeContent.scrollHeight;
      $(this).css('height', newHeight + 'px');
    } catch (e) {
      console.error('无法访问 iframe 内容，检查跨域问题:', e);
    }
  });
});