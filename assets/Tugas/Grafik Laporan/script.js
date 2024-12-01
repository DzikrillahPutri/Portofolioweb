// Data simulasi untuk penduduk Jawa Barat
const dataByRegion = [
    { region: "Bandung", population: 3000000 },
    { region: "Bogor", population: 2500000 },
    { region: "Bekasi", population: 2700000 },
    { region: "Depok", population: 2000000 },
    { region: "Cirebon", population: 1800000 }
  ];
  
  // Pie Chart
  const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: dataByRegion.map(d => d.region),
      datasets: [{
        label: 'Population',
        data: dataByRegion.map(d => d.population),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }]
    }
  });
  
  // Line Chart
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: dataByRegion.map(d => d.region),
      datasets: [{
        label: 'Population Growth',
        data: [2900000, 2400000, 2600000, 1900000, 1750000], // Simulasi data pertumbuhan
        borderColor: '#36A2EB',
        fill: false,
        tension: 0.1
      }]
    }
  });
  
  // Bar Chart
  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: dataByRegion.map(d => d.region),
      datasets: [{
        label: 'Population by Region',
        data: dataByRegion.map(d => d.population),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }]
    }
  });
  