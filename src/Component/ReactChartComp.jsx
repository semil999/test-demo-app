import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ReactChartComp = () => {
    let data = {
          
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 10]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          }
        },
      
      
      };
  return (
    <>
        <div>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="line" height={500} width={500} />
            </div>
            <div id="html-dist"></div>
        </div>
    </>
  )
}

export default ReactChartComp
