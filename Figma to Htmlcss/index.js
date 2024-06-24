

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var icon = sidebar.querySelector('.iconcolor');
    var number = sidebar.querySelector('.number');
    
    if (sidebar.classList.contains('open')) {
        // Collapse sidebar
        sidebar.classList.remove('open');
        icon.classList.remove('fa-circle-arrow-left');
        icon.classList.add('fa-circle-arrow-right');
        document.querySelector(".sidebartext").style.width = "123px";
        document.querySelector(".iconcolor").style.marginLeft  = "68px";
        document.querySelector(".number").style.marginLeft  = "36px";
        number.style.display = 'inline-block';
    } else {
        // Expand sidebar
        sidebar.classList.add('open');
        icon.classList.remove('fa-circle-arrow-right');
        document.querySelector(".sidebartext").style.width = "249px"
        document.querySelector(".iconcolor").style.marginLeft  = "197px";
        icon.classList.add('fa-circle-arrow-left');
        number.style.display = 'none';
        // Add ul with li tags
        
    }
    
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

