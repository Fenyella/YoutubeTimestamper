function linkFunction() {
  let ytLink = document.getElementById("YTLink").value;
  let hours = Number(document.getElementById("YThours").value);
  let min = Number(document.getElementById("YTmin").value);
  let sec = Number(document.getElementById("YTsec").value);

  /*
while (
    Number.isNaN(hours) ||
    Number.isNaN(min) ||
    Number.isNaN(sec)
) {
    link = prompt(
        "Try again! Link|Hours|Minutes|Seconds - The time needs to be in numbers!",
    ).split("|");
    ytLink = link[0];
    hours = Number(link[1]);
    min = Number(link[2]);
    sec = Number(link[3]);
    }  */

  function secsWithJavaScript(hours, min, sec) {
    return Math.floor(hours * 60 * 60 + min * 60 + sec);
  }
  //Using innerText now - Avoiding XSS vuln
  document.getElementById("show").innerText =
    ytLink + "&t=" + secsWithJavaScript(hours, min, sec) + "s";
  console.log(ytLink + "&t=" + secsWithJavaScript(hours, min, sec) + "s");
}
