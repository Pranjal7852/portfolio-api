document.addEventListener("DOMContentLoaded", function () {
  var collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(function (collapsible) {
    collapsible.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var symbol = this.querySelector(".toggle-symbol");
      // Toggle the 'show' class on the content
      content.classList.toggle("show");

      this.classList.toggle("active");

      if (content.classList.contains("show")) {
        symbol.textContent = "[-]";
      } else {
        symbol.textContent = "[+]";
      }
    });
  });

  var expandAllBtn = document.querySelector(".expand-btn");
  expandAllBtn.addEventListener("click", function () {
    var isExpand = this.textContent.includes("Expand");
    collapsibles.forEach(function (collapsible) {
      var content = collapsible.nextElementSibling;
      var symbol = collapsible.querySelector(".toggle-symbol");
      if (isExpand) {
        content.classList.add("show");
        symbol.textContent = "[-]";
      } else {
        content.classList.remove("show");
        symbol.textContent = "[+]";
      }
    });
    this.textContent = isExpand ? "Collapse all cards" : "Expand all cards";
  });
});
