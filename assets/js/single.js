var getRepoIssues = function (repo) {
    console.log(repo);
    //create var to hold query

    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    //update fetch request to receive and handle servers response
    
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            console.log(data);
          });
        }
        else {
          alert("There was a problem with your request!");
        }
      });

    }
    var displayIssues = function(issues) {

    };
getRepoIssues();