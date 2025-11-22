import { templates } from './templates/index.js';

const sidebar = document.getElementById('template-list');
const viewport = document.getElementById('slide-viewport');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const copyBtn = document.getElementById('copy-btn');

let currentCategory = null;
let currentTemplateIndex = 0;
let flatList = [];

function init() {
  renderSidebar();
  if (flatList.length > 0) {
    loadTemplate(0);
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentTemplateIndex > 0) {
      loadTemplate(currentTemplateIndex - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentTemplateIndex < flatList.length - 1) {
      loadTemplate(currentTemplateIndex + 1);
    }
  });

  copyBtn.addEventListener('click', () => {
    const html = viewport.innerHTML;
    navigator.clipboard.writeText(html).then(() => {
      const originalText = copyBtn.innerText;
      copyBtn.innerText = 'Copied!';
      setTimeout(() => copyBtn.innerText = originalText, 2000);
    });
  });

  // Handle resizing for scale
  window.addEventListener('resize', scaleViewport);
  scaleViewport();
}

function renderSidebar() {
  sidebar.innerHTML = '';
  flatList = [];
  
  Object.keys(templates).forEach(category => {
    const catHeader = document.createElement('div');
    catHeader.className = 'category-header';
    catHeader.innerText = category;
    sidebar.appendChild(catHeader);

    templates[category].forEach((template, index) => {
      const globalIndex = flatList.length;
      flatList.push({ ...template, category });
      
      const item = document.createElement('div');
      item.className = 'template-item';
      item.innerText = template.name;
      item.dataset.index = globalIndex;
      item.addEventListener('click', () => loadTemplate(globalIndex));
      sidebar.appendChild(item);
    });
  });
}

function loadTemplate(index) {
  currentTemplateIndex = index;
  const template = flatList[index];
  
  // Highlight sidebar
  document.querySelectorAll('.template-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`.template-item[data-index="${index}"]`)?.classList.add('active');

  // Render
  viewport.innerHTML = template.render();
  
  // Update buttons
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === flatList.length - 1;
}

function scaleViewport() {
  const container = document.getElementById('main');
  const scaleX = (container.clientWidth - 40) / 1280;
  const scaleY = (container.clientHeight - 100) / 720;
  const scale = Math.min(scaleX, scaleY, 1); // Max scale 1
  
  viewport.style.transform = `scale(${scale})`;
}

init();
