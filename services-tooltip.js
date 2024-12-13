const toolTips = document.querySelectorAll('.tooltip');
const toolTipTexts = document.querySelectorAll('.tooltip-text');

toolTips.forEach((toolTip, index) => {
  const toolTipText = toolTipTexts[index];

  // Affiche le tooltips quand il est cliqué dessus
  toolTip.addEventListener('click', (event) => {
    event.stopPropagation();
    toolTipText.style.visibility = 'visible';
    
  });
});

// Cache les tooltips quand on clique ailleurs sur le document
document.addEventListener('click', () => {
  toolTipTexts.forEach((toolTipText) => {
    toolTipText.style.visibility = 'hidden';
  });
});

