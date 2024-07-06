// <refrence types="../@types/jquery"/>

// side-menu
$(".side-menu").on("click", function () {
  if ($(".menu").css("left") == "0px") {
    $(".menu").animate({ left: "-180px" }, 500);
    $(".side-menu").animate({ left: "0px" }, 500);
  } else {
    $(".menu").animate({ left: "0px" }, 500);
    $(".side-menu").animate({ left: "182px" }, 500);
  }
});

$(".menu i").on("click", function () {
  $(".menu").animate({ left: "-180px" }, 500);
  $(".side-menu").animate({ left: "0px" }, 500);
});

// accordion
$(".my-accordion div:first").css("display", "block");

$(".my-accordion h3").on("click", function () {
  $(this).next().slideToggle(500);
  $(".acc").not($(this).next()).slideUp(500);
});

// countdown
var countDownDate = new Date("July 26, 2024 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  displayTime(days, hours, minutes, seconds);
}, 1000);

function displayTime(days, hours, minutes, seconds) {
  let box = "";
  box = `
    <div class="col-md-3 my-card">
                    <div>
                        <div class="p-4 py-5 text-center border border-2">
                            ${days} D
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-card">
                    <div>
                        <div class="p-4 py-5 text-center border border-2">
                            ${hours} H
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-card">
                    <div>
                        <div class="p-4 py-5 text-center border border-2">
                            ${minutes} M
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-card">
                    <div>
                        <div class="p-4 py-5 text-center border border-2">
                            ${seconds} S
                        </div>
                    </div>
                </div>
    `;
  document.getElementById("countdown-data").innerHTML = box;
}

// contact us
const textarea = document.getElementById("textarea");
const remaining = document.getElementById("remaining");
const maxChars = 100;

$(textarea).on("input", function () {
  const charCount = textarea.value.length;
  const remainingChars = maxChars - charCount;
  remaining.innerHTML = `${remainingChars}`;

  if (remainingChars < 0) {
    textarea.value = textarea.value.substring(0, maxChars);
    remaining.innerHTML = `0`;
  }
});
