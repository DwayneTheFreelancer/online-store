"use strict";

var dropTrigger = document.querySelector(".drop-trigger");
var dropHeader = document.querySelector(".drop-header");
var dropLinks = document.querySelectorAll(".drop-links");

dropTrigger.addEventListener("click", function () {
    if (dropHeader.style.display == "block") {
        $(".drop-header").slideUp();
    } else {
        $(".drop-header").slideDown();
    }
});
var itemControl = document.querySelector(".controls");
var leftControl = document.getElementById("left-control");
var rightControl = document.getElementById("right-control");
var homeItems = document.querySelector(".home-items");
var parentItems1 = document.getElementById("parent-items-1");
var parentItems2 = document.getElementById("parent-items-2");

var headControls = document.getElementById("head-controls");
headControls.addEventListener("click", function (e) {
    if (e.target.tagName == "I") {
        if (e.target.id == "left-control") {
            parentItems1.style.display = "flex";
            parentItems2.style.display = "none";
        } else if (e.target.id = "right-control") {
            parentItems1.style.display = "none";
            parentItems2.style.display = "flex";
        }
    }
});

/**********************
    POP UP MODAL #1
**********************/

$(document).ready(function () {
    $("#button-popup").click(function () {
        $(".window-popup").fadeIn(1000);
    });

    $(".window-popup").click(function () {
        $(".window-popup").fadeOut();
    });
});
var share = document.getElementById("share");
var shareLinks = document.getElementById("share-links");
var socialMedias = "\n    <ul class=\"social-links\">\n        <li><a href=\"#\">Twitter</a></li>\n        <li><a href=\"#\">Facebook</a></li>\n        <li><a href=\"#\">Google+</a></li>\n        <li><a href=\"#\">LinkedIn</a></li>\n        <li><a href=\"#\">Reddit</a></li>\n        <li><a href=\"#\">Tumblr</a></li>\n    </ul>\n";

