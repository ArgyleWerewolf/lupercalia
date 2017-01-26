const regex = /(saint )?(st(\.)? )?valentine'?s?/gi;
const replacement = 'Horny Werewolf';
const els = document.getElementsByTagName('*');
let total = 0;

for (var i = 0; i < els.length; i++) {
  const el = els[i];
  for (var j = 0; j < el.childNodes.length; j++) {
    const node = el.childNodes[j];
    if (node.nodeType === 3) {
      const replacedText = node.nodeValue.replace(regex, replacement);
      if (replacedText !== node.nodeValue) {
        el.replaceChild(document.createTextNode(replacedText), node);
        total++;
      }
    }
  }
}

if (total > 0) {
  const message = total + ' rowdy werewolves on this page!';
  (total < 10) ? console.info(message) : console.warn(message + ' Be careful!');
}