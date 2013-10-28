// Halloween Costume Idea Generator
// based on words.cgi
// 2013 m. hairston

function rr(max) {
    return Math.floor(Math.random()*max);
}

var adj =     g1.split('*');
var obj =     g2.split('*');
var state1 =  g3a.split('*');
var state2 =  g3b.split('*');
var subst =   g3b2.split('*');

var nadj =    adj.length;
var nobj =    obj.length;
var nstate1 = state1.length;
var nstate2 = state2.length;
var nsub =    subst.length;


function getWord(part) {
  if ( part == "adj" )
      return adj[rr(nadj)];

  if ( part == "obj" )
      return obj[rr(nobj)];

  if ( part == "state1" )
      return state1[rr(nstate1)];

  if ( part == "state2" )
      return state2[rr(nstate2)];

  if ( part == "subst" )
      return subst[rr(nsub)];

  // in case none of above:
  return "* ";
}

function combo(){
    var phrase = getWord("adj") + " " + getWord("obj");

    if (rr(10) < 8) {
        phrase += " " + getWord("state1");
    } else {
        phrase += " with " + getWord("state2")
        if (rr(100) < 10) {
          phrase += " " + getWord("subst");
        }
    }

    return phrase;
}

function generate() {
  var idea = document.getElementById('idea-text');
  idea.classList.add('faded');
  window.setTimeout(function(){
    idea.innerHTML = combo();
    idea.classList.remove('faded');
  }, 500);
