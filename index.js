window.addEventListener('load', function() {
  const innerHTML = document.body.innerHTML.replace(/うんち/g, "うんち💩").replace(/うんこ/g, "うんこ💩");

  document.body.innerHTML = innerHTML;
});
