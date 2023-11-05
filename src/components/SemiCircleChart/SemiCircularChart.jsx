import React, { useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const SemiCircularChart = ({ percentage }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Destroy the previous chart instance when the component is unmounted or updated
    if (chartRef.current) {
      chartRef.current.chartInstance.destroy();
    }

    // Create a new chart instance
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "#4caf50");
    gradient.addColorStop(1, "#e1e1e1");

    const newChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [percentage, 100 - percentage],
            backgroundColor: [gradient, "#e1e1e1"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutoutPercentage: 70,
        rotation: -0.5 * Math.PI,
        circumference: Math.PI,
        legend: {
          display: false,
        },
      },
    });

    // Clean up the chart when the component is unmounted
    return () => {
      newChart.destroy();
    };
  }, [percentage]);

  return (
    <div style={{ width: "100px", height: "100px" }}>
      <canvas ref={chartRef} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span
          style={{ fontSize: "24px", fontWeight: "bold", color: "#4caf50" }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default SemiCircularChart;
