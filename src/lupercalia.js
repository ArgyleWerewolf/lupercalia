const regex = /(saint )?(st(\.)?)? ?valentine'?s?/gi;
const replacement = 'Horny Werewolf';
const els = document.getElementsByTagName('*');

for (var i = 0; i < els.length; i++) {
  const el = els[i];

  for (var j = 0; j < el.childNodes.length; j++) {
    const node = el.childNodes[j];

    if (node.nodeType === 3) {
      const text = node.nodeValue;
      const replacedText = node.nodeValue.replace(regex, replacement);

      if (replacedText !== text) {
        el.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
