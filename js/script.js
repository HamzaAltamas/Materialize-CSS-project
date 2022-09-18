// side nav
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// nav dropdown trigger
$(".dropdown-trigger").dropdown();

// modal trigger
$(document).ready(function () {
  $(".modal").modal();
});

// modal placeholder name color change
$(".name-modal-inputs").click(function () {
  $(".name-input-name").addClass("input-name-color-change");
  $(".nameicon").addClass("input-name-color-change");
});

// modal placeholder telephone color change

$(".tel-modal-inputs").click(function () {
  $(".tel-input-name").addClass("input-name-color-change");
  $(".telicon").addClass("input-name-color-change");
});

// modal placeholder email color change

$(".mail-modal-inputs").click(function () {
  $(".mail-input-name").addClass("input-name-color-change");
  $(".mailicon").addClass("input-name-color-change");
});

// modal placeholder message color change

$(".msg-modal-inputs").click(function () {
  $(".msg-input-name").addClass("input-name-color-change");
  $(".msgicon").addClass("input-name-color-change");
});

// theme btn icon change
$(".theme-btn").click(function () {
  if ($(".theme-icon").text() === "brightness_2") {
    $(".theme-icon").text("brightness_high");
  } else {
    $(".theme-icon").text("brightness_2");
  }
});

// color change on theme btn

$(".theme-btn").click(function () {
  $("body").toggleClass("theme-changed");
});
