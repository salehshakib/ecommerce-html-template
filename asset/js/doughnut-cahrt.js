// Access the canvas element by its ID
const chart1 = document.getElementById("browserLoginChart").getContext("2d");

// Create a new Doughnut chart
const myDoughnutChart31 = new Chart(chart1, {
  type: "doughnut", // Specify the type of chart
  data: {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple"], // Labels for the chart segments
    datasets: [
      {
        label: "Colors Distribution",
        data: [12, 19, 3, 5, 2], // Data for each segment
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
// Access the canvas element by its ID
const chart2 = document.getElementById("osLoginChart").getContext("2d");

// Create a new Doughnut chart
const myDoughnutChart2 = new Chart(chart2, {
  type: "doughnut", // Specify the type of chart
  data: {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple"], // Labels for the chart segments
    datasets: [
      {
        label: "Colors Distribution",
        data: [12, 19, 3, 5, 2], // Data for each segment
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
// Access the canvas element by its ID
const chart3 = document.getElementById("countryLoginChart").getContext("2d");

// Create a new Doughnut chart
const myDoughnutChart3 = new Chart(chart3, {
  type: "doughnut", // Specify the type of chart
  data: {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple"], // Labels for the chart segments
    datasets: [
      {
        label: "Colors Distribution",
        data: [12, 19, 3, 5, 2], // Data for each segment
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
