const skills = [
  { label: "S&OP / IBP", value: 5 },
  { label: "Planejamento de Demanda", value: 5 },
  { label: "SAP / ERP", value: 4 },
  { label: "Analytics (KPIs)", value: 5 },
  { label: "Liderança", value: 4 },
  { label: "Estratégia Supply Chain", value: 4 },
];

function buildLegend() {
  const legend = document.getElementById("skillsLegend");
  if (!legend) return;

  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span class="dot"></span>
      <span>${skill.label}</span>
      <span class="value">${skill.value}/5</span>
    `;
    legend.appendChild(item);
  });
}

function initRadarChart() {
  const canvas = document.getElementById("skillsRadar");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: skills.map((s) => s.label),
      datasets: [
        {
          label: "Nível de competência",
          data: skills.map((s) => s.value),
          backgroundColor: "rgba(212, 61, 82, 0.25)",
          borderColor: "rgba(212, 61, 82, 0.9)",
          borderWidth: 2,
          pointBackgroundColor: "#d43d52",
          pointBorderColor: "#1a1f26",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#d43d52",
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        duration: 1200,
        easing: "easeOutQuart",
      },
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            backdropColor: "transparent",
            color: "rgba(255, 255, 255, 0.35)",
            font: { size: 10 },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          pointLabels: {
            color: "rgba(255, 255, 255, 0.65)",
            font: {
              size: 10,
              weight: "500",
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#1a1f26",
          titleColor: "rgba(255,255,255,0.9)",
          bodyColor: "rgba(255,255,255,0.7)",
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          titleFont: { size: 13 },
          bodyFont: { size: 12 },
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label(context) {
              return ` ${context.parsed.r}/5`;
            },
          },
        },
      },
    },
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  buildLegend();
  initRadarChart();
  initScrollReveal();
});
