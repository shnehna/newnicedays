//配色存入数组
var color = [
  {
    color1: "#085f63",
    color2: "#49beb7",
    color3: "#facf5a",
    color4: "#ff5959",
  },
  {
    color1: "#fffeec",
    color2: "#aeddcd",
    color3: "#e4508f",
    color4: "#556fb5",
  },
  {
    color1: "#588da8",
    color2: "#ccafaf",
    color3: "#e58a8a",
    color4: "#d8345f",
  },
  {
    color4: "#c1224f",
    color3: "#f16f6f",
    color2: "#94d2e6",
    color1: "#fff78f",
  },
  {
    color1: "#ff6473",
    color2: "#757882",
    color3: "#5cc1b3",
    color4: "#6ef7c8",
  },
  {
    color4: "#ffeaa5",
    color3: "#fe5f55",
    color2: "#c7efcf",
    color1: "#eef5db",
  },
  {
    color4: "#ed7575",
    color3: "#be6283",
    color2: "#40dab2",
    color1: "#b7e778",
  },
  {
    color1: "#92e6e6",
    color2: "#fff9af",
    color3: "#d65d7a",
    color4: "#524c84",
  },
  {
    color1: "#fff9e0",
    color2: "#f1c550",
    color3: "#ff6600",
    color4: "#ce2525",
  },
  {
    color1: "#a8e6cf",
    color2: "#fdffab",
    color3: "#ffd3b6",
    color4: "#ffaaa5",
  },
];

var count = 0;

//初始化随机配色
var i = Math.floor(Math.random(1) * 10);
changColor(".color1", "13%", color[i].color1);
changColor(".color2", "23%", color[i].color2);
changColor(".color3", "33%", color[i].color3);
changColor(".color4", "40%", color[i].color4);

$(".panel").css({
  width: "30%",
  transition: " width 0.7s",
  "-webkit-transition": " width 0.7s",
});

$("#login").click(function () {
  $(".switch span").removeClass("active");
  $(this).addClass("active");

  $(this).parents(".content").removeClass("signup");
  $(this).parents(".content").addClass("login");

  $("form button").text("LOGIN");

  // background
  var bc_color = getColor();
  changColor(".color1", "13%", bc_color.color1);
  changColor(".color2", "23%", bc_color.color2);
  changColor(".color3", "33%", bc_color.color3);
  changColor(".color4", "40%", bc_color.color4);

  $(".panel").css({
    width: "30%",
    transition: " width 0.7s",
    "-webkit-transition": " width 0.7s",
  });
});
$("#signup").click(function () {
  $(".switch span").removeClass("active");
  $(this).addClass("active");

  $(this).parents(".content").removeClass("login");
  $(this).parents(".content").addClass("signup");

  $("form button").text("SIGNUP");

  //bc_color

  var bc_color = getColor();
  changColor(".color1", "40%", bc_color.color1);
  changColor(".color2", "33%", bc_color.color2);
  changColor(".color3", "27%", bc_color.color3);
  changColor(".color4", "13%", bc_color.color4);
  $(".panel").css({
    width: "41%",
    transition: " width 0.7s",
    "-webkit-transition": " width 0.7s",
  });
});

$(".input input").on("focus", function () {
  $(this).parent().addClass("focus");
});

// 失去焦点
blur = ["#useremail", "#username", "#password", "#passwordpw"];
function inputBlur() {
  blur.forEach((e) => {
    $(e).on("blur", function () {
      if ($(e).val().length == 0) {
        $(this).parent().removeClass("focus");
      }
    });
  });
}
inputBlur();

//更换配色
function changColor(selector, width, color) {
  $(selector).css({
    width: width,
    transition: " width 0.7s,background-color 0.7s linear",
    "-webkit-transition": " width 0.7s,background-color 0.7s linear",
    "background-color": color,
  });
}

function getColor() {
  if (count == color.length - 1) {
    return color[(count = 0)];
  }

  return color[count++];
}
console.log("login");
var reg = /^[a-zA-Z0-9_]{3,16}$/;
$("button").one("click", function () {
  console.log("login");
  if ($(".active").text() == "Sign Up") {
    // $('form').attr('action','LoginHome.html');
    console.log("sign");
    $("form").submit(function () {
      var useremail = $("#useremail").val().trim();
      if (useremail.length == 0) {
        alert("邮箱不能为空");
        return false;
      }
      var username = $("#username").val().trim();
      if (username.length == 0) {
        alert("账号不能为空");
        return false;
      }
      var password = $("#password").val().trim();
      if (password.length == 0) {
        alert("密码不能为空");
        return false;
      }
      var passwordpw = $("#passwordpw").val().trim();
      if (passwordpw.length == 0) {
        alert("密码不能为空");
        return false;
      }
    });
  }

  if ($(".active").text() == "Login") {
    // $('form').attr('action','LoginHome.html');
    console.log("login");
    // 登录验证
    $("form").submit(function () {
      var username = $("#username").val().trim();
      if (username.length == 0) {
        alert("账号不能为空");
        return false;
      }
      console.log($("#submitId").serializeArray());
      var password = $("#password").val().trim();
      if (password.length == 0) {
        alert("密码不能为空");
        return false;
      }
      console.log($("#username").val());
      $.ajax({
        type: "POST",
        url: "http://localhost:80/use/check.do",
        data: $("#submitId").serializeArray(),
        // contentType: "application/x-www-form-urlencoded",
        // dataType: "text",
        async:false,
        // use 是后台返回的result
        success: function (use) {
          // 如果给了回调函数的引用，也就是不为空，就使用回调

          window.location.href = "1/LoginHome.html";
        },
        error: function () {
          alert("访问失败，请稍后再试");
        },
      });
      // axPost("/use/check.do",{username:$("#username").val(),password:$("#password").val()},function(use){
    });
  }
});
// js闭包(为了锁定作用域)
// ;(function($){
//     let ax = function(type,url,data,callback){
//         $.ajax({
//             type:type,
//             url:`http://localhost:8080${url}`,
//             data:$(),
//             dataType:"json",
//             // rst 是后台返回的result
//             success:function(use){
//                 // 如果给了回调函数的引用，也就是不为空，就使用回调
//                 if(callback){
//                     callback(rst);
//                 }else{
//                     alert(`操作${rst.code="200"?"成功":"失败"}`);
//                 }
//             },
//             error:function(){
//                 alert("访问失败，请稍后再试");
//             }
//         });
//     }

//     // 释放闭包中的访问权限
//     this.axGet = function(url,data,callback){
//         ax("GET",url,data,callback)
//     }
//     this.axPost = function(url,data,callback){
//         ax("POST",url,data,callback)
//     }

// })(jQuery);
