const portfolioConfig = {
  // Basic Information
  siteTitle: "Portfolio Template - Two Panel Layout",
  leftPanelTitle: "LEFT PANEL",
  rightPanelTitle: "RIGHT PANEL",
  middleText: "Click a panel to expand it",
  
  // Colors (CSS custom properties will be updated)
  colors: {
    leftPanelBg: "#333",
    rightPanelBg: "#555",
    expandedPanelBg: "#2a2a2a",
    textColor: "white",
    accentColor: "#4a9eff",
    borderColor: "rgba(255, 255, 255, 0.1)"
  },
  
  // Animation Settings
  animations: {
    transitionDuration: "0.3s",
    transitionTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    panelWidth: "175px"
  },
  
  // Font Settings
  fonts: {
    bodyFont: "'Lexend', sans-serif",
    headingFont: "'Archivo Black', serif"
  }
};

// Apply configuration on page load
document.addEventListener('DOMContentLoaded', function() {
  // Update page title
  document.title = portfolioConfig.siteTitle;
  
  // Update panel titles
  const leftHeading = document.querySelector('.left-panel h1');
  const rightHeading = document.querySelector('.right-panel h1');
  const middleElement = document.querySelector('.middle p');
  
  if (leftHeading) leftHeading.textContent = portfolioConfig.leftPanelTitle;
  if (rightHeading) rightHeading.textContent = portfolioConfig.rightPanelTitle;
  if (middleElement) middleElement.textContent = portfolioConfig.middleText;
  
  // Apply colors via CSS custom properties
  const root = document.documentElement;
  root.style.setProperty('--left-panel-bg', portfolioConfig.colors.leftPanelBg);
  root.style.setProperty('--right-panel-bg', portfolioConfig.colors.rightPanelBg);
  root.style.setProperty('--expanded-panel-bg', portfolioConfig.colors.expandedPanelBg);
  root.style.setProperty('--text-color', portfolioConfig.colors.textColor);
  root.style.setProperty('--border-color', portfolioConfig.colors.borderColor);
  
  // Apply animation settings
  root.style.setProperty('--transition-duration', portfolioConfig.animations.transitionDuration);
  root.style.setProperty('--transition-timing', portfolioConfig.animations.transitionTiming);
  root.style.setProperty('--panel-width', portfolioConfig.animations.panelWidth);
  
  // Apply fonts
  document.body.style.fontFamily = portfolioConfig.fonts.bodyFont;
  
  // Update script.js panel title references
  if (typeof closeAll === 'function') {
    // Override the original panel title reset function
    const originalCloseAll = closeAll;
    window.closeAll = function() {
      originalCloseAll();
      // Reset to configured titles instead of hardcoded ones
      if (rightHeading) rightHeading.textContent = portfolioConfig.rightPanelTitle;
      if (leftHeading) leftHeading.textContent = portfolioConfig.leftPanelTitle;
    };
  }
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioConfig;
}