shareLinks.style.display = "none";
shareLinks.innerHTML = socialMedias;
share.addEventListener("click", function () {
    if (shareLinks.style.display == "none") {
        $("#share-links").slideDown();
    } else {
        $("#share-links").fadeOut();
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3BIZWFkZXIuanMiLCJpdGVtQ29udHJvbHMuanMiLCJtb2RhbHMuanMiLCJzaGFyZUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJkcm9wVHJpZ2dlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRyb3BIZWFkZXIiLCJkcm9wTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsIiQiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiaXRlbUNvbnRyb2wiLCJsZWZ0Q29udHJvbCIsImdldEVsZW1lbnRCeUlkIiwicmlnaHRDb250cm9sIiwiaG9tZUl0ZW1zIiwicGFyZW50SXRlbXMxIiwicGFyZW50SXRlbXMyIiwiaGVhZENvbnRyb2xzIiwiZSIsInRhcmdldCIsInRhZ05hbWUiLCJpZCIsInJlYWR5IiwiY2xpY2siLCJmYWRlSW4iLCJmYWRlT3V0Iiwic2hhcmUiLCJzaGFyZUxpbmtzIiwic29jaWFsTWVkaWFzIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUFBLGNBQUFDLFNBQUFDLGFBQUEsQ0FBQSxlQUFBLENBQUE7QUFDQSxJQUFBQyxhQUFBRixTQUFBQyxhQUFBLENBQUEsY0FBQSxDQUFBO0FBQ0EsSUFBQUUsWUFBQUgsU0FBQUksZ0JBQUEsQ0FBQSxhQUFBLENBQUE7O0FBRUFMLFlBQUFNLGdCQUFBLENBQUEsT0FBQSxFQUFBLFlBQUE7QUFDQSxRQUFBSCxXQUFBSSxLQUFBLENBQUFDLE9BQUEsSUFBQSxPQUFBLEVBQUE7QUFDQUMsVUFBQSxjQUFBLEVBQUFDLE9BQUE7QUFDQSxLQUZBLE1BRUE7QUFDQUQsVUFBQSxjQUFBLEVBQUFFLFNBQUE7QUFDQTtBQUNBLENBTkE7QUNKQSxJQUFBQyxjQUFBWCxTQUFBQyxhQUFBLENBQUEsV0FBQSxDQUFBO0FBQ0EsSUFBQVcsY0FBQVosU0FBQWEsY0FBQSxDQUFBLGNBQUEsQ0FBQTtBQUNBLElBQUFDLGVBQUFkLFNBQUFhLGNBQUEsQ0FBQSxlQUFBLENBQUE7QUFDQSxJQUFBRSxZQUFBZixTQUFBQyxhQUFBLENBQUEsYUFBQSxDQUFBO0FBQ0EsSUFBQWUsZUFBQWhCLFNBQUFhLGNBQUEsQ0FBQSxnQkFBQSxDQUFBO0FBQ0EsSUFBQUksZUFBQWpCLFNBQUFhLGNBQUEsQ0FBQSxnQkFBQSxDQUFBOztBQUVBLElBQUFLLGVBQUFsQixTQUFBYSxjQUFBLENBQUEsZUFBQSxDQUFBO0FBQ0FLLGFBQUFiLGdCQUFBLENBQUEsT0FBQSxFQUFBLFVBQUFjLENBQUEsRUFBQTtBQUNBLFFBQUFBLEVBQUFDLE1BQUEsQ0FBQUMsT0FBQSxJQUFBLEdBQUEsRUFBQTtBQUNBLFlBQUFGLEVBQUFDLE1BQUEsQ0FBQUUsRUFBQSxJQUFBLGNBQUEsRUFBQTtBQUNBTix5QkFBQVYsS0FBQSxDQUFBQyxPQUFBLEdBQUEsTUFBQTtBQUNBVSx5QkFBQVgsS0FBQSxDQUFBQyxPQUFBLEdBQUEsTUFBQTtBQUNBLFNBSEEsTUFHQSxJQUFBWSxFQUFBQyxNQUFBLENBQUFFLEVBQUEsR0FBQSxlQUFBLEVBQUE7QUFDQU4seUJBQUFWLEtBQUEsQ0FBQUMsT0FBQSxHQUFBLE1BQUE7QUFDQVUseUJBQUFYLEtBQUEsQ0FBQUMsT0FBQSxHQUFBLE1BQUE7QUFDQTtBQUNBO0FBQ0EsQ0FWQTs7QUNSQTs7OztBQUlBQyxFQUFBUixRQUFBLEVBQUF1QixLQUFBLENBQUEsWUFBQTtBQUNBZixNQUFBLGVBQUEsRUFBQWdCLEtBQUEsQ0FBQSxZQUFBO0FBQ0FoQixVQUFBLGVBQUEsRUFBQWlCLE1BQUEsQ0FBQSxJQUFBO0FBQ0EsS0FGQTs7QUFJQWpCLE1BQUEsZUFBQSxFQUFBZ0IsS0FBQSxDQUFBLFlBQUE7QUFDQWhCLFVBQUEsZUFBQSxFQUFBa0IsT0FBQTtBQUNBLEtBRkE7QUFJQSxDQVRBO0FDSkEsSUFBQUMsUUFBQTNCLFNBQUFhLGNBQUEsQ0FBQSxPQUFBLENBQUE7QUFDQSxJQUFBZSxhQUFBNUIsU0FBQWEsY0FBQSxDQUFBLGFBQUEsQ0FBQTtBQUNBLElBQUFnQix1VUFBQTs7QUFXQUQsV0FBQXRCLEtBQUEsQ0FBQUMsT0FBQSxHQUFBLE1BQUE7QUFDQXFCLFdBQUFFLFNBQUEsR0FBQUQsWUFBQTtBQUNBRixNQUFBdEIsZ0JBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUF1QixXQUFBdEIsS0FBQSxDQUFBQyxPQUFBLElBQUEsTUFBQSxFQUFBO0FBQ0FDLFVBQUEsY0FBQSxFQUFBRSxTQUFBO0FBQ0EsS0FGQSxNQUVBO0FBQ0FGLFVBQUEsY0FBQSxFQUFBa0IsT0FBQTtBQUNBO0FBQ0EsQ0FOQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZHJvcFRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtdHJpZ2dlclwiKTtcbnZhciBkcm9wSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wLWhlYWRlclwiKTtcbnZhciBkcm9wTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3AtbGlua3NcIik7XG5cbmRyb3BUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRyb3BIZWFkZXIuc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcbiAgICAgICAgJChcIi5kcm9wLWhlYWRlclwiKS5zbGlkZVVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5kcm9wLWhlYWRlclwiKS5zbGlkZURvd24oKTtcbiAgICB9XG59KTsiLCJjb25zdCBpdGVtQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbHNcIik7XG5jb25zdCBsZWZ0Q29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1jb250cm9sXCIpO1xuY29uc3QgcmlnaHRDb250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1jb250cm9sXCIpO1xuY29uc3QgaG9tZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWl0ZW1zXCIpO1xuY29uc3QgcGFyZW50SXRlbXMxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJlbnQtaXRlbXMtMVwiKTtcbmNvbnN0IHBhcmVudEl0ZW1zMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyZW50LWl0ZW1zLTJcIik7XG5cbmNvbnN0IGhlYWRDb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZC1jb250cm9sc1wiKTtcbmhlYWRDb250cm9scy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09IFwiSVwiKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImxlZnQtY29udHJvbFwiKSB7XG4gICAgICAgICAgICBwYXJlbnRJdGVtczEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgcGFyZW50SXRlbXMyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9IFwicmlnaHQtY29udHJvbFwiKSB7XG4gICAgICAgICAgICBwYXJlbnRJdGVtczEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcGFyZW50SXRlbXMyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKlxuICAgIFBPUCBVUCBNT0RBTCAjMVxuKioqKioqKioqKioqKioqKioqKioqKi9cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKFwiI2J1dHRvbi1wb3B1cFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLndpbmRvdy1wb3B1cFwiKS5mYWRlSW4oMTAwMCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLndpbmRvdy1wb3B1cFwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLndpbmRvdy1wb3B1cFwiKS5mYWRlT3V0KCk7XG4gICAgfSk7XG5cbn0pOyIsImNvbnN0IHNoYXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGFyZVwiKTtcbmNvbnN0IHNoYXJlTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoYXJlLWxpbmtzXCIpO1xuY29uc3Qgc29jaWFsTWVkaWFzID0gYFxuICAgIDx1bCBjbGFzcz1cInNvY2lhbC1saW5rc1wiPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ud2l0dGVyPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkZhY2Vib29rPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkdvb2dsZSs8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGlua2VkSW48L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UmVkZGl0PC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlR1bWJscjwvYT48L2xpPlxuICAgIDwvdWw+XG5gO1xuXG5zaGFyZUxpbmtzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbnNoYXJlTGlua3MuaW5uZXJIVE1MID0gc29jaWFsTWVkaWFzO1xuc2hhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZihzaGFyZUxpbmtzLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgJChcIiNzaGFyZS1saW5rc1wiKS5zbGlkZURvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3NoYXJlLWxpbmtzXCIpLmZhZGVPdXQoKTtcbiAgICB9XG59KTsiXX0=
