const text = `Common Problems Faced by Property Owners in Erode

Many individuals who own land in Erode start construction with excitement but soon face unexpected challenges. One of the most common issues is lack of clear planning. Some contractors begin work without proper drawings or cost estimation, leading to confusion midway through the project.`;

const lines = text.split('\n');
const htmlParts = [];
let firstHeadingDone = false;

for (let i=0; i<lines.length; i++) {
  const raw = lines[i];
  const t = raw.trim();
  if (!t) continue;
  
  const isShort = t.length <= 80;
  const noPeriod = !t.endsWith('.');
  const noColon = !t.endsWith(':');
  const noMultiSentence = !/[.!?]\s+[A-Z]/.test(t);
  
  console.log(`"${t}" -> short:${isShort}, noPeriod:${noPeriod}, noColon:${noColon}, noMulti:${noMultiSentence}`);
  
  if (isShort && noPeriod && noColon && noMultiSentence) {
    if (!firstHeadingDone) { htmlParts.push(`<h2>${t}</h2>`); firstHeadingDone = true; }
    else { htmlParts.push(`<h3>${t}</h3>`); }
  } else {
    htmlParts.push(`<p>${t}</p>`);
  }
}
console.log(htmlParts.join('\n'));
