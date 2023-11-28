document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var levelName = document.getElementById('level_name').value;
  var levelId = document.getElementById('level_id').value;
  var levelDifficulty = document.getElementById('level_difficulty').value;
  var responseEmail = document.getElementById('email').value;
  var data = {
    username: username,
    levelName: levelName,
    levelId: levelId,
    levelDifficulty: levelDifficulty,
    responseEmail: responseEmail
  };
  fetch('/submit_request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function(response) {
    if (response.ok) {
      document.querySelector('h3[name="submitted"]').style.display = "block";
      setTimeout(function(){
	document.querySelector('h3[name="submitted"]').style.display = "none";
      }, 10000);
    } else {
      document.querySelector('h3[name="submit_fail"]').style.display = "block";
      setTimeout(function(){
	document.querySelector('h3[name="submit_fail"]').style.display = "none";
      }, 10000);
    }
  }).catch(function(error) {
    document.querySelector('h3[name="submit_fail"]').style.display = "block";
    setTimeout(function(){
      document.querySelector('h3[name="submit_fail"]').style.display = "none";
    }, 10000);
  });
});
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var question = document.getElementById('question').value;
  var data = {
    name: name,
    email: email,
    question: question
  };
  fetch('/submit_question', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function(response) {
    if (response.ok) {
      // Email successfully sent
    } else {
      // Email failed to send
    }
  }).catch(function(error) {
    // Email failed to send
  });
});