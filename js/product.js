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
    	$(function() {  
			$("#tab_nav div").click(function(){
				var i = $(this).index();//下标第一种写法
				//var i = $('tit').index(this);//下标第二种写法
				//$(this).addClass('tab1').siblings().removeClass('tab1');
				$('#tab_content div').eq(i).fadeIn().siblings().fadeOut();
				$(this).addClass("product_nav").siblings().removeClass("product_nav");
				$(this).removeClass("tab_nav").siblings().addClass("tab_nav");
			});
			//玫瑰茄页面
			$("#tab_nav1 div").click(function(){
				var i = $(this).index();//下标第一种写法
				//var i = $('tit').index(this);//下标第二种写法
				//$(this).addClass('tab1').siblings().removeClass('tab1');
				$('#tab_content div').eq(i).fadeIn().siblings().fadeOut();
				$(this).addClass("product_nav1").siblings().removeClass("product_nav1");
				$(this).removeClass("tab_nav1").siblings().addClass("tab_nav1");
			});
    	});
		
//
	$(function(){ 
    $(".jrpic").click(function(){ 
      var _this = $(this);//将当前的pimg元素作为_this传入函数 
      imgShow("#outerdiv", "#innerdiv", "#bigimg", _this); 
    }); 
  }); 
  function imgShow(outerdiv, innerdiv, bigimg, _this){ 
    var src = _this.attr("src");//获取当前点击的pimg元素中的src属性 
    $(bigimg).attr("src", src);//设置#bigimg元素的src属性 
      /*获取当前点击图片的真实大小，并显示弹出层及大图*/
    $("<img/>").attr("src", src).load(function(){ 
      var windowW = $(window).width();//获取当前窗口宽度 
      var windowH = $(window).height();//获取当前窗口高度 
      var realWidth = this.width;//获取图片真实宽度 
      var realHeight = this.height;//获取图片真实高度 
      var imgWidth, imgHeight; 
      var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放 
      if(realHeight>windowH*scale) {//判断图片高度 
        imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放 
        imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度 
        if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度 
          imgWidth = windowW*scale;//再对宽度进行缩放 
        } 
      } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度 
        imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放 
              imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度 
      } else {//如果图片真实高度和宽度都符合要求，高宽不变 
        imgWidth = realWidth; 
        imgHeight = realHeight; 
      } 
          $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放 
      var w = (windowW-imgWidth)/2;//计算图片与窗口左边距 
      var h = (windowH-imgHeight)/2;//计算图片与窗口上边距 
      $(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性 
      $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg 
    }); 
    $(outerdiv).click(function(){//再次点击淡出消失弹出层 
      $(this).fadeOut("fast"); 
    }); 
  }
