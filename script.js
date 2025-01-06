function handleResumeDownload() {
  
  document.getElementById("download-message").style.display = "block";
  
  
  setTimeout(function() {
    document.getElementById("download-message").style.display = "none";
  }, 3000);
}
